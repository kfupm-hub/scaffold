//@ts-ignore
export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  compatibilityDate: "2024-09-01",
  devtools: { enabled: true },
  typescript: { strict: true },
  modules: ["@nuxt/ui", "@nuxtjs/i18n", "@vueuse/nuxt", "@nuxtjs/supabase"],
  i18n: {
    vueI18n: './i18n.config.ts',
    strategy: 'no_prefix',
    locales: [
      {
        code: 'en',
        language: 'en-US',
        name: 'English',
        dir: 'ltr',
      }, {
        code: 'ar',
        language: 'ar-SA',
        name: 'عربي',
        dir: 'rtl',
      }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: true,
    }
  },
  supabase: {
    redirect: false
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    layoutTransition: {
      name: 'layout',
      mode: 'out-in'
    }
  },
})
