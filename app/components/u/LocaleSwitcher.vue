
<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const getFlagIcon = (code: string) => {
  switch (code) {
    case 'en': return 'i-twemoji-flag-united-kingdom'
    case 'ar': return 'i-twemoji-flag-saudi-arabia'
    default: return 'i-twemoji-globe-with-meridians'
  }
}

const nextLocale = computed(() => {
  const getSwitchLocalePath = useSwitchLocalePath()
  const localeObjects = locales.value
  const i = localeObjects.findIndex(({ code }) => locale.value === code) + 1
  const code = localeObjects[i % localeObjects.length | 0]?.code
  return {
    code,
    path: getSwitchLocalePath(code),
    flag: getFlagIcon(code)
  }
})

const switchLocale = (code: any) => {
  setLocale(code ?? nextLocale.value.code)
}
</script>

<template lang="pug">
ClientOnly
  UButton(:icon="getFlagIcon(locale)" color="gray" variant="ghost" @click="switchLocale()")
  template(#fallback)
    NuxtLink(:to="nextLocale.path")
      UIcon(:name="nextLocale.flag")
</template>

<style scoped lang="sass">
a
  @apply rounded-md p-2
  @apply flex hover:bg-gray-100 dark:hover:bg-gray-900
</style>
