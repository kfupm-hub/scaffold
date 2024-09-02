export const arabicPlurals = (choice: number): number => {
  const name = new Intl.PluralRules("ar-SA").select(choice)
  return { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 4 }[name]
}

export default defineI18nConfig(() => {
  return {
    legacy: false,
    fallbackLocale: 'en',
    fallbackWarn: false,
    missingWarn: false,
    pluralRules: {
      ar: arabicPlurals
    }
  }
})
