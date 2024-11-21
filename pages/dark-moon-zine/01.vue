<template>
  <main class="flex flex-col">
    <nav class="p-2 border-b border-white flex gap-2 sticky top-0 bg-stone-900 z-10 justify-between">
      <div :class="{'rotate-180':invert}">Issue 01</div>
      
      <a @click="invert = !invert" class="cursor-pointer">Flip ({{ invert }})</a>
      <a href="https://www.etsy.com/listing/1821742641/dark-moon-zine-issue-01-beginnings-tarot" target="_blank" class="link-wavy text-pink-400 float-right" >$ Buy Copy</a>
    </nav>
    <div class="zine" :class="{flip: invert}">
      <div class="spread" v-for="(spread, index) in dmz01" :key="index">
        <div class="page" v-for="(page, index) in spread" :key="index">
          <img :src="page.src" :alt="page.text">
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.zine {
  @apply flex flex-col gap-4;
  .spread {
    @apply flex justify-center flex-wrap;
    .page {
      img {
        @apply max-h-screen;
      }
    }
  }
  &.flip {
    @apply flex-col-reverse;
    .spread {
      @apply flex-row-reverse flex-wrap-reverse;
      .page {
        @apply rotate-180;
      }
    }
  }
}
</style>

<script setup>
const desc = 'The Dark Moon Zine Issue 01 by Ritual Point'
useHead({
  title: desc,
  meta: [
    { name: 'description', content: desc },
    { hid: 'og-desc', property: 'og:description', content: desc },
    { hid: 'og-title', property: 'og:title', content: 'The Dark Moon Zine Issue 01' },
    { hid: 'og-image', property: 'og:image', content: 'https://ritualpoint.studio/dmz/og-zine.jpg' },
    { hid: 'og-url', property: 'og:url', content: 'https://ritualpoint.studio/dmz/01' },
  ],
})
const invert = ref(false)
const dmz01 = [
  [
    {
      src: '/dmz/01/DMZ_01_final.jpg',
      text: '',
    }
  ],
  [
    {
      src: '/dmz/01/DMZ_01_final2.jpg',
      text: '',
    },
    {
      src: '/dmz/01/DMZ_01_final3.jpg',
      text: '',
    }
  ],
  [
    {
      src: '/dmz/01/DMZ_01_final4.jpg',
      text: '',
    },
    {
      src: '/dmz/01/DMZ_01_final5.jpg',
      text: '',
    },
  ],
  [
    {
      src: '/dmz/01/DMZ_01_final6.jpg',
      text: '',
    },
    {
      src: '/dmz/01/DMZ_01_final7.jpg',
      text: '',
    }
  ],
  [
    {
      src: '/dmz/01/DMZ_01_spread.png',
      text: '',
    },
  ],
  [
    {
      src: '/dmz/01/DMZ_01_final10.jpg',
      text: '',
    },
    {
      src: '/dmz/01/DMZ_01_final11.jpg',
      text: '',
    }
  ],
  [
    {
      src: '/dmz/01/DMZ_01_final12.jpg',
      text: '',
    },
    {
      src: '/dmz/01/DMZ_01_final13.jpg',
      text: '',
    }
  ],
  [
    {
      src: '/dmz/01/DMZ_01_final14.jpg',
      text: '',
    },
    {
      src: '/dmz/01/DMZ_01_final15.jpg',
      text: '',
    }
  ],
  [
    {
      src: '/dmz/01/DMZ_01_final16.jpg',
      text: '',
    }
  ],
]
</script>