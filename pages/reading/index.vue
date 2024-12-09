<template>
  <div class="flex flex-col items-center p-4 relative">
    <base-nav />
    <section class="flex flex-col gap-6">

      <div class="text-left flex flex-col gap-2">
        <h2 class="text-4xl">Tarot Readings</h2>
        <img src="/public/tattoo/hand-001.png"
          alt="Two hands reaching out from behind a veil of darkness, mysterious and alluring">
        <p class="text-2xl">I offer a unique deeply grounded intuitive Tarot reading experience both in person and
          online.</p>
        <p>Curious? Keep reading or reach out:</p>
        <p><a href="mailto:hello@ritualpoint.studio" class="link-wavy text-pink-400">hello@ritualpoint.studio</a></p>
      </div>

    </section>

    <img src="/img/squiggle.png" alt="" class="max-w-[150px]">

    <section class="max-w-full min-h-fit">
      <h1 class="text-2xl mb-4">Offerings</h1>
      <p class="italic mb-4"><nuxt-link to="/reading/free" class="link-wavy text-pink-400">Try a free
          reading</nuxt-link></p>

      <div class="flex flex-wrap gap-4 justify-center">
        <div class="offering" v-for="(offering, index) in offerings" :key="index">
          <h2 class="text-lg font-bold mb-4">{{ offering.title }}</h2>
          <p>{{ offering.desc }}</p>
          <!-- <div class="flex flex-col items-center">
            <base-button :href="offering.cta.href">{{ offering.cta.text }}</base-button>
            <nuxt-link v-if="offering.more" :to="offering.more" class="link-wavy">Learn More</nuxt-link>
          </div> -->
        </div>
      </div>

      <p class="mt-8">Interested? reach out:</p>
      <p><a href="mailto:hello@ritualpoint.studio" class="link-wavy text-pink-400">hello@ritualpoint.studio</a></p>
    </section>

    <section class="flex flex-col gap-4 min-h-fit max-w-prose">
      <h1 class="text-2xl mb-4">Why Tarot?</h1>
      <p>You are an incredibly powerful sense maker.</p>

      <p>
        Your subconscious is constantly weaving meaning from the chaos of a dense and overwhelming world. But so much of
        this brilliance is muted—tuned out by the overloading noise of our sensory-saturated culture.
      </p>

      <p>
        Tarot offers a bridge to reconnect with this deep, intuitive wisdom. I guide you in using tarot as a tool to
        explore your inner landscape, unlock clarity, and illuminate the mysteries that matter most to you.
      </p>

      <h1 class="text-2xl mb-4">About Me</h1>

      <img class="rounded" src="/img/the-artist-drew-smiling.JPG" alt="A picture of me, drew, the artist swaddled in a blanked smiling at you">

      <p>
        I'm a queer mystic living in Denver, blending a background as a technologist, material rationalist, skeptic,
        activist, and artist into a practice that bridges the mystical and rational, the dark and the light, the
        personal
        and the political. I've come to understand a grounded form of intuitive magic that is both fantastic and
        mundane.
      </p>

      <p>
        I hold a deep belief that the world can, and must, rule itself. This is my audacious goal and to achieve this
        we—the citizens of this world—must learn to rule ourselves. That journey starts with understanding and
        connecting
        with our autonomy and power.
      </p>
    </section>

    <div class="my-20 md:p-8 w-full">
      <h1 class="text-2xl text-center mb-10">Get a free reading</h1>
      <p class="pb-4 max-w-prose mx-auto">Want to get a sense of what Tarot can do? Pull a card and I'll give you a
        little free reading over
        email.</p>
      <tarot-reading></tarot-reading>
    </div>

    <img src="/img/sword.png" alt="The sword which I battle capitalism" class="max-h-[400px] my-24">
  </div>
</template>

<style lang="scss">
.offering {
  @apply p-4 border rounded border-slate-600 max-w-xs;
}
</style>

<script setup>
const offerings = [
  {
    title: 'Intuitive Coaching',
    desc: 'Coaching that uses the Tarot to help you develop clarity, intention, and transformation through actionable guidance. Schedule a free consultation:',
    cta: {
      href: '/',
      text: 'Schedule'
    },
    more: '/reading/coaching'
  },
  {
    title: 'private Readings',
    desc: 'Deep, spacious sessions for personalized guidance and reflection, available online or in person. Schedule a reading today:',
    cta: {
      href: '/',
      text: 'Schedule'
    },
    more: '/reading/private'
  },
  {
    title: 'Event Tarot Readings',
    desc: 'Bring tarot magic to your gatherings with tailored readings for your guests.',
    cta: {
      href: '/',
      text: 'Learn More'
    }
  },
]
</script>