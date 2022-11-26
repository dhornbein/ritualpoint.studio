<template>
  <div>
    <div class="max-w-prose mb-4">
      <h2 class="title mb-2">How to get a tattoo:</h2>
      
      <ul class="list-disc pl-8">
        <li>Send me your custom idea (or the flash you desire) using the form, or setup a consultation</li>
        <li>Schedule a 3 hour visit, $50 deposit it non-refundable but is transferable (up to 48 hours before session)</li>
        <li>I'll meet you and we'll do the inking</li>
      </ul>
    </div>
    <div class="flex flex-col gap-4">
      <BaseLink :link="link" v-for="(link, idx) in links" :key="idx" />
    </div>
  </div>
</template>

<script setup>
const links = [
  {
    href: 'https://airtable.com/shrLSG7NSYbLens0K',
    class: '',
    title: 'Tattoo idea form',
    subtitle: 'Let\'s make art together, fill out this form with your idea',
    verb: 'Submit',
    img: '/img/eye.png'
  },
  {
    href: 'https://cal.com/ritualpoint/consult',
    class: '',
    title: 'Free 30 min consult (optional)',
    subtitle: 'Discuss a project idea',
    verb: 'Schedule',
    img: '/img/clock.png'
  },
  {
    href: 'https://cal.com/ritualpoint/artwork',
    class: '',
    title: '3 Hour Artwork Session',
    subtitle: '$50 transferable but non-refundable deposit',
    verb: 'Schedule',
    img: '/img/nib.png'
  },
]
</script>