<template>
  <main>
    <base-nav />
    <section class="flex flex-col gap-6">

      <div class="flex flex-col gap-2 text-center">
        <h2 class="text-4xl">Private Tarot Reading</h2>
        <img src="/tattoo/hand-002.png"
          alt="Two open palm hands reaching out from behind a veil of darkness, mysterious and inviting">
        <p class="text-2xl my-8">Tap into intuition to revile something deeper</p>
        <img src="/img/dmt-card-spread-3-03.png" alt="a three card spread">
        <p>Questions? Keep reading or reach out:</p>
        <p><a href="mailto:hello@ritualpoint.studio" class="link-wavy text-pink-400">hello@ritualpoint.studio</a></p>
      </div>

    </section>

    
    <div class="p-8 flex flex-col gap-4 my-8 border-t border-b border-dotted border-slate-600 text-center">
      <h3 class="text-2xl">Schedule a Reading</h3>
      <p class="max-w-prose mx-auto">I offer readings both online and in-person (At my home in East Denver). You can also find me around town, just see my reading calendar below.</p>
      <div class="flex justify-around flex-wrap gap-8">
        <div class="text-center max-w-md">
          <BaseButton href="//cal.com/ritualpoint/reading-big" class="mx-auto" target="_blank">Big ⚡</BaseButton>
          <p class="max-w-prose">Big spacious reading with many cards</p>
          <p class="text-center text-lg">$77 + tip</p>
          <img src="/img/dmt-card-spread-big-low-04.png" alt="big complicated tarot spread">
        </div>
        <div class="text-center max-w-md">
          <BaseButton href="//cal.com/ritualpoint/reading-small" class="mx-auto" target="_blank">Small 🐛</BaseButton>
          <p class="max-w-prose">A small intuitive reading</p>
          <p class="text-center text-lg">$pay-what-you-can</p>
          <img src="/img/dmt-card-spread-3-05.png" class="mt-12" alt="big complicated tarot spread">
        </div>
      </div>
    </div>

    <img src="/img/squiggle.png" alt="" class="max-w-[150px] mx-auto">

    <div class="p-2 md:p-8 max-w-lg mx-auto">
      <h2 class="text-2xl text-center mb-4">Reading Calendar</h2>
      <BaseCalendar></BaseCalendar>
    </div>
  </main>
</template>