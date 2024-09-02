
<script setup lang="ts">
const colorMode = reactive(useColorMode())
const colorModes = ['dark', 'light']

const colorModeIcon = computed(() => {
  switch (colorMode.value) {
    case 'dark': return 'i-heroicons-moon-20-solid'
    case 'light': return 'i-heroicons-sun-20-solid'
    default: return 'i-heroicons-swatch-20-solid'
  }
})

const switchTheme = (mode: string) => {
  const i = colorModes.findIndex((mode) => colorMode.value === mode) + 1
  colorMode.preference = mode ? mode : colorModes[i % colorModes.length | 0]
}
</script>

<template lang="pug">
ClientOnly
  UButton(:icon="colorModeIcon" color="gray" variant="ghost" @click="switchTheme()" )
</template>
