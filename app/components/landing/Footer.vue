<script setup lang="ts">
const sitemap = [
  {
    name: 'Category 1',
    items: [
      'Link 1'
    ]
  },
  {
    name: 'Category 2',
    items: [
      'Link 1',
      'Link 2'
    ]
  },
  {
    name: 'Category 3',
    items: [
      'Link 1',
      'Link 2',
      'Link 3'
    ],
    external: true
  }, {
    name: 'Category 4',
    items: [
      'Link 1',
      'Link 2',
      'Link 3',
      'Link 4'
    ],
    external: true
  }
]
</script>

<template lang="pug">
ULandingFooter(:sitemap="sitemap")
  template(#slogan)
    | Slogan
  template(#disclaimer)
    | Disclaimer
</template>
