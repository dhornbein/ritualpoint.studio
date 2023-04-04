<template>
  <div class="flex flex-col justify-center items-center min-h-screen">
    <h1>Found</h1>
    <p v-if="slug">Found page: {{slug}}</p>
    
    <nuxt-link to="/" class="underline decoration-wavy underline-offset-4">Go Home</nuxt-link>
  </div>
</template>

<script setup>
// get the slug from the route
const { params } = useRoute()
const slug = params.slug
const found = [
  '20221126',
  'anarchy',
  'eye',
  'money',
  'hand',
  'swords',
  'ink',
  'time',
]
</script>