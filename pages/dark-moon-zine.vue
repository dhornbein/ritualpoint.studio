<template>
  <div class="flex flex-col min-h-screen">
    <nav class="p-2 border-b border-white">
      <nuxt-link to="/" class="underline decoration-wavy underline-offset-4">Go Home</nuxt-link> | <nuxt-link to="/dmz">Dark Moon Zine</nuxt-link> <nuxt-link to="/dmz/01" class="underline decoration-wavy underline-offset-4">Issue 01</nuxt-link>
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
</script>