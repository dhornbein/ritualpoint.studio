<template>
  <main class="min-h-screen px-4 py-10 flex flex-col gap-4 justify-around">
    <nuxt-link to="/" class="flex gap-4 justify-center">
      <img src="/img/logo_mark.png" alt="" class="h-16">
      <img src="/img/logo.png" alt="Ritual Point" class="h-16">
    </nuxt-link>

    <template v-for="(link, idx) in links" :key="idx">
      <a :href="link.href" :class="link.class" class="link" v-if="link.href.startsWith('http')">
        <div class="w-16 flex justify-center">
          <img :src="link.img" alt="" class="h-16">
        </div>
        <div>
          <p class="text-xl"><strong v-if="link.verb">{{ link.verb }}:</strong> {{ link.title }}</p>
          <small class="text-sm">{{ link.subtitle }}</small>
        </div>
      </a>
      <nuxt-link :to="link.href" :class="link.class" class="link" v-else>
        <img :src="link.img" alt="" class="w-16">
        <div>
          <p class="text-xl"><strong v-if="link.verb">{{ link.verb }}:</strong> {{ link.title }}</p>
          <small class="text-sm">{{ link.subtitle }}</small>
        </div>
      </nuxt-link>
    </template>

  </main>
</template>

<script setup>
const links = [
  {
    href: 'https://store.ritualpoint.studio/',
    class: '',
    title: 'Merch Store',
    subtitle: 'Art you can wield and wear',
    verb: 'Visit',
    img: '/img/at.png'
  },
  {
    href: 'https://airtable.com/shrLSG7NSYbLens0K',
    class: '',
    title: 'Art idea form',
    subtitle: 'Let\'s make art together, fill out this form with your idea',
    verb: 'Submit',
    img: '/img/skin.png'
  },
  {
    href: '/dark-moon-tarot',
    class: 'bg-white text-stone-900',
    title: 'Dark Moon Tarot',
    subtitle: 'Hand drawn tarot deck',
    verb: 'Pre-Order',
    img: '/dark-moon-tarot/circle-dark.png'
  },
  {
    href: 'https://cal.com/ritualpoint/consult',
    class: '',
    title: 'Free 30 min consult',
    subtitle: 'Discuss a project idea',
    verb: 'Schedule',
    img: '/img/eye.png'
  },
  {
    href: 'https://cal.com/ritualpoint/reading-60',
    class: '',
    title: '1 Hour Reading',
    subtitle: 'Experience an intuitive tarot reading',
    verb: 'Schedule',
    img: '/img/tarot.png'
  },
  {
    href: 'https://cal.com/ritualpoint/artwork',
    class: '',
    title: '3 Hour Artwork Session',
    subtitle: '$50 transferable but non-refundable deposit',
    verb: 'Schedule',
    img: '/img/nib.png'
  },
]
</script>

<style lang="scss" scoped>
.link {
  @apply p-4 rounded border border-white flex gap-4 items-center;
}
</style>