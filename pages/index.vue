<template>
  <div class="flex flex-col items-center p-8 relative">
    <nav class="absolute flex md:justify-between justify-around w-full px-2">
      <a href="https://ritualpoint.etsy.com/" target="_blank" class="flex items-center gap-2">
        <img src="/img/txt_store.png" alt="Store" class="h-6 hidden sm:inline">
        <img src="/img/icon-flower.png" alt="" class="h-10">
      </a>
      <nuxt-link to="/links" class="flex flex-col items-center gap-2">
        <span class="font-weird text-sm">Link Tree</span>
        <img src="/img/lines.png" alt="" class="w-20">
      </nuxt-link>
      <nuxt-link to="/pay" class="flex items-center gap-2">
        <img src="/img/hand-bill.png" alt="" class="h-10">
        <img src="/img/txt-pay-me.png" alt="Pay Me" class="h-6 hidden sm:inline">
      </nuxt-link>
    </nav>
    <title>Ritual Point Art & Divination</title>
    <section>
      <nuxt-link to="/links">
        <img src="/img/logo_mark.png" alt=""
          class="w-[50vw] mx-auto mb-10 max-w-[30vh]">
      </nuxt-link>
      <h1><img src="/img/logo.png" alt="Ritual Point"></h1>
      <div>
        <h2 class="text"><img src="/img/txt_art.png" alt="Art"> <img src="/img/txt_plus.png" alt="+"> <img
            src="/img/txt_divination.png" alt="Divinations"></h2>
      </div>
      <a href="http://instagram.com/ritualpoint" target="_blank" class="my-6">
        <img src="/img/insta.png" alt="Instagram" class="max-h-8 inline-block"> Instagram
      </a>

      <nav class="flex flex-wrap justify-around gap-4 p-4 relative">
        <nuxt-link class="p-2 border border-white rounded text-center" to="/dmt"><span class="sm:inline hidden">Dark
            Moon</span> Tarot</nuxt-link>
        <nuxt-link class="p-2 border border-white rounded text-center" to="/dmz"><span class="sm:inline hidden">Dark
            Moon</span> Zine</nuxt-link>
        <nuxt-link class="p-2 border border-white rounded text-center" to="/reading"><span
            class="sm:inline hidden">Tarot</span> Readings</nuxt-link>
        <a class="p-2 border border-white rounded text-center" href="https://ritualpoint.etsy.com/"><span
            class="sm:inline hidden">Etsy</span> Store</a>
      </nav>

      <p><a class="link-wavy text-pink-300" href="mailto:hello@ritualpoint.studio">hello@ritualpoint.studio</a></p>
    </section>
    <img src="/img/squiggle.png" alt="" class="max-w-[150px]">

    <nuxt-link to="/dmt" id="dmt-box" class="filter mix-blend-exclusion mt-8"><img class="max-h-[80vh] invert" src="/dark-moon-tarot/dmt-product-box-open-cards.jpg" alt="Dark Moon Tarot"></nuxt-link>
    
    <section>
      <nuxt-link to="/dark-moon-tarot" class="text-2xl font-weird text-center max-w-md">
        <h2 class="title mb-8">Discover my hand drawn tarot deck</h2>
        <img src="/dark-moon-tarot/logo-white.png" alt="Dark Moon Tarot" class="mx-auto">
        <BaseButton>Learn More</BaseButton>
      </nuxt-link>
    </section>
    <section>
      <h1 class="text-5xl">DARK MOON ZINE</h1>
      <div class="relative self-stretch">
        <nuxt-link to="/dmz/02">
          <img src="/dmz/02/DMZ_02_final_Page_01.jpg" alt="a picture of the zine issue 2 cover"
            class="max-h-[40vh] mx-auto rotate-1 absolute top-0 right-0 hover:scale-110 transform duration-150 hover:z-10">
        </nuxt-link>
        <nuxt-link to="/dmz/01">
          <img src="/dmz/01/DMZ_01_final.jpg" alt="a picture of the zine cover"
            class="max-h-[40vh] mx-auto -rotate-2 shadow-xl border border-black -ml-4 hover:scale-110 transform duration-150 hover:z-10">
        </nuxt-link>
      </div>
      <nuxt-link to="/dmz" class="text-2xl font-weird text-center">
        <h2 class="title mb-8">My Tarot themed Zine</h2>
        <BaseButton>Learn More</BaseButton>
      </nuxt-link>
    </section>
    <img src="/img/eye.png" alt="" class="max-w-[150px] my-20">
    <section>
      <h2 class="title font-weird mb-4">Who Am I?</h2>
      <p>I'm someone somewhere making art</p>

      <img class="max-w-full" src="/img/office-zine-wall.JPG" alt="A wall shot in a depth of field blur by a wall of zines and paper held hostage in clipboards">
      

    </section>

    <section>
      <blockquote class="max-w-prose">
        We live in capitalism. Its power seems inescapable. So did the divine right of kings. Any human power can be
        resisted
        and changed by human beings. Resistance and change often begin in <img src="/img/txt_art.png" alt="Art" class="mt-8">
        <cite class="float-right mt-4">&mdash; Ursula K. Le Guin</cite>
      </blockquote>

    </section>

    <img src="/img/sword.png" alt="The sword which I battle capitalism" class="max-h-[400px] my-24">

    <p>get in touch</p>
    <p><a class="link-wavy text-pink-300" href="mailto:hello@ritualpoint.studio">hello@ritualpoint.studio</a></p>
    <hr class="mt-20 mb-80">
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