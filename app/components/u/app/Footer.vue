<script setup lang="ts">
defineProps<{
  links: Array<string>
}>()

const { t, te } = useI18n()
</script>

<template lang="pug">
footer
  UContainer
    main
      .brand
        .logo
          | {{ $t('app.name', 'Footer') }}
        p.slogan
          slot(name="slogan")
      .actions
        UColorModeSwitcher
        ULocaleSwitcher
    UDivider.divider
    .bottom-bar
      .links(class='dark:text-neutral-300')
        ULink(
          v-for="link in links"
          :to="$t(`sitemap.${link}.path`, '#')"
          :disabled="!te(`sitemap.${link}.path`)"
        ) {{ $t(`sitemap.${link}.name`, link) }}
      .copyright {{ t('copyright', { year: new Date().getFullYear() }) }}
</template>

<i18n scoped lang="yaml">
  en:
    copyright: "© Copyright {year}. All rights reserved."
  ar:
    copyright: "© {year} جميع الحقوق محفوظة."
</i18n>


<style themes scoped lang="sass">
footer
  @apply border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black
  main
    .brand
      .slogan
        @apply text-gray-500
    .actions
      @apply text-gray-500
  .socials
    a
      @apply hover:bg-gray-100 hover:dark:bg-gray-900 active:bg-gray-200 active:dark:bg-gray-800 hover:text-white
  .bottom-bar
    .links
      & > :deep(a):not([aria-disabled])
        @apply cursor-pointer hover:text-white
    .copyright
      @apply text-neutral-300 dark:text-neutral-700
</style>

<style scoped lang="sass">
footer
  @apply border-t py-8 z-20
  .container
    @apply mx-auto w-full max-w-screen-xl px-4 lg:px-20 pt-10
  main
    @apply flex flex-col lg:flex-row justify-between items-center lg:items-end
    .brand
      .logo
        @apply rounded-md py-2 text-2xl font-black
      .slogan
        @apply flex gap-2 items-center whitespace-nowrap mt-3 hidden lg:flex max-w-[342px] text-sm
    .actions
      @apply items-center gap-6 whitespace-nowrap flex
  .socials
    @apply flex items-center gap-2
    a
      @apply flex rounded-md p-2 transition-colors

  .divider
    @apply my-8 opacity-70
  .bottom-bar
    @apply py-3 flex flex-col lg:flex-row justify-between items-center text-[12px] leading-[18px]
    .links
      @apply flex items-center gap-6 whitespace-nowrap
      & > a
        @apply -mx-1 px-1 text-sm hover:underline
    .copyright
      @apply flex items-center
</style>
