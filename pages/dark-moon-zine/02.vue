<template>
  <main class="flex flex-col">
    <nav class="p-2 border-b border-white flex gap-2 sticky top-0 bg-stone-900 z-10 justify-between">
      <div :class="{'rotate-180':invert}">Issue 02</div>
      
      <a @click="invert = !invert" class="cursor-pointer">Flip ({{ invert }})</a>
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
      src: '/dmz/02/DMZ_02_final_Page_01.jpg',
      text: '',
    }
  ],
  [
    {
      src: '/dmz/02/DMZ_02_final_Page_02.jpg',
      text: '',
    },
    {
      src: '/dmz/02/DMZ_02_final_Page_03.jpg',
      text: '',
    }
  ],
  [
    {
      src: '/dmz/02/DMZ_02_final_Page_04.jpg',
      text: '',
    },
    {
      src: '/dmz/02/DMZ_02_final_Page_05.jpg',
      text: '',
    },
  ],
  [
    {
      src: '/dmz/02/DMZ_02_final_Page_06.jpg',
      text: '',
    },
    {
      src: '/dmz/02/DMZ_02_final_Page_07.jpg',
      text: '',
    }
  ],
  [
    {
      src: '/dmz/02/DMZ_02_final_Page_08.jpg',
      text: '',
    },
    {
      src: '/dmz/02/DMZ_02_final_Page_09.jpg',
      text: '',
    }
  ],
  [
    {
      src: '/dmz/02/DMZ_02_spread.png',
      text: '',
    },
  ],
  [
    {
      src: '/dmz/02/DMZ_02_final_Page_12.jpg',
      text: '',
    },
    {
      src: '/dmz/02/DMZ_02_final_Page_13.jpg',
      text: '',
    }
  ],
  [
    {
      src: '/dmz/02/DMZ_02_final_Page_14.jpg',
      text: '',
    },
    {
      src: '/dmz/02/DMZ_02_final_Page_15.jpg',
      text: '',
    }
  ],
  [
    {
      src: '/dmz/02/DMZ_02_final_Page_16.jpg',
      text: '',
    },
    {
      src: '/dmz/02/DMZ_02_final_Page_17.jpg',
      text: '',
    }
  ],
  [
    {
      src: '/dmz/02/DMZ_02_final_Page_18.jpg',
      text: '',
    },
    {
      src: '/dmz/02/DMZ_02_final_Page_19.jpg',
      text: '',
    }
  ],
  [
    {
      src: '/dmz/02/DMZ_02_final_Page_20.jpg',
      text: '',
    }
  ],
]
</script>