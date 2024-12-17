<template>
  <div>
    <div v-if="error" class="text-red-500">{{ error }}</div>
    <ul :class="viewMode === 'row' ? 'flex flex-wrap gap-4' : 'flex flex-col space-y-4'"
        class="list-item">
      <li
        v-for="event in events"
        :key="event.title + event.startTime"
        class="flex flex-col p-2 border-l-2 border-pink-500 relative md:ml-14 ml-10"
      >

      <div class="absolute font-bold uppercase -left-10 w-10 top-0 md:w-14 md:-left-14 md:top-0 h-full flex flex-col justify-center">
        <p>{{ event.startTimeParts.weekday.slice(0,3) }}</p>
        <p class="text-black bg-pink-300 px-1 md:text-2xl">{{ event.startTimeParts.day }}</p>
        <p>{{ event.startTimeParts.month.slice(0,3) }}</p>
      </div>
      
      <details v-if="event.description">
        <summary class="cursor-pointer">
            <h3 class="text-lg font-bold inline">{{ event.title }}</h3>
            <p class="text-lg text-pink-300">{{ formatToMountainTime(event.startTime) }}</p>
          </summary>
          <p class="text-sm mt-2">
            {{ event.description }}
          </p>
        </details>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { RRule } from 'rrule';

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
  }
});

const events = ref([]);
const error = ref(null);

const transformEvents = (json) => {
  if (!json.items) return [];

  const parsedEvents = [];
  json.items.forEach((event) => {
    const start = toUTCDate(new Date(event.start.dateTime || event.start.date));
    const end = event.end?.dateTime ? toUTCDate(new Date(event.end.dateTime)) : null;

    const parsedEvent = {
      title: event.summary || '',
      description: cleanDescription(event.description || ''),
      startTime: start,
      startTimeParts: getDateParts(start),
      endTime: end,
      endTimeParts: end ? getDateParts(start) : {},
    };

    if (start > new Date()) {
      parsedEvents.push(parsedEvent);
      // if (event.recurrence) {
      //   const recurrence = parseRecurrence(event.recurrence[0], parsedEvent);
      //   parsedEvents.push(...recurrence);
      // }
    }
  });

  return parsedEvents.sort((a, b) => a.startTime - b.startTime).slice(0, props.maxEvents);
};

const parseRecurrence = (rrule, event) => {
  const limit = 10;
  const events = [];

  try {
    const rule = RRule.fromString(rrule);

    // Use the start time of the event as the basis for recurrence calculation
    const startUTC = event.startTime;

    // Generate recurrence dates between start time and far-future limit, slice to match repeats limit
    const dates = rule.between(startUTC, new Date(Date.UTC(2100, 0, 1)))
      .slice(0, limit);

    dates.forEach((date) => {
      events.push({
        title: event.title,
        description: event.description,
        startTime: toUTCDate(date),
        endTime: event.endTime,
      });
    });
  } catch (err) {
    console.error('Failed to parse RRULE:', err);
  }

  return events;
};

const cleanDescription = (description) => {
  return description
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\n/g, ' ') // Replace newlines with spaces
    .replace(/&[^;]+;/g, ''); // Remove HTML entities
};

const toUTCDate = (date) => {
  return new Date(Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes()
  ));
};

const formatToMountainTime = (utcDate) => {
  const options = {
    timeZone: 'America/Denver',
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  };
  return new Intl.DateTimeFormat(undefined, options).format(utcDate);
};

function getDateParts(date = new Date()) {
  const options = { 
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // 24-hour format
    timeZoneName: "short"
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);
  const parts = formatter.formatToParts(date);

  const result = {};
  parts.forEach(({ type, value }) => {
    result[type] = value;
  });

  // Add common combinations for convenience
  result.fullDate = `${result.weekday}, ${result.day} ${result.month} ${result.year}`;
  result.time = `${result.hour}:${result.minute}:${result.second} ${result.timeZoneName}`;
  result.shortDate = `${result.day}/${date.getMonth() + 1}/${result.year}`;

  console.log(result);
  

  return result;
}

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
