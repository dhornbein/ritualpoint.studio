<template>
  <main class="container mx-auto p-8 flex flex-col gap-4">
    <p class="max-w-prose text-slate-400 opa">
      I do underground stick & poke tattoos. So you aren't paying for the tattoo but the art (with a free stick and poke
      tattoo included). Maybe that protects me, probably not.
    </p>

    <NuxtPage />

    <div class="flex flex-col gap-4">
      <BaseLink :link="link" v-for="(link, idx) in links" :key="idx" />
    </div>
  </main>
</template>

<script setup>
const links = [
  {
    href: 'mailto:drew@ritualpoint.studio',
    class: '!border-slate-600 opacity-60 hover:opacity-100',
    title: '',
    subtitle: 'If you have any issues',
    verb: 'Email Me',
    img: '/img/at.png'
  },
  {
    href: 'http://instagram.com/ritualpoint',
    class: '!border-slate-600 opacity-60 hover:opacity-100',
    title: 'On Instagram',
    subtitle: 'Let\'s talk about what you want to do',
    verb: 'DM Me',
    img: '/img/insta.png'
  },
  {
    href: '/pay',
    class: '!border-fuchsia-600 opacity-60 hover:opacity-100',
    title: 'me',
    subtitle: 'want to give me some money?',
    verb: 'Pay',
    img: '/img/hand-bill.png'
  },
]
</script>
