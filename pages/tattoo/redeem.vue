<template>
  <div class="flex flex-col gap-4 p-4 border border-yellow-400 rounded-sm">
    <h1 class="title">Redeem Voucher</h1>
    <p>You have a magic ticket? A Tattoo voucher? Then your deposit is not needed.</p>
    <div class="max-w-prose">
      <h2 class="title mb-2">What to do:</h2>
    
      <ul class="list-disc pl-8">
        <li>Send me your custom idea (or the flash you desire) using the form, or setup a consultation</li>
        <li>Schedule a 3 hour visit with the above link</li>
        <li>I'll meet you and we'll do the inking</li>
      </ul>
    </div>
    <BaseLink :link="link" v-for="(link, idx) in links" :key="idx" />
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
    href: 'https://cal.com/ritualpoint/artwork-free',
    class: '',
    title: '3 Hour tattoo session',
    subtitle: 'This schedule waives the $50 deposit',
    verb: 'Schedule',
    img: '/img/nib.png'
  }
]
</script>