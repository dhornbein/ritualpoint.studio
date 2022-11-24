<template>
  <main class="">
    <section class="gap-8">
      <div class="flex flex-col gap-8 text-2xl">
        <p>Wow! Thank you so very very much. 🙏🏻</p>
        <p>Your support means the world to me. Thank you for paying artists to make art.</p>
        <p>If you have any issues or feedback please email me at <a href="mailto:drew@ritualpoint.studio">drew@ritualpoint.studio</a></p>
        <p><a href="https://store.ritualpoint.studio/" target="_blank">In return here's a discount code to my merch store. Use code <strong class="px-2 border rounded">THANKS</strong> for 13% off.</a></p>
      </div>

      <BaseLink :link="link" v-for="(link, idx) in links" :key="idx" class="w-full" />

      <img src="/img/squiggle.png" alt="" class="max-w-[150px]">

      <blockquote class="max-w-prose">
        We live in capitalism. Its power seems inescapable. So did the divine right of kings. Any human power can be resisted
        and changed by human beings. Resistance and change often begin in art.
        <cite class="float-right mt-4">&mdash; Ursula K. Le Guin</cite>
      </blockquote>

      <img src="/img/hand-bill.png" alt="" class="my-8">
    </section>
  </main>
</template>



<script setup>
const links = [
  {
    href: 'https://store.ritualpoint.studio/',
    class: '',
    title: 'Merch Store',
    subtitle: 'Use code THANKS for 13% off',
    verb: 'Visit',
    img: '/img/shirt.png'
  },
  {
    href: 'http://instagram.com/ritualpoint',
    class: '',
    title: 'Instagram',
    subtitle: 'Surveillance of the self',
    verb: '',
    img: '/img/insta.png'
  },
  {
    href: '/dark-moon-tarot',
    class: 'bg-white text-stone-900',
    title: 'Dark Moon Tarot',
    subtitle: 'Hand drawn tarot deck',
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
    title: '1 Hour Tarot Reading',
    subtitle: 'Experience an intuitive tarot reading',
    verb: 'Schedule',
    img: '/img/tarot.png'
  },
  {
    href: '/',
    class: '',
    title: 'Go Home',
    img: '/img/logo_mark.png'
  },
]
</script>