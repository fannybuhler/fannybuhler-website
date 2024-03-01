// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // https://nuxt.com/docs/getting-started/seo-meta#app-head
  app: {
    baseURL: 'https://fannybuhler.com',
    head: {
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        { rel: "icon", sizes: "16x16", href: `/favicon-16x16.png` },
        { rel: "icon", sizes: "32x32", href: `/favicon-32x32.png` },
      ],
    },
  },

  // https://nuxt.com/modules
  modules: [
    // https://nuxt.com/modules/tailwindcss
    "@nuxtjs/tailwindcss",
    // https://nuxt.com/modules/icons
    "nuxt-icons",
    // https://google-fonts.nuxtjs.org/getting-started/setup
    "@nuxtjs/google-fonts",
  ],

  // https://nuxt.com/docs/getting-started/configuration
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/globals/mixins.scss";`,
        },
      },
    },
  },

  // Global styling
  css: ["@/assets/styles/main.scss", "@/assets/styles/tailwind.css"],

  // Google Fonts setup
  googleFonts: {
    families: {
      "Space+Grotesk": "400..600",
    },
  },
});
