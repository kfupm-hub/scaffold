export const useSetupTemplate = () => {
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
      return appName ?? '[APP_NAME]'
    }
  })

  const description = computed(() => {
    const { key, title } = route.meta
    if (key && te(`sitemap.${key}.description`)) {
      return t(`sitemap.${key}.description`)
    } else {
      return t('app.description', '')
    }
  })

  useHead({
    title,
    meta: [
      { property: 'description', content: description },
      { property: 'og:title', content: String(title) },
      { property: 'og:description', content: String(description) },
      { property: 'twitter:title', content: String(title) },
      { property: 'twitter:description', content: String(description) },
      { property: 'og:url', content: route.path },
    ],
    htmlAttrs: {
      lang: locale
    }
  })
}
