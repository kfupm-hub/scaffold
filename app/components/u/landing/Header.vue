<script setup lang="ts">
defineProps<{
  links: Array<{
    key: string,
    type: 'nav' | 'action'
  }>
}>()


const { t } = useI18n()
const { currentRoute } = useRouter()
const localePath = useLocalePath()

const isNavDrawerOpen = ref(false)
const currentScrollPosition = ref(0)

if (import.meta.client) {
  onMounted(() => {
    const app = document.getElementById('__app')
    useEventListener(app, 'scroll', (evt) => {
      currentScrollPosition.value = app?.scrollTop || document.documentElement.scrollTop
    }, false)
  })
}
</script>

<template lang="pug">
button.nav-button(@click="isNavDrawerOpen = !isNavDrawerOpen")
  UIcon.icon(v-if='isNavDrawerOpen' name='i-heroicons-x-mark')
  UIcon.icon(v-else='' name='i-heroicons-bars-3')
Transition(mode="out-in" name="app")
  nav.drawer(v-if="isNavDrawerOpen")
    ul
      li(v-for="link of links.filter(link => link.type === 'nav')")
        NuxtLink(
          :to="localePath($t(`sitemap.${link.key}.path`, '#'))"
          :key="link.key"
          @click="isNavDrawerOpen = false"
          ) {{ $t(`sitemap.${link.key}.name`, link.key) }}
      ClientOnly
        li(v-for="link of links.filter(link => link.type === 'action')")
          LazyNuxtLink(
            :to="localePath($t(`sitemap.${link.key}.path`, '#'))"
            :key="link.key"
          ) {{ $t(`sitemap.${link.key}.name`, link.key) }}
.header(:class="{'stuck': currentScrollPosition > 0}")
  .container
    .wrapper
      main
        NuxtLink(:to="localePath('/')" class="flex gap-2 items-center")
          .brand
            | {{ t('app.name', 'Header') }}
            span.accented {{ t('app.accented',  t('app.name', 'Header')) }}
        nav
          .wrapper
            ul
              ClientOnly
                NuxtLink(
                  v-for="(link, i) of links.filter(link => link.type === 'nav')"
                  :to="localePath($t(`sitemap.${link.key}.path`, '#'))"
                  :key="`${link.key}@${i}`"
                ) {{ $t(`sitemap.${link.key}.name`, link.key) }}
      aside
        ClientOnly
          LazyNuxtLink(
            v-for="(link, i) of links.filter(link => link.type === 'action')"
            :to="localePath($t(`sitemap.${link.key}.path`, '#'))"
            :key="`${i}`"
            :data-key="`${i}`"
          ) {{ $t(`sitemap.${link.key}.name`, link.key) }}

</template>

<style themes scoped lang="sass">
.cta
  @apply text-center bg-gray-900 text-primary-400 font-bold text-xs p-2
.nav-button
  @apply text-gray-600 hover:bg-gray-200 active:bg-gray-300
  @apply dark:text-gray-400 hover:dark:bg-gray-800 active:dark:bg-gray-700
.drawer
  @apply bg-white dark:bg-black
  ul
    @apply divide-gray-200 dark:divide-gray-800
    li
      @apply text-black dark:text-white
.header
  @apply border-gray-200 dark:border-gray-800
  &.stuck
    @apply bg-white/50  dark:bg-black/50
  main
    .brand
      .accented
        @apply text-primary-500
  aside a, nav a
    @apply text-gray-500 hover:text-black dark:text-gray-400 hover:dark:text-white
  aside a:last-child
      @apply bg-black border-black text-white hover:bg-transparent hover:text-black
      @apply dark:bg-white dark:border-white dark:text-black hover:dark:bg-transparent hover:dark:text-white
</style>

<style scoped lang="sass">
.nav-button
  @apply sticky flex end-3 top-3 z-40 rounded-full p-2 duration-200 focus:outline-none lg:hidden
  .icon
    @apply h-5 w-5
.drawer
  @apply fixed inset-0 z-20 w-full px-5 py-16 lg:hidden
  ul
    @apply grid divide-y
    li
      @apply py-3
      a
        @apply flex w-full font-semibold capitalize
.header
  @apply sticky inset-x-0 top-0 z-30 w-full transition-colors
  &.stuck
    @apply border-b backdrop-blur-lg
  & > .container
    @apply mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl
    & > .wrapper
      @apply flex h-14 items-center justify-between
  main
    @apply flex items-center gap-4
    .brand
      @apply relative rounded-md px-3 py-2 text-2xl font-bold
      .accented
        @apply absolute top-0 start-0 px-3 py-2 z-[-1] font-bold
    nav
      @apply relative hidden lg:block
      & > .wrapper
        @apply relative
      ul
        @apply flex flex-row gap-2 p-4
      a
        @apply rounded-md px-3 py-2 text-sm font-medium transition-colors ease-out
  aside
    @apply hidden lg:flex
    a
      @apply rounded-full px-4 py-1.5 text-sm font-medium transition-colors ease-out
      &:last-child
        @apply border  transition-all
</style>
