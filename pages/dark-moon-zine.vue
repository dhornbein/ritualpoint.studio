<template>
  <div class="flex flex-col min-h-screen">
    <nav class="p-2 border-b border-white">
      <nuxt-link to="/" class="link-wavy">Go Home</nuxt-link> | <nuxt-link to="/dmz">Dark Moon Zine</nuxt-link> <nuxt-link to="/dmz/01" class="link-wavy">Issue 01</nuxt-link> <nuxt-link to="/dmz/02" class="link-wavy">Issue 02</nuxt-link>
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