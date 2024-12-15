<template>
  <div>
    <div v-if="error" class="text-red-500">{{ error }}</div>
    <ul :class="viewMode === 'row' ? 'flex flex-wrap gap-4' : 'flex flex-col space-y-4'">
      <li
        v-for="event in events"
        :key="event.title + event.startTime"
        class="border border-gray-300 rounded-lg p-4 shadow-md flex flex-col"
      >
        <h3 class="text-lg font-bold">{{ event.title }}</h3>
        <p class="text-gray-600">{{ event.startTime }}</p>
        <p v-if="event.description" class="text-sm text-gray-700 mt-2">
          {{ event.description }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup>

const runtimeConfig = useRuntimeConfig();
const apiKey = runtimeConfig.public.gcalApi;


const props = defineProps({
  viewMode: {
    type: String,
    default: 'stacked', // 'stacked' or 'row'
  },
  maxEvents: {
    type: Number,
    default: 10,
  },
});

const events = ref([]);
const error = ref(null);

const transformEvents = (json) => {
  
  if (!json.items) return [];

  return json.items
    .filter((event) => {
      const start = new Date(event.start.dateTime || event.start.date);
      return start > new Date();
    })
    .slice(0, props.maxEvents)
    .map((event) => {
      return {
        title: event.summary || 'No Title',
        description: cleanDescription(event.description || ''),
        startTime: formatDate(event.start.dateTime || event.start.date),
        endTime: event.end?.dateTime ? formatDate(event.end.dateTime) : null,
      };
    });
};

const cleanDescription = (description) => {
  return description
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\n/g, ' ') // Replace newlines with spaces
    .replace(/&[^;]+;/g, ''); // Remove HTML entities
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { timeZone: 'America/Denver', dateStyle: 'medium', timeStyle: 'short' };
  return new Intl.DateTimeFormat(undefined, options).format(date);
};

onMounted(() => { console.log('onMounted is firing'); ;
})

onMounted(async () => {
  try {

    if (!apiKey) {
      throw new Error('API Key is missing or undefined');
    }

    let url = `https://www.googleapis.com/calendar/v3/calendars/c_e8d7b8b002021c6e46b590bc005edaf635632e1824d563791326c3ba8359e89b@group.calendar.google.com/events?key=`;
    url += apiKey;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Fetch failed: ${response.status} ${response.statusText}`);
    }

    const json = await response.json();
    events.value = transformEvents(json);

  } catch (err) {
    console.error('Error caught:', err.message);
    error.value = 'Failed to load events';
  }
});

</script>

<style>
/* Add any component-specific styles here */
</style>
