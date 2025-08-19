<script setup>
import Sidebar from '@/components/Sidebar.vue'
import AppBody from '@/components/AppBody.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppBottomBar from '@/components/AppBottomBar.vue'
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'

const routeNames = {
  homepage: 'Home',
  settings: 'Settings',
  customers: 'Customers',
  orders: 'Orders',
  catalog: 'Catalog',
  analytics: 'Analytics',
  pricing: 'Pricing',
}

const route = useRoute()

const toggleBottomBar = computed(() => {
  return route.meta.toggleBottomBar
})
</script>

<template>
  <Sidebar />
  <AppBody :class="{ 'no-bottom-bar': toggleBottomBar }">
    <AppHeader
      :routeName="`${routeNames[route.name] === undefined ? 'Home' : routeNames[route.name]}`"
    />
    <div class="cl-breaker-4"></div>
    <RouterView />
  </AppBody>
  <AppBottomBar v-if="!toggleBottomBar" />
</template>
