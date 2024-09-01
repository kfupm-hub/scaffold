<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

useHead({
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
    }
  ],
  link: [
    {
      href: '/favicon.light.ico',
      rel: 'icon',
      media: '(prefers-color-scheme: light)'
    },
    {
      href: '/favicon.dark.ico',
      rel: 'icon',
      media:'(prefers-color-scheme: dark)'
    }
  ]
})
</script>

<template lang="pug">
Html(class="animate-fade-in" :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir")
  Head
    template(v-for="link in head.link" :key="link.id")
      Link(:id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang")
    template(v-for="meta in head.meta" :key="meta.id")
      <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
  Body: Transition(mode="out-in" name="app")
    #__app(:dir="head.htmlAttrs.dir" :key="head.htmlAttrs.dir")
      NuxtLoadingIndicator
      NuxtLayout: NuxtPage
      UModals
      UNotifications(:dir="head.htmlAttrs.dir")
</template>

<style lang="sass">
html
  font-family: Inter, Alexandria
  // @media (max-width: 640px)
    // font-size: 24px
  // @media (max-width: 480px)
    // font-size: 20px
  @media (max-width: 400px)
    font-size: 18px
  @media (max-width: 360px)
    font-size: 16px
  @media (max-width: 320px)
    font-size: 14px
  @media (max-width: 280px)
    font-size: 12px
  @media (max-width: 200px)
    font-size: 8px
  @media (max-width: 180px)
    font-size: 5px

#__nuxt
  overflow: hidden

.app-enter-active, .app-leave-active
  transition: all 0.2s
.app-enter-from, .app-leave-to
  opacity: 0
  filter: blur(0.1rem)

  &[dir="rtl"]
    transform: scaleX(1.05) translateX(-3%)
  &[dir="ltr"]
    transform: scaleX(1.05) translateX(3%)
.page-enter-active, .page-leave-active
  transition: all 0.2s

#__app:has(.page-enter-active)::before, #__app:has(.page-leave-active)::before, #__app:has(.layout-enter-active)::before, #__app:has(.layout-leave-active)::before
  content: ""
  display: block
  position: fixed
  width: 100vw
  height: 100vh
  top: 0
  z-index: 1000

.page-enter-from, .page-leave-to
  opacity: 0
  filter: blur(0.1rem)
.page-enter-from
  transform: translateY(-0.5rem)
.page-leave-to
  transform: translateY(0.5rem)
.layout-enter-active, .layout-leave-active
  transition: all 0.2s
.layout-enter-from, .layout-leave-to
  opacity: 0.2
  filter: blur(0.5rem)
body
  @apply bg-white dark:bg-gray-950
</style>
