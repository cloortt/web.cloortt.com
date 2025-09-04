<script setup>
import SidebarLink from './SidebarLink.vue'
import { defineProps } from 'vue'

const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true,
  },
})
</script>
<template>
  <aside
    :class="{ 'open-up': props.isVisible }"
    class="web-sidebar cl-bg-base cl-pos-fixed cl-pos left-offset top-offset cl-size full-height cl-scroll y-auto transparent"
  >
    <div class="top">
      <h6 class="cl-fg-base-mild cl-txt w-bold">Cl</h6>
      <div class="cl-breaker-1"></div>
      <p class="cl-fg-base-mild">Premium Plan</p>
      <div class="cl-breaker-1"></div>
      <div
        class="cl-badge cl-display-inline cl-bg-base-mild cl-fg-base cl-border edge-is-curved cl-txt w-bold"
      >
        Ceo
      </div>
    </div>
    <div class="cl-breaker-4"></div>
    <div class="cl-breaker-4"></div>
    <div class="links">
      <ul class="cl-list remove-style">
        <SidebarLink linkName="Home" linkUrl="/" iconName="home" />
        <SidebarLink linkName="Customers" linkUrl="/customers" iconName="users" />
        <SidebarLink linkName="Orders" linkUrl="/orders" iconName="bag" />
        <SidebarLink linkName="Catalog" linkUrl="/catalog" iconName="image-ai" />
        <SidebarLink linkName="Analytics" linkUrl="/analytics" iconName="chart" />
        <SidebarLink linkName="Pricing" linkUrl="/pricing" iconName="bank-card" />
        <SidebarLink linkName="Settings" linkUrl="/settings" iconName="settings" />
      </ul>
    </div>
  </aside>
</template>
