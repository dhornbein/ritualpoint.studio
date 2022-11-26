// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.scss'],
  app: {
    head: {
      title: 'Ritual Point Art & Divination',
      meta: [
        { name: 'description', content: 'Ritual Point Studio: Art & Divination from the mind of Drew H' },
        { hid: 'og-type', property: 'og:type', content: 'website' },
        { hid: 'og-title', property: 'og:title', content: 'Ritual Point Art & Divination' },
        { hid: 'og-desc', property: 'og:description', content: 'Tattoo art and tarot divination' },
        { hid: 'og-image', property: 'og:image', content: 'https://ritualpoint.studio/img/og-default.jpg' },
        { hid: 'og-url', property: 'og:url', content: 'https://ritualpoint.studio/' },
        { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/img/logo_black.png' }]
    }
  }
})
