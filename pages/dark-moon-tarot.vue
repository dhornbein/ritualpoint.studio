<template>
  <main class="w-full bg-white text-stone-900 p-8">
    <!-- ritual point logo link to home -->
    <div class="flex justify-between items-center text-center fixed -mt-4 -ml-4 sm:ml-0 sm:mt-0">
      <nuxt-link to="/" class="">
        <img
          class="w-8 sm:w-14 md:w-24"
          src="/img/logo_black.png"
          alt="Ritual Point"
        /> home
      </nuxt-link>
      </div>

    <div class="flex flex-col items-center gap-8 mb-16">

      <div>
        <nuxt-link to="/#dmt-box"><img class="max-h-[80vh]" src="/dark-moon-tarot/dmt-product-box-open-cards.jpg" alt="Dark Moon Tarot"></nuxt-link>
        <hr class="border-t-2 border-black border-dotted my-6 w-1/3 mx-auto">
        <div class="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-black mx-auto"></div>

      </div>

      <div class="max-w-prose text-center">
        <p class="text-2xl mb-4">Dangerous Nonsense to Explore the Unintelligible Truth</p>
        <p>A hand-drawn, 78-card deck celebrating the mysteries of the moon, duality, and transformation.</p>
      </div>

      <BaseButton href="//www.etsy.com/listing/1817759255" :dark="true">Buy Now</BaseButton>

      <p class="text-center max-w-prose"><strong>Peek Into the Deck</strong>: Curious? Click the card below to flip a random card from the Dark Moon Tarot and explore the unintelligible truth it has to reveal.</p>

      <div class="card-pull">
        <Tarot-Card />
      </div>

      <img class="max-h-[80vh] sm:-mt-40 -mt-20" src="/dark-moon-tarot/dmt-product-cards.jpg" alt="a deck of dark moon tarot cards, face down they are black with a white chaotic line forming a dark circle in the center">
      
      <div class="flex items-center justify-center flex-wrap">
        <div class="p-8"><img src="/dark-moon-tarot/book.jpg" class="max-w-lg w-full" alt="A bright orange sketchbook with the words TAROT on the cover"></div>
        <div class="flex flex-col gap-8" >
          <p class="max-w-prose">The <strong>Dark Moon Tarot</strong> was hand-drawn over the course of a year in an orange sketchbook. What started as a daily practice turned into my masterpiece. This deck is a celebration of the moon, its phases, and the feminine time that guides us through cycles of transformation.</p>
          <h2 class="text-2xl">The Deck <a href="https://www.etsy.com/listing/1817759255" class="text-2xl link-wavy">On Sale Now</a></h2>
        </div>
      </div>

      <h2 class="text-2xl">The Booklet (coming soon)</h2>
      <img class="max-h-[80vh]" src="/dark-moon-tarot/dmt-product-book.jpg" alt="a hand bound booklet with purple binding floss lays stretched out on a white background, it's beautiful">
      <p class="max-w-prose">A 100-page companion booklet is currently in production to accompany the Dark Moon Tarot deck. This booklet is more than a guide—it's a work of art in its own right. Each of the 78 cards is brought to life with a full-page, illustrated typographic word art piece, capturing the essence and energy of the card in bold and intricate detail.</p>
      <img class="max-h-[80vh]" src="/dark-moon-tarot/dmt-product-book-open.jpg" alt="an open booklet looking on to two pages, the 3 and 4 of wands. Each page is a riot of hand drawn words all mixing and melding together. Like the mind of an artist spilled as ink on a page.">

      <div class="flex flex-col gap-8 max-w-prose">
        <h2 class="text-3xl font-bold text-center mb-4">Support the Journey on Patreon</h2>
        <p class="text-lg mb-4">
          Join me on Patreon and become part of the evolving story behind the <em>Dark Moon Tarot</em>. As a patron, you'll receive exclusive perks, including discounts on most of the things I create—tarot decks, prints, zines, and more.
        </p>
        <p class="text-lg mb-4">
          Patreon isn't just a way to support my work; it's a shared space where we explore the artist's journey through (the mostly) agony and (sometimes, as a treat) ecstasy together. I share the inside process of monumental projects like creating this deck, offering insights into the creative challenges, breakthroughs, and rituals that bring such work to life.
        </p>
        <p class="text-lg mb-4">
          I also use Patreon to support <strong>your</strong> creative [insert inspiring tagline here]. Whether through [vague encouragement], [slightly mysterious but intriguing offering], or [overly ambitious promise I hope to keep], I aim to [lofty goal that feels both genuine and a little too much]. Together, we can [dramatic metaphor about creation cycles that somehow feels poetic and oddly accurate].
        </p>
        <p class="text-lg">
          Your support helps sustain independent art, magic, and creativity. Join me, and let's get unintelligible together.
        </p>
      </div>

      
      <div class="flex flex-wrap items-center justify-center">
        <BaseButton href="//www.patreon.com/ritualpoint/" :dark="true">Patreon</BaseButton>
        <BaseButton href="//instagram.com/ritualpoint" :dark="true">Instagram</BaseButton>
      </div>

      <img class="max-h-[80vh]" src="/dark-moon-tarot/dmt-product-box-front.jpg" alt="the white cardboard box with a vivid black circle, you can just make out the words DARK MOON on the side. It stands like an obelisk">

      <div class="flex flex-wrap justify-center items-center text-center">
        <div><img src="/deck-mock/03_card_sm.png" alt="Empress">&#8546; The Empress</div>
        <div><img src="/deck-mock/w06_card_sm.png" alt="6 of Wands">6 of Wands</div>
        <div><img src="/deck-mock/p01_card_sm.png" alt="Ace of Pentacles">Ace of Pentacles</div>
      </div>
      
      <p>Questions? <a href="mailto:drew@ritualpoint.studio">drew@ritualpoint.studio</a></p>
      
      <h1 class="text-4xl font-bold text-center mt-8 max-w-screen-md"><img src="/dark-moon-tarot/logo.png" alt="Dark Moon Tarot"></h1>

      <img class="max-h-[80vh]" src="/dark-moon-tarot/dmt-product-box-back-upright.jpg" alt="It's the box again, only this time the back faces you head on. Hand drawn lettering on the back reads: Ritual Point presents Dangerous Nonsense to explore the unintelligible truth">

      <BaseButton href="//www.etsy.com/listing/1817759255" :dark="true">Buy Now</BaseButton>

    
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