<template>
  <main class="min-h-screen px-4 py-10 flex flex-col gap-4 justify-around">
    <nuxt-link to="/" class="flex gap-4 justify-center">
      <img src="/img/logo_mark.png" alt="" class="h-16">
      <img src="/img/logo.png" alt="Ritual Point" class="h-16">
    </nuxt-link>

    <BaseLink :link="link" v-for="(link, idx) in links" :key="idx" />

  </main>
</template>

<script setup>
const links = [
  {
    href: 'patreon.com/RitualPoint',
    class: 'bg-white text-stone-900',
    title: 'Patreon',
    subtitle: 'Follow updates from me for free, become a patron and get exclusive content, the Dark Moon Tarot Deck, and special deals!',
    verb: 'Join',
    img: '/img/logo_black.png'
  },
  {
    href: 'https://store.ritualpoint.studio/',
    class: '',
    title: 'Merch Store',
    subtitle: 'Art you can wield and wear',
    verb: 'Visit',
    img: '/img/shirt.png'
  },
  {
    href: '/pay',
    class: '!border-fuchsia-600',
    title: 'me',
    subtitle: 'want to give me some money?',
    verb: 'Pay',
    img: '/img/hand-bill.png'
  },
  {
    href: '/dark-moon-tarot',
    class: '',
    title: 'The Dark Moon Tarot',
    subtitle: 'Hand drawn tarot deck',
    verb: 'Discover',
    img: '/dark-moon-tarot/circle-dark.png'
  },
  {
    href: 'https://cal.com/ritualpoint/consult',
    class: '',
    title: 'Free 30 min consult',
    subtitle: 'Discuss a project idea',
    verb: 'Schedule',
    img: '/img/clock.png'
  },
  {
    href: 'https://cal.com/ritualpoint/reading-60',
    class: '',
    title: '1 Hour Reading',
    subtitle: 'Experience an intuitive tarot reading',
    verb: 'Schedule',
    img: '/img/tarot.png'
  },
  {
    href: 'https://cal.com/ritualpoint/artwork',
    class: '',
    title: 'Half Day Artwork Session',
    subtitle: '$50 transferable but non-refundable deposit',
    verb: 'Schedule',
    img: '/img/nib.png'
  },
  {
    href: 'http://instagram.com/ritualpoint',
    class: '',
    title: 'Instagram',
    subtitle: 'Surveillance of the self',
    verb: '',
    img: '/img/insta.png'
  },
]
</script>