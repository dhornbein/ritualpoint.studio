<template>
  <main class="container mx-auto p-8 flex flex-col gap-4">

    <nuxt-link to="/tattoo" class="link-wavy text-xl">Go To Tattoo Page</nuxt-link>
    
    <h1 class="title">Tattoo Consultation</h1>

    <p>Choose one of these options to get in touch.</p>

    <div class="flex flex-col gap-4">
      <BaseLink :link="link" v-for="(link, idx) in links" :key="idx" />
    </div>

    <div class="max-w-prose mb-4 flex gap-4 flex-col text-justify">

      <nuxt-link to="/tattoo" class="link-wavy text-xl">👈🏻 Go To Tattoo Page to learn more</nuxt-link>
    </div>
  </main>
</template>

<script setup>
const links = [
  {
    href: 'https://airtable.com/shrLSG7NSYbLens0K',
    class: '',
    title: 'Tattoo idea form',
    subtitle: 'Fill out this form and I\'ll get in touch with you!',
    verb: 'Submit',
    img: '/img/eye.png'
  },
  {
    href: 'http://instagram.com/ritualpoint',
    class: '',
    title: 'On Instagram',
    subtitle: 'Let\'s talk about what you want to do',
    verb: 'DM Me',
    img: '/img/insta.png'
  },
  {
    href: 'https://cal.com/ritualpoint/consult',
    class: '',
    title: 'Free 30 min consult (optional)',
    subtitle: 'Schedule a phone call',
    verb: 'Schedule',
    img: '/img/clock.png'
  },
  {
    href: 'https://cal.com/ritualpoint/artwork',
    class: '',
    title: 'Half Day Session',
    subtitle: '$50 transferable but non-refundable deposit, if you already know you want to get to it.',
    verb: 'Schedule',
    img: '/img/nib.png'
  },
]
</script>