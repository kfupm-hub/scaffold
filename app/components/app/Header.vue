<script setup lang="ts">
const { t } = useI18n()

const links = [
  'link 1',
  'link 2',
]

const profile = ref({})
const subscription = ref({})
</script>

<template lang="pug">
UAppHeader(
  :links="links"
  :profile="profile"
  :subscription="subscription"
)
</template>
