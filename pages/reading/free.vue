<template>
  <main>
    <base-nav />
    <div class="my-20 md:p-8 w-full">
      <h1 class="text-2xl text-center mb-4">Get a free reading</h1>
      <p class="italic text-center mb-10"><nuxt-link to="/reading" class="link-wavy text-pink-400">Learn more about
          private readings</nuxt-link></p>
      <p class="pb-4 max-w-prose mx-auto">Want to get a sense of what Tarot can do? Pull a card and I'll give you a
        little free reading over
        email.</p>
      <tarot-reading></tarot-reading>
    </div>
  </main>
</template>