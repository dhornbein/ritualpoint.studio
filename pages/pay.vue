<template>
  <main class="min-h-screen px-4 py-10 flex flex-col gap-4 justify-around items-center">
    <nuxt-link to="/" class="flex gap-4 justify-center">
      <img src="/img/logo_mark.png" alt="" class="h-16">
      <img src="/img/txt-pay-me.png" alt="Pay Me" class="h-16">
      <img src="/img/hand-bill.png" alt="" class="h-16">
    </nuxt-link>

    <p class="font-weird">Money is power, thank you for using your power to support art.</p>

    <BaseLink :link="link" v-for="(link, idx) in links" :key="idx" class="w-full" />

    <p><a href="mailto:drew@ritualpoint.studio">drew@ritualpoint.studio</a></p>

  </main>
</template>

<script setup>
const links = [
  {
    href: 'https://buy.stripe.com/00g28m2gPgqHbfy4gj',
    class: '',
    title: 'With Venmo',
    subtitle: 'Send money via Venmo to @dddrew (that\'s me)',
    verb: 'Pay',
    img: '/img/venmo.png'
  },
  {
    href: 'https://buy.stripe.com/00g28m2gPgqHbfy4gj',
    class: '',
    title: 'With Card or Bank Account',
    subtitle: 'Send money via Stripe',
    verb: 'Pay',
    img: '/img/credit-card.png'
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
    href: '/dark-moon-tarot',
    class: 'bg-white text-stone-900',
    title: 'Dark Moon Tarot',
    subtitle: 'Hand drawn tarot deck',
    verb: 'Pre-Order',
    img: '/dark-moon-tarot/circle-dark.png'
  },
]
</script>