<script setup lang="ts">
const { t } = useI18n()
const { currentRoute } = useRouter()
const localePath = useLocalePath()

const profile = ref()

const links = [
  {
    key: 'Page 1',
    type: 'nav'
  }, {
    key: 'Page 2',
    type: 'nav'
  }, {
    key: 'Action 1',
    type: 'action'
  }, {
    key: 'Action 2',
    type: 'action'
  }
]
</script>

<template lang="pug">
ULandingHeader(:links="links")
</template>
