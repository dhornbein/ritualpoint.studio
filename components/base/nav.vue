<template>
  <nav class="w-full relative">
    <div class="nav__primary flex justify-between z-20 fixed top-0 left-0 right-0 px-4 py-2 backdrop-blur-sm">
      <nuxt-link to="/" @click="navOpen = false" :class="{'text-2xl':navOpen}" class="transition-all">&lsaquo;
        Home</nuxt-link>
      <button @click="navOpen = !navOpen">
        <span v-if="!navOpen">☰ Menu</span>
        <span v-else>&times; Close</span>
      </button>
    </div>
    <transition name="menu-reveal">
      <ul class="nav__secondary" v-if="navOpen">
        <li>
          <nuxt-link to="/dmt">Dark Moon Tarot</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/dmz">Dark Moon Zine</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/reading">Tarot Readings</nuxt-link>
        </li>
        <li>
          <a href="https://ritualpoint.etsy.com/" target="_blank" aria-label="Opens in a new tab">Etsy Store
            &nearr;</a>
        </li>
        <li>
          <a href="http://instagram.com/ritualpoint" target="_blank" class="my-6">
            Instagram <img src="/img/insta.png" alt="Instagram" class="max-h-8 inline-block">
          </a>
        </li>
        <li>
          <nuxt-link to="/links">Link Tree</nuxt-link>
        </li>
      </ul>
    </transition>
  </nav>
</template>

<style lang="scss">
  .nav__secondary {
    @apply fixed z-10 w-full h-full left-0 top-0 p-8 pt-10 flex flex-col justify-around bg-slate-800/70 backdrop-blur-md;
    li {
      @apply text-2xl;
    }
  }
  .menu-reveal-enter-active,
  .menu-reveal-leave-active {
    transition: left 0.3s ease, opacity 0.6s ease;
    overflow: hidden;
  }

  .menu-reveal-enter-from,
  .menu-reveal-leave-to {
    left: 100%;
    opacity: 0;
  }

  .menu-reveal-enter-to,
  .menu-reveal-leave-from {
    left:0%;
    opacity: 1;
  }
</style>

<script setup>
// TODO allow for prop to add links
// TODO Do not display current page in links
const navOpen = ref(false)
</script>