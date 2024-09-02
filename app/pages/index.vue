<script setup lang="ts">
definePageMeta({
  layout: 'landing'
})

const { service } = useAppConfig()
const endpoint = computed(() => {
  const s = Array.isArray(service) ? service[0] : service
  if (typeof s === 'object') return s.endpoint
  return null
})
if (endpoint.value && endpoint.value !== '/') {
  navigateTo(endpoint.value)
}
</script>

<template></template>
