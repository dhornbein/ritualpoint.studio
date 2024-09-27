<template>
  <div>
    <main class="container mx-auto p-8 flex flex-col gap-4">
      <nuxt-link to="/tattoo" class="underline decoration-wavy underline-offset-4 text-xl hover:text-pink-400">&#9754;
        Go
        To Tattoo
        Page</nuxt-link>
      <h1 class="title md:!text-4xl">Redeem Your Voucher</h1>
      <p>You have a magic ticket? A Tattoo voucher? Then your deposit is not needed.</p>
      <div class="max-w-prose">
        <h2 class="title mb-2">What to do:</h2>
        <ul class="list-disc pl-8">
          <li>Send me your custom idea (or the flash you desire) using the form, or setup a consultation</li>
          <li>Schedule a 3 hour visit with the above link</li>
          <li>I'll meet you and we'll do the inking</li>
        </ul>
      </div>
      <BaseLink :link="link" v-for="(link, idx) in links" :key="idx" />
      <p>Need to get in touch?</p>
      <ul>
        <li>Email me at <a class="underline decoration-wavy underline-offset-4 text-indigo-300"
            href="mailto:redeem@ritualpoint.studio">Drew@RitualPoint.Studio</a></li>
        <li>DM me on instagram <a class="underline decoration-wavy underline-offset-4 text-indigo-300"
            href="https://www.instagram.com/ritualpoint">@RitualPoint</a></li>
      </ul>
      <div class="flex justify-center items-center flex-col gap-6 my-6">
        <p class="text-center">Learn more about my tattoo practice:</p>
        <img src="/img/squiggle.png" alt="" class="h-10">
      </div>
    </main>
    <TattooPage :embedded="true" />
    <div class="container mx-auto p-8 flex flex-col gap-4">
      <BaseLink :link="link" v-for="(link, idx) in links" :key="idx" />
    </div>
  </div>
</template>

<script setup>
import TattooPage from './index.vue';
definePageMeta({
  alias: ['/tattoo/voucher'],
})
const links = [
  {
    href: 'https://airtable.com/shrLSG7NSYbLens0K',
    class: '',
    title: 'Tattoo idea form',
    subtitle: 'Let\'s make art together, fill out this form with your idea',
    verb: 'Submit',
    img: '/img/eye.png'
  },
  {
    href: 'https://cal.com/ritualpoint/consult',
    class: '',
    title: 'Free 30 min consult (optional)',
    subtitle: 'Discuss a project idea',
    verb: 'Schedule',
    img: '/img/clock.png'
  },
  {
    href: 'https://cal.com/ritualpoint/artwork-free',
    class: '',
    title: '3 Hour tattoo session',
    subtitle: 'This schedule waives the $50 deposit',
    verb: 'Schedule',
    img: '/img/nib.png'
  }
]
</script>