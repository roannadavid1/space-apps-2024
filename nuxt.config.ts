// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@pinia/nuxt', '@nuxt/fonts', '@nuxt/image'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  fonts: {
    families: [
      { name: 'Pangolin', provider: 'google' },
      { name: 'Open Sans', provider: 'google' },
    ]
  },
})