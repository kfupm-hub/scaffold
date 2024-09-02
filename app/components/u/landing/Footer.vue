<script setup lang="ts">
defineProps<{
  sitemap: Array<{
    category: string,
    links: Array<string>,
    isExternal?: boolean
  }>
}>()

const { t } = useI18n()
</script>

<template lang="pug">
footer
  .container
    main
      .brand
        NuxtLink.logo(to="/")
          | {{ t('app.name', 'Footer') }}
        p.slogan
          slot(name="slogan")
      .actions
        UColorModeSwitcher
        ULocaleSwitcher
      slot
      .sitemap
        .column(v-for="column of sitemap")
          header
            h3 {{ $t(`sitemap.category.${column.name}`, column.name) }}
            UIcon.icon(v-if="column.external" name='i-lucide-external-link')
          ul
            li(v-for="item of column.items")
              NuxtLink(
                :to="$t(`sitemap.${item}.path`, '#')"
                :target="column.external ? '_blank' : ''"
                ) {{ $t(`sitemap.${item}.name`, item) }}
    .bottom-bar
      slot(name="disclaimer")
</template>

<style themed scoped lang="sass">
footer
  @apply border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50
  .bottom-bar
    @apply text-gray-500 border-gray-950/10 dark:border-white/10
.brand
  .slogan
    @apply text-gray-500
    a
      @apply hover:text-gray-300
.actions
  button
    @apply hover:bg-gray-100 hover:dark:bg-gray-900 active:bg-gray-200  active:dark:bg-gray-800
.status
  .indicator
    .base
      @apply bg-gray-500
    .pulse
      @apply bg-gray-400
  &.up
    @apply text-primary-900 dark:text-primary-100
    .base
      @apply bg-primary-500
    .pulse
      @apply bg-primary-400
  &.down
    @apply text-orange-900 dark:text-orange-100
    .base
      @apply bg-orange-500
    .pulse
      @apply bg-orange-400
.sitemap
  .column
    h3
      @apply text-gray-600 dark:text-gray-400
    .icon
      @apply text-gray-500
    ul
      li
        @apply text-gray-500 hover:text-gray-900 hover:dark:text-gray-100
</style>

<style scoped lang="sass">
footer
  @apply z-10 border-t py-8 backdrop-blur-lg
  .container
    @apply mx-auto w-full max-w-screen-xl px-4 lg:px-20 pt-10
  main
    @apply grid gap-y-4 gap-x-16 lg:grid-cols-[auto_1fr] lg:grid-rows-[auto_1fr_auto]
  .bottom-bar
    @apply mt-8 border-t pt-8 sm:mt-20 lg:mt-12 text-xs leading-5 text-center

.brand
  @apply space-y-8 lg:row-start-1
  .logo
    @apply rounded-md py-2 text-2xl font-black
  .slogan
    @apply max-w-xs text-sm
    :deep(a)
      @apply underline decoration-dotted
.actions
  @apply flex items-start gap-2
  @apply lg:row-start-2
  button
    @apply rounded-md p-2 transition-colors
.status
  @apply w-[min-content] whitespace-nowrap bg-transparent opacity-70 hover:opacity-100
  .indicator
    @apply relative flex h-2 w-2 items-center justify-center me-1
    .base
      @apply relative inline-flex rounded-full h-2 w-2
    .pulse
      @apply animate-ping absolute inline-flex h-full w-full rounded-full opacity-75
.sitemap
  @apply mt-16 grid grid-cols-1 2xs:grid-cols-2 md:grid-cols-4 gap-4 lg:mt-0
  @apply lg:row-start-1 lg:row-span-3
  .column
    @apply mb-4
    header
      @apply flex items-center gap-2
      h3
        @apply text-sm font-semibold truncate
      .icon
        @apply w-3 h-3
    ul
      @apply mt-4 space-y-4
      li
        @apply text-sm  w-full truncate
        a
          @apply whitespace-pre-line
</style>
