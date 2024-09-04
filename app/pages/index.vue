<script setup lang="ts">
definePageMeta({
  layout: 'landing'
})

const { service } = useAppConfig()

const currentService = useRuntimeConfig().public.currentService
if (currentService?.endpoint && currentService.endpoint !== '/') {
  navigateTo(currentService.endpoint)
}

const services = useRuntimeConfig().public.services
</script>

<template lang="pug">
h1 Scaffold
</template>
