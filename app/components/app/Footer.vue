<script setup lang="ts">
const links = [
  'Terms of Service',
  'Privacy Policy',
]
</script>

<template lang="pug">
UAppFooter(:links="links")
  template(#slogan)
    | Slogan
</template>
