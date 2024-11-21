<template>
  <a :href="link.href" :class="link.class" class="link" target="_blank" v-if="link.href.startsWith('http')">
    <div class="link__image">
      <img :src="link.img" alt="" class="object-contain">
    </div>
    <div>
      <p class="text-xl"><strong v-if="link.verb">{{ link.verb }}:</strong> {{ link.title }}</p>
      <small class="text-sm">{{ link.subtitle }}</small>
    </div>
  </a>
  <nuxt-link :to="link.href" :class="link.class" class="link" v-else>
    <div class="link__image">
      <img :src="link.img" alt="" class="object-contain">
    </div>
    <div>
      <p class="text-xl"><strong v-if="link.verb">{{ link.verb }}:</strong> {{ link.title }}</p>
      <small class="text-sm">{{ link.subtitle }}</small>
    </div>
  </nuxt-link>
</template>

<script setup>
const props = defineProps(['link'])
const link = props.link
</script>

<style lang="scss" scoped>
.link {
  @apply p-4 rounded border flex gap-4 items-center;
  .link__image {
    @apply w-16 h-16 flex justify-center flex-shrink-0;
  }
}
</style>