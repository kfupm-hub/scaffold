export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  compatibilityDate: "2024-09-01",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/i18n"],
  i18n: {
    vueI18n: './i18n.config.ts',
    strategy: 'no_prefix',
    langDir: 'locales',
    locales: [
      {
        code: 'en',
        language: 'en-US',
        name: 'English',
        dir: 'ltr',
        files: []
      }, {
        code: 'ar',
        language: 'ar-SA',
        name: 'عربي',
        dir: 'rtl',
        files: []
      }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: true,
    }
  }
})
