<template>
  <main class="py-8 flex justify-center">


    <div class="flex flex-col gap-8 w-full lg:w-auto">
      <div class="tattoo-body">
        <nuxt-link v-if="!embedded" to="/" class="underline decoration-wavy underline-offset-4 text-xl">Go
          Home</nuxt-link>
        <h1 class="title md:!text-4xl">At Home Divine Tattoo</h1>
        <p>Humans have been adorning our bodies with ink for millennia. I am carrying on the tradition of hand-poked
          tattoos within a ritualized container that is comfy and safe.</p>
        <p v-if="!embedded" class="text-gray-400">I offer spacious magical hand poked tattoo sessions at your home,
          <nuxt-link to="/tattoo/consult" class="">get
            started here</nuxt-link>, have a voucher? <nuxt-link to="/tattoo/redeem">Redeem it here</nuxt-link>
        </p>
        <img src="/tattoo/clients-outdoor.jpg" alt="">
        <p>I want to give the art of tattooing the time and attention a lifelong body modification deserves. I perform
          this magic in your home (or wherever feels most comfortable to you, in or near Denver Colorado). I specialize
          in co-creating artwork through intuitive tarot divination to help imbue your art with deep meaning.</p>
        <div class="flex justify-center"><img src="/img/lines.png" alt="" class="h-10"></div>
        <img src="/tattoo/hand-004.png" alt="">
        <p>Tattoos are scars that mark the significant moments of our lives and they are beautiful adornments that
          express our deepest selves.</p>
        <div class="border border-indigo-800 rounded p-4 flex gap-4 flex-col text-left">
          <h2 class="title">Offering</h2>
          <p>My primary offering is a spacious half-day session where I meet you in your space and take time to open a
            container to co-create the artwork then apply it under your skin. Here's how it works:</p>

          <ol class="list-disc pl-8">
            <li>Start with a consultation, either by text, DM (on <a href="http://instagram.com/ritualpoint"
                target="_blank">Instagram</a>), or a call. Here is where we will see if I'm a good fit and what you have
              in mind.</li>
            <li>Once we have an idea of what you want we will set up a meeting time, you'll put down a non-refundable
              (but transferable) deposit of $50.</li>
            <li>I'll come to your space and we'll get to work.</li>
          </ol>
          <nuxt-link v-if="!embedded" to="/tattoo/consult"
            class="underline decoration-wavy underline-offset-4 bg-indigo-900/25 text-indigo-300 p-6 text-center rounded">Click
            here to get started</nuxt-link>
        </div>
        <div class="grid sm:grid-cols-2 gap-2">
          <img src="/tattoo/clients-cindy.jpg" alt="">
          <img src="/tattoo/art-cindy.jpg" alt="">
        </div>
        <div class="flex justify-center"><img src="/img/hand-bill.png" alt="" class="h-20 text-center"></div>
        <p class="text-sm text-gray-300 text-center">Hourly Sliding Scale Price</p>
        <div class="sliding-scale flex justify-between items-center text-2xl">
          <div>$90</div>
          <hr class="w-full mx-6 border-dotted">
          <div>$170</div>
        </div>
        <p>Sliding scale price of $90 to $170 an hour (half day is typically 4 hours). The size and complexity of a
          piece will greatly impact the time and thus the price.</p>
        <nuxt-link v-if="!embedded" to="/tattoo/consult"
          class="underline my-10 decoration-wavy underline-offset-4 bg-indigo-900/25 text-indigo-300 p-6 border border-indigo-300 text-center rounded">Click
          here for a free consultation</nuxt-link>
        <p class="italic text-indigo-200">I want to make this sacred practice accessible to everyone, so I will consider
          trades and discounts, but I urge you to be generous. Money is power and you deserve to pour power into
          yourself.</p>
        <p>I also offer at-home and virtual tarot readings and more traditional tattooing experience.</p>
      </div>

      <div id="carousel" class="lg:hidden relative flex gap-6 snap-x snap-proximity overflow-x-auto">
        <div v-for="(sample, index) in portfolio" :key="index" class="snap-center shrink-0 first:pl-8 last:pr-8">
          <img :src="sample.src" :alt="sample.text" class="object-contain h-full max-h-[80vh] max-w-[80vw] rounded-lg">
        </div>
      </div>

      <div class="tattoo-body">
        <p class="text-sm">&lt;&mdash; Scroll</p>
        <div class="flex justify-center"><img src="/img/squiggle.png" alt="" class="h-10 my-10"></div>
        <p>I bring the values of comfort, ritual, and safety to my practice.</p>
        <img src="/tattoo/hand-002.png" alt="">
        <h2 class="title">Comfort</h2>
        <p>A relaxed body takes and holds ink better. I want you to feel <span
            class="underline decoration-wavy underline-offset-4">soooo</span> comfortable throughout this experience. By
          hosting the ritual in your home (or a friend's home) we can escape the tension and intimidation of a tattoo
          studio environment.</p>
        <p>Hand poked tattoos are often much less painful than using a machine.</p>
        <img src="/tattoo/clients-oscar.jpg" alt="">
        <h2 class="title">Ritual</h2>
        <p>The act of forever modifying your body is a sacred one, I aim to treat it as such through ritual. Magic is
          all around us, accessible and free for anyone to tune into. I use my own blend of intuitive practices, I do
          not take from any tradition that isn't mine nor do I work with any powers beyond the unintelligible mystery of
          the universe and nature.</p>
        <img src="/tattoo/clients-church.jpg" alt="">
        <h2 class="title">Safety</h2>
        <p><span class="text-pink-500">Tattooing always runs a risk of bloodborne illness, infection, and rare
            complications</span>. While no one can reduce these risks to zero I take the reduction of risk very
          seriously by using sterile needles, decontaminate my tools, and other best pratices.</p>
        <p>Performing tattoos in a home is inherently more risky than the more controlled environment of a tattoo
          studio.</p>
        <p>I am also trauma-aware when it comes to consent and the risks of delving into the deep emotional landscape of
          our psyche. While I am not traditionally trained you can rest assured that I will provide grace and empathy in
          our divination time and practice informed enthusiastic consent in your body work.</p>
        <p class="font-bold">In our time together you can always change your mind, stop, or take a break. Anything that
          comes up is welcome and safe.</p>
        <p>My certificate of Bloodborne Pathogen Training</p>
        <TattooCertificate class="text-align" />
        <img src="/tattoo/hand-001.png" alt="">
        <h1 class="title">About The Artist</h1>
        <p>I've been illustrating for over 20 years and found a knack for hand poked tattoo during the pandemic when I
          started to experiment on myself. I've been self studying for the past 3 years, giving tattoos to friends and
          loved ones. I'm now ready to make my art and ritual available to everyone.</p>

        <img src="/tattoo/self-portrait.jpg" alt="">
        <nuxt-link v-if="!embedded" to="/tattoo/consult"
          class="underline decoration-wavy underline-offset-4 bg-indigo-900/25 text-indigo-300 p-6 text-center rounded">Click
          here to get started</nuxt-link>
      </div>
    </div>

    <div class="hidden lg:flex flex-col gap-8">
      <div v-for="(sample, index) in portfolio" :key="index" class="">
        <img :src="sample.src" :alt="sample.text" class="object-contain h-full max-h-[60vh] rounded-xl">
      </div>
    </div>

  </main>
</template>

<script setup>
definePageMeta({
  alias: ['/tat', '/ink'],
})
const props = defineProps({
  embedded: {
    type: Boolean,
    default: false
  }
});
const tattooOGDesc = "Ritualized at home hand poked tattoos and divination"
useHead({
  title: tattooOGDesc,
  meta: [
    { name: 'description', content: tattooOGDesc },
    { hid: 'og-desc', property: 'og:description', content: tattooOGDesc },
    { hid: 'og-title', property: 'og:title', content: 'Hand Poked Tattoo & Divination' },
    { hid: 'og-image', property: 'og:image', content: 'https://ritualpoint.studio/tattoo/og-tattoo.jpg' },
    { hid: 'og-url', property: 'og:url', content: 'https://ritualpoint.studio/tattoo' },
    { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },
  ],
});

const portfolio = [
  {
    src: '/tattoo/art-oscar.jpg',
    text: ''
  },
  {
    src: '/tattoo/art-ains.jpg',
    text: ''
  },
  {
    src: '/tattoo/art-erin.jpg',
    text: ''
  },
  {
    src: '/tattoo/art-hannah.jpg',
    text: ''
  },
  {
    src: '/tattoo/art-karyn.jpg',
    text: ''
  },
  {
    src: '/tattoo/art-katie.jpg',
    text: ''
  },
  {
    src: '/tattoo/art-nav.jpg',
    text: ''
  },
]
</script>

<style lang="scss">
.tattoo-body {
  @apply max-w-prose px-4 md:px-8 mb-4 flex gap-8 flex-col;
  img {
    @apply rounded;
  }
  a {
    @apply underline decoration-wavy underline-offset-4 text-indigo-300 hover:text-pink-400;
  }
}
</style>