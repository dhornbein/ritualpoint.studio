<template>
  <div class="flex flex-col items-center p-4 relative">
    <nav class="absolute flex md:justify-between justify-around w-full px-2">
      <a href="https://store.ritualpoint.studio/" target="_blank" class="flex items-center gap-2">
        <img src="/img/txt_store.png" alt="Store" class="h-6 hidden sm:inline">
        <img src="/img/shirt.png" alt="" class="h-10">
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
      <nuxt-link to="/links"><img src="/img/logo_mark.png" alt=""
          class="w-[50vw] mx-auto mb-10 max-w-[30vh]"></nuxt-link>
      <h1><img src="/img/logo.png" alt="Ritual Point"></h1>
      <div>
        <h2 class="text"><img src="/img/txt_art.png" alt="Art"> <img src="/img/txt_plus.png" alt="+"> <img
            src="/img/txt_divination.png" alt="Divinations"></h2>
      </div>
      <a href="http://instagram.com/ritualpoint" target="_blank" class="my-6">
        <img src="/img/insta.png" alt="Instagram" class="max-h-8 inline-block"> Instagram
      </a>

      <nav class="flex justify-around gap-4 p-4 relative">
        <nuxt-link class="p-2 border border-white rounded text-center" to="/tattoo"><span class="sm:inline hidden">Hand
            Poked</span> Tattoos</nuxt-link>
        <nuxt-link class="p-2 border border-white rounded text-center" to="/dmt"><span class="sm:inline hidden">Dark
            Moon</span> Tarot</nuxt-link>
        <nuxt-link class="p-2 border border-white rounded text-center" to="/dmz"><span class="sm:inline hidden">Dark
            Moon</span> Zine</nuxt-link>
        <nuxt-link class="p-2 border border-white rounded text-center" to="/reading"><span
            class="sm:inline hidden">Tarot</span> Readings</nuxt-link>
      </nav>

      <p><a href="mailto:hello@ritualpoint.studio">hello@ritualpoint.studio</a></p>
    </section>
    <img src="/img/squiggle.png" alt="" class="max-w-[150px]">
    <section>
      <h2 class="title mb-4">I make art for the</h2>
      <nuxt-link to="/tattoo"><img src="/img/skin.png" alt="Skin" class="max-w-md w-full"></nuxt-link>
      <h2 class="title my-8">& read</h2>
      <a href="#tarot"><img src="/img/tarot.png" alt="Tarot" class="max-w-xs w-full"></a>
    </section>

    <img src="/img/lines.png" alt="" class="max-w-[150px]">
    <section class="max-w-full">
      <div class="max-w-prose">
        <h1 id="offerings" class="title mb-4"><img src="/img/txt_offerings.png" alt="Offerings"></h1>
      </div>
      <div class="flex flex-wrap justify-center gap-4 my-10">
        <div class="offerings original">
          <h3 class="title font-weird text-4xl">Ritual Tattoo</h3>
          <p>At Home Ritualized Stick and Poke tattoo</p>
          <div class="text-center">
            <BaseButton href="/tattoo">Learn More</BaseButton>
          </div>
        </div>
        <div class="offerings divination" id="tarot">
          <h3 class="title font-weird text-4xl">Tarot Reading</h3>
          <p>Schedule a 1 hour virtual reading</p>
          <div class="text-center">
            <BaseButton href="//cal.com/ritualpoint/reading-60">Get Started</BaseButton>
          </div>
        </div>
        <div class="offerings divination" id="tarot">
          <h3 class="title font-weird text-4xl">Free Consulting</h3>
          <p>Not sure yet? Schedule a quick call with me.</p>
          <div class="text-center">
            <BaseButton href="//cal.com/ritualpoint/consult">Get Started</BaseButton>
          </div>
        </div>
      </div>
    </section>
    <img src="/img/lines.png" alt="" class="max-w-[150px] rotate-180 ">
    <section>
      <nuxt-link to="/dark-moon-tarot" class="text-2xl font-weird text-center">
        <h2 class="title mb-8">Discover my hand drawn tarot deck</h2>
        <img src="/dark-moon-tarot/logo-white.png" alt="Dark Moon Tarot" class="max-w-md mx-auto w-full">
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
      <p>I notice the moon's phases. I draw from the well of inspiration. I'm just some guy with ink stained hands. I
        pray to the trickster god. I laugh myself into cracking screams. I believe in</p>
      <img src="/img/txt_art.png" alt="Art" class="mt-8">
    </section>

    <section>
      <blockquote class="max-w-prose">
        We live in capitalism. Its power seems inescapable. So did the divine right of kings. Any human power can be
        resisted
        and changed by human beings. Resistance and change often begin in art.
        <cite class="float-right mt-4">&mdash; Ursula K. Le Guin</cite>
      </blockquote>

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