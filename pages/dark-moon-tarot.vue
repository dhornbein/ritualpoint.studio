<template>
  <main class="w-full bg-white text-stone-900 p-8">
    <!-- ritual point logo link to home -->
    <div class="flex justify-center text-center">
      <nuxt-link to="/">
        <img
          class="w-24"
          src="/img/logo_black.png"
          alt="Ritual Point"
        /> home
      </nuxt-link>
      </div>


    
    <!-- page advertising the pre-sale dark moon tarot with a link to stripe checkout page there is an $85 option and a $105 option which has more "vibes" than the other -->
    <div class="flex flex-col items-center gap-8 mb-16">
      <h1 class="text-4xl font-bold text-center mt-8 max-w-screen-md"><img src="/dark-moon-tarot/logo.png" alt="Dark Moon Tarot"></h1>
      <p class="text-center">Click the card to flip</p>
      <div class="card-pull">
        <Tarot-Card />
      </div>
      <p class="max-w-prose">The Dark Moon Tarot is a 78 card deck hand drawn over a year in this orange sketchbook. This deck is a celebration of the moon. The booklet is in production and the cards are being printed, you can support this project by joining my patreon (there is a free tier) to follow along with the development.</p>
      <p class="max-w-prose">The Deck and Booklet should be ready for sale early 2025. Most patron tiers will get a copy of the tarot deck when it comes out.</p>
      <div class="flex flex-wrap items-center justify-center">
        <BaseButton href="//www.patreon.com/ritualpoint/" :dark="true">Patreon</BaseButton>
        <BaseButton href="//instagram.com/ritualpoint" :dark="true">Instagram</BaseButton>
      </div>
      <div class="flex flex-wrap justify-center items-center text-center">
        <div><img src="/deck-mock/03_card_sm.png" alt="Empress">&#8546; The Empress</div>
        <div><img src="/deck-mock/w06_card_sm.png" alt="6 of Wands">6 of Wands</div>
        <div><img src="/deck-mock/p01_card_sm.png" alt="Ace of Pentacles">Ace of Pentacles</div>
      </div>
      <p>These designs are available on shirts and other objects in my <a href="https://store.ritualpoint.studio/" target="_blank">merch store</a>. Use code <strong>DARKMOON</strong> for 10% off.</p>
      <a href="https://store.ritualpoint.studio/" target="_blank" class="flex items-center gap-2 invert">
        <img src="/img/txt_store.png" alt="Store" class="h-14">
        <img src="/img/shirt.png" alt="" class="h-14">
      </a>
      <p>Questions? <a href="mailto:drew@ritualpoint.studio">drew@ritualpoint.studio</a></p>
      <div class="bg-white w-full p-8 flex justify-center">
        <img src="/dark-moon-tarot/book.jpg" class="max-w-lg w-full" alt="A bright orange sketchbook with the words TAROT on the cover">
      </div>
    </div>
  </main>
</template>

<script setup>
const desc = 'The Dark Moon Tarot by Ritual Point'
definePageMeta({
  alias: ['/dmt','/tarot'],
})
useHead({
  title: desc,
  meta: [
    { name: 'description', content: desc },
    { hid: 'og-desc', property: 'og:description', content: desc },
    { hid: 'og-type', property: 'og:type', content: 'product' },
    { hid: 'og-title', property: 'og:title', content: 'The Dark Moon Tarot' },
    { hid: 'og-image', property: 'og:image', content: 'https://ritualpoint.studio/img/og-darkmoon.jpg' },
    { hid: 'og-url', property: 'og:url', content: 'https://ritualpoint.studio/dark-moon-tarot' },
    { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },
  ],
})

</script>