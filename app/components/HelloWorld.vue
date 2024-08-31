<script setup lang="ts">
const { myLayer } = useAppConfig()
</script>

<template>
  <div>
    <h3 class="text-xl">Ahoy! this is the default page from scaffold!!!</h3>
    <pre>{{ myLayer }}</pre>
  </div>
</template>
