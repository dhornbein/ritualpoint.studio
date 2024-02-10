<template>
  <main class="min-h-screen px-4 py-10 flex flex-col gap-4 justify-around items-center">
    <nuxt-link to="/" class="flex gap-4 justify-center">
      <img src="/img/logo_mark.png" alt="" class="h-16">
      <img src="/img/txt-pay-me.png" alt="Pay Me" class="h-16">
      <img src="/img/hand-bill.png" alt="" class="h-16">
    </nuxt-link>

    <p class="font-weird">Money is power, thank you for using your power to support art.</p>

    <BaseLink :link="link" v-for="(link, idx) in links" :key="idx" class="w-full" />

    <div class="text-center">
      <p><a href="mailto:hello@ritualpoint.studio">hello@ritualpoint.studio</a></p>
      <p><a href="instagram.com/ritualpoint"><img src="/img/insta.png" alt="Insta" class="h-4 inline-block"> @RitualPoint</a></p>
    </div>

  </main>
</template>

<script setup>
const links = [
  {
    href: 'https://venmo.com/dddrew',
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
    href: 'patreon.com/RitualPoint',
    class: 'bg-white text-stone-900',
    title: 'Patreon',
    subtitle: 'Follow updates from me for free, become a patron and get exclusive content, the Dark Moon Tarot Deck, and special deals on my art!',
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
]
</script>