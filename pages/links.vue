<template>
  <main class="min-h-screen px-4 py-10 flex flex-col gap-4 justify-around">
    <nuxt-link to="/" class="flex gap-4 justify-center">
      <img src="@/assets/img/logo_mark.png" alt="" class="h-16">
      <img src="@/assets/img/logo.png" alt="Ritual Point" class="h-16">
    </nuxt-link>
    <a href="https://cal.com/ritualpoint/artwork" class="link">
      <div class="w-16 flex justify-center">
        <img src="@/assets/img/nib.png" alt="" class="h-16">
      </div>
      <div>
        <p class="text-xl"><strong>Schedule:</strong> 3 Hour Artwork Session</p>
        <small class="text-sm">$50 non-refundable deposit</small>
      </div>
    </a>
    <a href="https://cal.com/ritualpoint/consult" class="link">
      <img src="@/assets/img/eye.png" alt="" class="w-16"> 
      <div>
        <p class="text-xl"><strong>Schedule:</strong> Free 30 min consult</p>
        <small class="text-sm">Discuss a project idea</small>
      </div>
    </a>
    <nuxt-link to="/dark-moon-tarot" class="link bg-white text-stone-900">
      <img src="@/assets/dark-moon-tarot/circle-dark.png" alt="" class="w-16"> 
      <div>
        <p class="text-xl"><strong>Pre-Order:</strong> Dark Moon Tarot</p>
        <small class="text-sm">Hand drawn tarot deck</small>
      </div>
    </nuxt-link>
    <a href="https://cal.com/ritualpoint/reading-60" class="link">
      <img src="@/assets/img/tarot.png" alt="" class="w-16"> 
      <div>
        <p class="text-xl"><strong>Schedule:</strong> 1 Hour Reading</p>
        <small class="text-sm">Experience an intuitive tarot reading</small>
      </div>
    </a>
    <a href="https://store.ritualpoint.studio/" class="link">
      <img src="@/assets/img/at.png" alt="" class="w-16"> 
      <div>
        <p class="text-xl">Visit Merch Store</p>
        <small class="text-sm">Art you can wield and wear</small>
      </div>
    </a>
  </main>
</template>

<style lang="scss" scoped>
.link {
  @apply p-4 rounded border border-white flex gap-4 items-center;
}
</style>