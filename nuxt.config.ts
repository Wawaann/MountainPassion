// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxtjs/tailwindcss', 'nuxt-icon', 'nuxt-aos'],
  app: {
    layoutTransition: { name: 'slide', mode: 'out-in' },
  },
  css: [
    '~/assets/css/global.css',
  ],
  aos: {
    once: true,
  },
})