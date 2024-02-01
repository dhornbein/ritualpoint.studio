<template>
  <div class="flex flex-col min-h-screen">
    <nav class="p-2 border-b border-white">
      <nuxt-link to="/" class="underline decoration-wavy underline-offset-4">Go Home</nuxt-link> | <nuxt-link to="/dmz">Dark Moon Zine</nuxt-link> <nuxt-link to="/dmz/01" class="underline decoration-wavy underline-offset-4">Issue 01</nuxt-link> | 
          <a class="underline decoration-wavy underline-offset-4 text-pink-400" href="https://forms.gle/JMhF7712UwV4Hps37" target="_blank">Get a copy in the mail</a>
    </nav>
    <NuxtPage />
  </div>
</template>

<script setup>
// get the slug from the route
const { params } = useRoute()
const slug = params.slug
definePageMeta({
  alias: ['/dmz', '/zine'],
})
const desc = 'The Dark Moon Zine by Ritual Point'
useHead({
  title: desc,
  meta: [
    { name: 'description', content: desc },
    { hid: 'og-desc', property: 'og:description', content: desc },
    { hid: 'og-type', property: 'og:type', content: 'product' },
    { hid: 'og-title', property: 'og:title', content: 'The Dark Moon Zine' },
    { hid: 'og-image', property: 'og:image', content: 'https://ritualpoint.studio/dmz/og-zine.jpg' },
    { hid: 'og-url', property: 'og:url', content: 'https://ritualpoint.studio/dmz' },
    { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },
  ],
})
</script>