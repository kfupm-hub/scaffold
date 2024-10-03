<script setup lang="ts">
defineProps<{
  links: Array<string>,
  profile: any,
  subscription: any
}>()

const { t, te, localeProperties } = useI18n()

const services = useRuntimeConfig().public.services

const popperPlacement = (dir: string) => {
  const otherside = dir == 'end' ? 'start' : 'end'
  return localeProperties.value.dir === 'rtl' ? 'bottom-' + otherside : 'bottom-' + dir
}

const route = useRoute()
const router = useRouter()

console.log(router.currentRoute.value)
const goHome = () => {
  const service = router.currentRoute.value.meta.service
  const path = t(`sitemap.${service}.path`, '#')
  if (!service || [route.path, '#'].includes(path)) {
    navigateTo('/')
  } else {
    navigateTo(path)
  }
}
</script>

<template lang="pug">
.header
  .container
    .wrapper
      main
        button.brand(@click="goHome")
          img(src="/img/logo-512.light.png" class="w-6 h-6 dark:hidden")
          img(src="/img/logo-512.dark.png" class="w-6 h-6 hidden dark:block")
        UDivider.slash(orientation='vertical' :ui="{ border: { size: { vertical: 'border-s-[2px] rounded' } } }")
        UPopover.dropdown(:popper="{ placement: popperPlacement('start'), arrow: true }")
          UButton(v-if='route.meta.service' color='white' size='xl' variant='ghost' :label='$t(`sitemap.${route.meta.service}.name`, route.meta.service)')
            template(#trailing='')
              UIcon.icon(name='i-heroicons-chevron-up-down-20-solid')
          UButton(v-else color='white' size='xl' variant='ghost' :label="t('select')" :disabled="!services?.length")
            template(#trailing='')
              UIcon.icon(name='i-heroicons-chevron-up-down-20-solid')
          template(#panel='{ close }')
            .list
              NuxtLink.item(v-for='service of services' :to='$t(`sitemap.${service.name.toLowerCase()}.path`, "#")' :disabled='route.meta.service === service.name.toLowerCase()' @click='close()')
                UIcon.icon(v-if="service.icon" :name='service.icon')
                h4 {{ $t(`sitemap.${service.name.toLowerCase()}.name`, String(service.name.toLowerCase())) }}
                p(v-if="$te(`sitemap.${service.name.toLowerCase()}.description`)") {{ $t(`sitemap.${service.name.toLowerCase()}.description`) }}
      aside
        //- a(href="#" class="hidden text-sm text-gray-500 transition-colors hover:text-gray-700 sm:block" target="_blank") Changelog
        ULink.link(
          v-for="link in links"
          :to="$t(`sitemap.${link}.path`, '#')"
          :disabled="!te(`sitemap.${link}.path`)"
        ) {{ $t(`sitemap.${link}.name`, link) }}
        UAppHeaderProfileOptions(:profile="profile" :subscription="subscription")
</template>

<i18n scoped lang="yaml">
  en:
    trial: Premium (Trial)
    subscribed: Premium Account
    viewPlans: View Plans
    select: Select a service
    profile:
      label:
        anonymous: Hello, anonymous!
  ar:
    trial: حساب مدفوع (تجربة)
    subscribed: حساب مدفوع
    viewPlans: تصفّح الباقات
    select: إختر الخدمة
    profile:
      label:
        anonymous: هلا بالمجهول!

</i18n>

<style themes scoped lang="sass">
.header
  @apply border-gray-200 bg-white
  @apply dark:border-gray-800 dark:bg-black
  main
    .brand
      .accented
        @apply text-primary-500
  aside
    :deep(a)
      @apply text-gray-500
      &:not([aria-disabled])
        @apply hover:text-gray-700
  .dropdown
    button
      .icon
        @apply text-gray-700
    .list
      .item
        @apply hover:bg-gray-100/50 dark:hover:bg-gray-800/50
        &[disabled="true"]
          @apply opacity-50 hover:opacity-70
        p
          @apply text-gray-500 dark:text-gray-400
</style>

<style scoped lang="sass">
.header
  @apply sticky left-0 right-0 top-0 z-20 border-b
  & > .container
    @apply mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl
    & > .wrapper
      @apply flex h-16 items-center justify-between
  main
    @apply flex items-center
    .brand
      @apply relative rounded-md px-3 py-2 text-lg font-bold
      .accented
        @apply absolute top-0 start-0 px-3 py-2 z-[-1] font-bold
    .slash
      @apply h-6 w-2 mx-3 rotate-[30deg] rtl:rotate-[-30deg] border-r border-r-gray-300 dark:border-r-gray-700
  aside
    @apply flex items-center gap-6
    :deep(a)
      @apply hidden text-sm transition-colors sm:block
  .dropdown
    button
      @apply text-sm
      .icon
        @apply h-4 w-4
    .list
      @apply p-2 space-y-1
      .item
        @apply block px-2 py-1.5 rounded-md flex items-start gap-1.5
        @apply grid grid-cols-[auto_1fr] items-center justify-center
        &[disabled="true"]
          @apply pointer-events-none
        .icon
          @apply w-4 h-4 m-1
        h4
          @apply font-semibold text-sm inline-block relative
        p
          @apply text-sm leading-snug line-clamp-2
          @apply col-span-2
</style>
