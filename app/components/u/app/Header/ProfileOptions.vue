<script setup lang="ts">
const props = defineProps<{
  profile: any,
  subscription: any
}>()

const { profile, subscription } = toRefs(props)

const { t, localeProperties } = useI18n()
const route = useRoute()

const profileMenuItems = computed(() => [
  [{
    label: 'null',
    slot: 'account',
    disabled: true
  }],
  [{
    label: subscription.value?.status === 'trialing' ? t('trial') : subscription.value?.status === 'active' ? t('subscribed') : t('viewPlans'),
    disabled: ['trialing', 'active'].includes(String(subscription.value?.status)),
    icon: subscription.value?.status === 'trialing' ? 'i-heroicons-rocket-launch' : subscription.value?.status === 'active' ? 'i-heroicons-rocket-launch' : 'i-heroicons-sparkles',
    click: () => navigateTo(t('sitemap.pricing.path')),
  }],
  [{
    label: t('sitemap.settings.name'),
    icon: 'i-heroicons-cog-8-tooth',
    disabled: route?.path  === t('sitemap.settings.path'),
    click: () => {
      navigateTo(t('sitemap.settings.path'))
    }
  }],
  [{
    label: t('sitemap.logout.name'),
    icon: 'i-heroicons-arrow-left-on-rectangle',
    click: async() => {
      // await supabase.auth.signOut()
      if (process.client) {
        window.location = t('sitemap.logout.path') as (string & Location)
      }
    }
  }]
])

const popperPlacement = (dir: string) => {
  const otherside = dir == 'end' ? 'start' : 'end'
  return localeProperties.value.dir === 'rtl' ? 'bottom-' + otherside : 'bottom-' + dir
}
</script>

<template lang="pug">
UDropdown(v-if='profile' :items='profileMenuItems' :ui="{ item: { disabled: 'cursor-text select-text' } }" :popper="{ placement: popperPlacement('end') }")
  UAvatar(
    :icon="'i-heroicons-user-solid'"
    class='active:scale-95'
    chip-color='primary'
    chip-text=''
    chip-position='top-right'
    :src="profile.picture_path"
  )
    template(#account='{ item }')
      .text-start.space-y-2
        p
          | {{ t('component.header.signedInAs') }}
        p.truncate.font-bold.text-xs.text-primary-900(class='dark:text-white')
          | {{ item.label }}
    template(#item='{ item }')
      span.truncate {{ item.label }}
      UIcon.flex-shrink-0.h-4.w-4.text-gray-400.ms-auto(:name='item.icon' class='dark:text-gray-500')
USkeleton.h-8.w-8(v-else='' :ui="{ rounded: 'rounded-full' }")
</template>
