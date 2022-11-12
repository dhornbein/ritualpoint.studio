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
    <div class="flex flex-col items-center gap-8">
      <h1 class="text-4xl font-bold text-center mt-8 max-w-screen-md"><img src="/dark-moon-tarot/logo.png" alt="Dark Moon Tarot"></h1>
      <h2 class="title font-weird">Pre-sale</h2>
      <p class="text-center">Click the card to flip</p>
      <div class="card-pull">
        <Tarot-Card />
      </div>
      <p class="max-w-prose">The Dark Moon Tarot is a 78 card deck hand drawn over a year in this orange sketchbook. This deck is a celebration of the moon. The booklet is in production and the cards are being printed, you can support this project by pre-ordering.</p>
      <h2 class="title font-weird">Pre-Order</h2>
      <p class="max-w-prose">Buy the idea of this deck. Imagine a beautifully printed deck with a guidebook and an exquisite box. Pre-order the <strong>mundane version</strong> and you'll get the deck and booklet when it is ready. Order the <strong>deluxe version</strong> for the deck, booklet, and original artwork (plus special surprises).</p>
      <div class="flex flex-wrap items-center justify-center">
        <BaseButton href="//buy.stripe.com/bIY9AO08Ha2j6Zi3cd" :dark="true">Mundane $56</BaseButton>
        <BaseButton href="//buy.stripe.com/aEUeV8dZx4HZ1EY9AC" :dark="true">Deluxe $116</BaseButton>
      </div>
      <div class="flex flex-wrap justify-center items-center text-center">
        <div><img src="/deck-mock/03_card_sm.png" alt="Empress">&#8546; The Empress</div>
        <div><img src="/deck-mock/w06_card_sm.png" alt="6 of Wands">6 of Wands</div>
        <div><img src="/deck-mock/p01_card_sm.png" alt="Ace of Pentacles">Ace of Pentacles</div>
      </div>
      <div class="bg-white w-full p-8 flex justify-center">
        <img src="/dark-moon-tarot/book.jpg" class="max-w-lg" alt="A bright orange sketchbook with the words TAROT on the cover">
      </div>
      <p>Questions? <a href="mailto:drew@ritualpoint.studio">drew@ritualpoint.studio</a></p>
    </div>
  </main>
</template>

<script setup>
const desc = 'The Dark Moon Tarot by Ritual Point'
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