<script setup lang="ts">
const route = useRoute()
const { t, te, locale } = useI18n()
const { name } = useAppConfig()

const title = computed(() => {
  const { key, title } = route.meta

  const pageTitle = title ?? te(`sitemap.${key}.name`) ? t(`sitemap.${key}.name`) : null
  const appName = te('app.name') ? t('app.name') : name
  if (pageTitle && appName) {
    return `${pageTitle} | ${appName}`
  } else if (pageTitle) {
    return pageTitle
  } else {
    return appName ?? 'Home page'
  }
})

const description = computed(() => {
  const { key, title } = route.meta
  if (key && te(`sitemap.${key}.description`)) {
    return t(`sitemap.${key}.description`)
  } else {
    return t('app.description', ' ')
  }
})

useHead({
  title,
  meta: [
    { property: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'twitter:title', content: title },
    { property: 'twitter:description', content: description },
    { property: 'og:url', content: route.path },
  ],
  htmlAttrs: {
    lang: locale
  }
})
</script>

<template lang="pug">
main(class="flex min-h-screen flex-col justify-between")
  AppHeader
  div(class="flex flex-col flex-1 shrink-0"): slot
  AppFooter
</template>
