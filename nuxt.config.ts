// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // https://nuxt.com/modules
  modules: [
    // https://nuxt.com/modules/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // https://nuxt.com/docs/getting-started/configuration
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/globals/mixins.scss";`
        }
      }
    }
  },

  // Global styling
  css: [
    '@/assets/styles/main.scss'
  ]
})
