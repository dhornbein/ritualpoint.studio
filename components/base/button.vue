<template>
  <button @click="navigate" :dark="dark">
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps(['href','dark'])

function navigate() {
  if (props.href.startsWith('//')) {
    window.open(props.href, '_blank')
  } else {
    navigateTo(props.href)
  }
}
</script>

<style lang="scss">
button {
  @apply bg-stone-900 text-white p-4 pt-2 text-2xl w-60 h-40 leading-none;
  font-family: nitti-typewriter-open, monospace;
  background: url(/img/button.png) no-repeat center;
  background-size: 15rem auto;
  &:hover {
    background-image: url(/img/button_hover.png);
  }
  &:active {
    @apply pt-6;
    background-image: url(/img/button_click.png);
  }

  &[dark] {
    @apply bg-transparent text-stone-900;
    background-image: url(/img/button_black.png);
    &:hover {
      background-image: url(/img/button_black_hover.png);
    }
    &:active {
      @apply pt-6;
      background-image: url(/img/button_black_click.png);
    }
  }
}
</style>