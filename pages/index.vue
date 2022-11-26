<template>
  <div class="flex flex-col items-center p-4 relative">
    <nav class="absolute flex md:justify-between justify-around w-full px-2">
      <a href="https://store.ritualpoint.studio/" target="_blank" class="flex items-center gap-2">
        <img src="/img/txt_store.png" alt="Store" class="h-6 hidden sm:inline">
        <img src="/img/shirt.png" alt="" class="h-10">
      </a>
      <nuxt-link to="/links" class="flex flex-col items-center gap-2">
        <span class="font-weird text-sm">Click Me</span>
        <img src="/img/lines.png" alt="" class="w-20">
      </nuxt-link>
      <nuxt-link to="/pay" class="flex items-center gap-2">
        <img src="/img/hand-bill.png" alt="" class="h-10">
        <img src="/img/txt-pay-me.png" alt="Pay Me" class="h-6 hidden sm:inline">
      </nuxt-link>
    </nav>
    <title>Ritual Point Art & Divination</title>
    <section>
      <nuxt-link to="/links"><img src="/img/logo_mark.png" alt="" class="w-[50vw] mx-auto mb-10 max-w-[50vh]"></nuxt-link>
      <h1><img src="/img/logo.png" alt="Ritual Point"></h1>
      <div>
        <h2 class="text"><img src="/img/txt_art.png" alt="Art"> <img src="/img/txt_plus.png" alt="+"> <img src="/img/txt_divination.png" alt="Divinations"></h2>
      </div>
    </section>
    <a href="http://instagram.com/ritualpoint" target="_blank" class="mb-8">
      <img src="/img/insta.png" alt="Instagram" class="max-h-8">
    </a>
    <img src="/img/squiggle.png" alt="" class="max-w-[150px]">
    <section>
      <h2 class="title mb-4">I make art for the</h2>
      <a href="#offerings"><img src="/img/skin.png" alt="Skin" class="max-w-md w-full"></a>
      <h2 class="title my-8">& read</h2>
      <a href="#tarot"><img src="/img/tarot.png" alt="Tarot" class="max-w-xs w-full"></a>
    </section>
    <img src="/img/lines.png" alt="" class="max-w-[150px] rotate-180 ">
    <section>
      <nuxt-link to="/dark-moon-tarot" class="text-2xl font-weird text-center">
        <h2 class="title mb-8">Discover my hand drawn tarot deck</h2>
        <img src="/dark-moon-tarot/logo-white.png" alt="Dark Moon Tarot" class="max-w-md mx-auto w-full">
        <BaseButton>Learn More</BaseButton>
      </nuxt-link>
    </section>
    <img src="/img/lines.png" alt="" class="max-w-[150px]">
    <section class="max-w-full">
      <div class="max-w-prose">
        <h1 id="offerings" class="title mb-4"><img src="/img/txt_offerings.png" alt="Offerings"></h1>
        <p>I create art for tattoos. You can buy my flash, just check out my instagram and DM me. I will also do custom work to make your ideas come to life. I also offer tarot reading and deeper intuitive coaching.</p>
      </div>
      <div class="flex flex-wrap justify-center gap-4 my-10">
        <!-- <div class="offerings intuitive">
          <h3 class="title"><img src="/img/txt_intuitive.png" alt="Intuitive"></h3>
          <p>Move with me through a process to intuit the artwork.</p>
          <BaseButton href="//cal.com/ritualpoint/consult">Schedule</BaseButton>
          <p class="font-weird">You want something but don't yet know what it is.</p>
        </div> -->
        <div class="offerings flash">
          <h3 class="title"><img src="/img/txt_flash.png" alt="Flash"></h3>
          <p>Choose art from my magic book</p>
          <div class="text-center">
            <BaseButton href="//instagram.com/ritualpoint">@ritualPoint</BaseButton>
          </div>
          <p class="font-weird">You'll know when you see it...</p>
        </div>
        <div class="offerings original">
          <h3 class="title"><img src="/img/txt_original.png" alt="Original"></h3>
          <p>Co-Create original artwork</p>
          <div class="text-center">
            <BaseButton href="//cal.com/ritualpoint/consult">Schedule</BaseButton>
          </div>
          <p class="font-weird">You know what you want and need help giving it form.</p>
        </div>
        <div class="offerings divination" id="tarot">
          <h3 class="title"><img src="/img/txt_divination.png" alt="Divination"></h3>
          <p>Sit for a reading</p>
          <div class="text-center">
            <BaseButton href="//cal.com/ritualpoint/reading-60">Get Started</BaseButton>
          </div>
          <p class="font-weird">Unstick and un-earth wisdom.</p>
        </div>
        <div class="offerings store" id="tarot">
          <h3 class="title"><img src="/img/txt_store.png" alt="Store"></h3>
          <p>Art you can wield and wear</p>
          <div class="text-center">
            <BaseButton href="//store.ritualpoint.studio/">Buy Shit</BaseButton>
          </div>
          <p class="font-weird">Look for the 10% off code somewhere around here...</p>
        </div>
      </div>
    </section>
    <img src="/img/eye.png" alt="" class="max-w-[150px] my-20">
    <section>
      <h2 class="title font-weird mb-4">Who Am I?</h2>
      <p>I notice the moon's phases. I draw from the well of inspiration. I'm just some guy with ink stained hands. I pray to the trickster god. I laugh myself into cracking screams. I believe in</p>
      <img src="/img/txt_art.png" alt="Art" class="mt-8">
    </section>

    <img src="/img/sword.png" alt="The sword which I battle capitalism" class="max-h-[400px] my-24">

    <section>
      <blockquote class="max-w-prose">
        We live in capitalism. Its power seems inescapable. So did the divine right of kings. Any human power can be resisted
        and changed by human beings. Resistance and change often begin in art.
        <cite class="float-right mt-4">&mdash; Ursula K. Le Guin</cite>
      </blockquote>
      
    </section>
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