<script setup>
useSetupTemplate()
</script>

<template lang="pug">
main(class="flex min-h-screen flex-col justify-between")
  LandingHeader
  div(class="flex flex-col flex-1 shrink-0"): slot
  AppFooter
</template>
