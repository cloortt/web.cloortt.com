<script setup>
import Sidebar from '@/components/Sidebar.vue'
import AppBody from '@/components/AppBody.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppBottomBar from '@/components/AppBottomBar.vue'
import { RouterView, useRoute } from 'vue-router'
import { computed, ref, watch } from 'vue'

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

const sidebarVisibility = ref(false)

const toggleSidebar = () => {
  sidebarVisibility.value = !sidebarVisibility.value
}

const closeSidebar = () => {
  sidebarVisibility.value = false
}

watch(route, () => {
  closeSidebar()
})
</script>

<template>
  <Sidebar :isVisible="sidebarVisibility" />
  <AppBody :class="{ 'no-bottom-bar': toggleBottomBar, 'cl-scroll-hidden': sidebarVisibility }">
    <AppHeader
      @toggle-sidebar="toggleSidebar"
      :routeName="`${routeNames[route.name] === undefined ? 'Home' : routeNames[route.name]}`"
    />
    <div class="cl-breaker-4"></div>
    <RouterView />
  </AppBody>
  <AppBottomBar v-if="!toggleBottomBar" />

  <div
    v-if="sidebarVisibility"
    @click="closeSidebar"
    class="web-sidebar-container cl-pos-fixed cl-pos left-offset top-offset cl-size full-width full-height cl-overlay-dark"
  ></div>
</template>
