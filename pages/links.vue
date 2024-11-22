<template>
  <main class="min-h-screen px-4 py-10 flex flex-col gap-4 justify-around">
    <nuxt-link to="/" class="flex gap-4 justify-center">
      <img src="/img/logo_mark.png" alt="" class="h-16">
      <img src="/img/logo.png" alt="Ritual Point" class="h-16">
    </nuxt-link>

    <nuxt-link to="/dmt" class="max-h-[60vh] rounded-md border border-gray-400 relative overflow-hidden">
      <p class="absolute text-5xl drop-shadow-lg font-bold mix-blend-difference">Dark Moon Tarot is For Sale LEARN MORE</p>
      <img class="object-cover" src="/dark-moon-tarot/dmt-product-box-open-cards.jpg" alt="Dark Moon Tarot">
    </nuxt-link>

    <BaseLink :link="link" v-for="(link, idx) in links" :key="idx" />

  </main>
</template>

<script setup>
const links = [
  {
    href: '//ritualpoint.etsy.com/',
    class: 'bg-orange-400 text-black',
    title: 'Etsy Shop',
    subtitle: 'Buy the Dark Moon Tarot! ALso browse my zines and prints',
    verb: 'Visit',
    img: '/img/icon-flower.png'
  },
  {
    href: '//patreon.com/RitualPoint',
    class: 'bg-white text-stone-900',
    title: 'Patreon',
    subtitle: 'Follow updates from me for free, become a patron and get exclusive content, the Dark Moon Tarot Deck, and special deals!',
    verb: 'Join',
    img: '/img/logo_black.png'
  },
  {
    href: '/dark-moon-zine/01',
    class: '',
    title: 'The Dark Moon Zine: Issue 01',
    subtitle: 'The first of 10 zines that will become the Dark Moon Tarot booklet',
    verb: 'Read',
    img: '/dmz/01/DMZ_01_final.jpg'
  },
  // {
  //   href: 'https://store.ritualpoint.studio/',
  //   class: '',
  //   title: 'Merch Store',
  //   subtitle: 'Art you can wield and wear',
  //   verb: 'Visit',
  //   img: '/img/shirt.png'
  // },
  {
    href: '/pay',
    class: '!border-fuchsia-600',
    title: 'me',
    subtitle: 'want to give me some money?',
    verb: 'Pay',
    img: '/img/hand-bill.png'
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
    href: 'http://instagram.com/ritualpoint',
    class: '',
    title: 'Instagram',
    subtitle: 'Surveillance of the self',
    verb: '',
    img: '/img/insta.png'
  },
]
</script>