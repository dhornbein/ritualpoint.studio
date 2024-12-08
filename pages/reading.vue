<template>
  <div class="flex flex-col items-center p-4 relative">
    <base-nav/>
    <section class="flex flex-col gap-6">
      <h1><img src="/img/logo.png" alt="Ritual Point"></h1>
      <div>
        <h2 class="text-4xl">Tarot Reading</h2>
      </div>

      <p class="text-2xl">I do intuitive tarot readings, more info coming soon. Email me if you want to setup a reading.</p>

      <p><a href="mailto:hello@ritualpoint.studio">hello@ritualpoint.studio</a></p>
      
      <img src="/img/squiggle.png" alt="" class="max-w-[150px]">

      <a href="http://instagram.com/ritualpoint" target="_blank" class="my-6">
        <img src="/img/insta.png" alt="Instagram" class="max-h-8 inline-block"> Instagram
      </a>

      
      
        <nav class="flex justify-around gap-4 p-4 relative">
          <nuxt-link class="p-2 border border-white rounded text-center" to="/dmt"><span class="sm:inline hidden">Dark Moon</span> Tarot</nuxt-link>
          <nuxt-link class="p-2 border border-white rounded text-center" to="/dmz"><span class="sm:inline hidden">Dark Moon</span> Zine</nuxt-link>
          <a class="p-2 border border-white rounded text-center" href="https://ritualpoint.etsy.com/"><span class="sm:inline hidden">Etsy</span> Store</a>
        </nav>
    </section>

      <img src="/img/sword.png" alt="The sword which I battle capitalism" class="max-h-[400px] my-24">
  </div>
</template>

<style lang="scss">
.offerings {
  @apply flex flex-col justify-between gap-4 p-6 border border-stone-700 rounded-lg hover:border-stone-300 md:max-w-sm w-full;
  .title img {
    @apply max-h-14;
  }
}
</style>