<template>
  <div class="flex flex-col items-center p-4 max-w-screen-md mx-auto">
    <title>Ritual Point Art & Divination</title>
    <section>
      <img src="~/assets/img/logo_mark.png" alt="" class="w-[50vw] mx-auto mb-10 max-w-[50vh]">
      <h1><img src="~/assets/img/logo.png" alt="Ritual Point"></h1>
      <div>
        <h2 class="text"><img src="~/assets/img/txt_art.png" alt="Art"> <img src="~/assets/img/txt_plus.png" alt="+"> <img src="~/assets/img/txt_divination.png" alt="Divinations"></h2>
      </div>
    </section>
    <img src="~/assets/img/squiggle.png" alt="" class="max-w-[150px]">
    <section>
      <h2 class="title mb-4">I make art for the</h2>
      <img src="~/assets/img/skin.png" alt="Skin">
      <h2 class="title mb-4">& read</h2>
      <img src="~/assets/img/tarot.png" alt="Tarot" class="max-w-[200px]">
    </section>
    <img src="~/assets/img/lines.png" alt="" class="max-w-[150px] rotate-180 ">
    <section>
      <nuxt-link to="dark-moon-tarot" class="text-2xl font-weird text-center">
        <h2 class="title">Discover my hand drawn tarot deck</h2>
        <img src="~/assets/dark-moon-tarot/logo-white.png" alt="Dark Moon Tarot">
        <BaseButton>Learn More</BaseButton>
      </nuxt-link>
    </section>
    <img src="~/assets/img/lines.png" alt="" class="max-w-[150px]">
    <section>
      <div class="offerings intuitive">
        <h3 class="title"><img src="~/assets/img/txt_intuitive.png" alt="Intuitive"></h3>
        <p>Move with me through a process to intuit the artwork.</p>
        <BaseButton href="//cal.com/ritualpoint/consult">Schedule</BaseButton>
        <p class="font-weird">You want something but don't yet know what it is.</p>
      </div>
      <div class="offerings flash">
        <h3 class="title"><img src="~/assets/img/txt_flash.png" alt="Flash"></h3>
        <p>Choose art from my magic book</p>
        <BaseButton href="//instagram.com/ritualpoint">@ritualPoint</BaseButton>
        <p class="font-weird">You'll know when you see it...</p>
      </div>
      <div class="offerings original">
        <h3 class="title"><img src="~/assets/img/txt_original.png" alt="Original"></h3>
        <p>Co-Create original artwork</p>
        <BaseButton href="//cal.com/ritualpoint/consult">Schedule</BaseButton>
        <p class="font-weird">You know what you want and need help giving it form.</p>
      </div>
    </section>
    <img src="~/assets/img/eye.png" alt="" class="max-w-[150px] my-20">
    <section>
      <div class="offerings divination">
        <h3 class="title"><img src="~/assets/img/txt_divination.png" alt="Divination"></h3>
        <p>Sit for a reading</p>
        <BaseButton href="//cal.com/ritualpoint/reading-60">Get Started</BaseButton>
        <p class="font-weird">Unstick and un-earth wisdom.</p>
      </div>
    </section>
    <section>
      <h2 class="title font-weird mb-4">Who Am I?</h2>
      <p>I notice the moon's phases. I draw from the well of inspiration. I'm just some guy with ink stained hands. I pray to the trickster god. I laugh myself into cracking screams. I believe in</p>
      <img src="~/assets/img/txt_art.png" alt="Art">
      <p>Question what you think you need to know about me and wonder why you need to know it.</p>
    </section>
  </div>
</template>

<style lang="scss">
@import url("https://use.typekit.net/jsv6drp.css");
body {
  @apply bg-stone-900 text-white;
  font-family: nitti-typewriter-normal, monospace;
}
.font-weird {
  font-family: nitti-typewriter-open, monospace;
}
.text {
  @apply flex flex-wrap flex-grow-0 gap-2 justify-center;
  img {
    @apply max-h-8;
  }
}
section {
  @apply flex flex-col items-center justify-center min-h-[90vh] py-20;
}

h2.title {
  @apply text-2xl;
}

.offerings {
  @apply flex flex-col gap-4 my-10;
}
</style>