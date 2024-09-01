export default defineAppConfig({
  scaffold: {
    name: 'Scaffold'
  },
  ui: {
    primary: 'green',
    gray: 'neutral'
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    scaffold?: {
      /** Project name */
      name?: string
    }
  }
}
