<script setup>
const { params } = useRoute()
let tattoo = ref(false)

const response = await $fetch('/api/tattoo/' + params.id)

if(response.status === 404) {
  $router.push('/404')
}

if(response.status === 200) {
  tattoo = response.data
}

console.log('response', response);

</script>

<template>
  <main>
    <p>Your Tattoo</p>
    <p class="error" v-if="response.error">
      <pre>{{ response.error }}</pre>
    </p>

    <div class="tattoo" v-if="tattoo">
      <h1 class="text-3xl">{{ tattoo.Name }}</h1>
      <p>{{ tattoo.Notes }}</p>
      <div class="inspiration" v-if="tattoo.Inspiration.length > 0">
        <h2 class="font-bold">Inspiration</h2>
        <div class="photoSet">
          <img :src="image.thumbnails.large.url" :alt="image.filename" v-for="(image, idx) in tattoo.Inspiration" :key="idx">
        </div>
      </div>
    </div>
  </main>
</template>