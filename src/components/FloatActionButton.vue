<script setup>
import Icon from './Icon.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const adjustFloatActionButton = computed(() => {
  return !route.meta.toggleBottomBar
})
</script>
<template>
  <div
    :class="{ 'web-float-action-button bottom-bar': adjustFloatActionButton }"
    class="cl-float-action cl-bg-base cl-shadow cl-pos-fixed cl-inner-space-1 cl-display-inline cl-flex cl-flex-align-items-center cl-flex-justify-content-center"
  >
    <Icon class="cl-fill-base-faint" name="add" :size="{ width: '24px', height: '24px' }" />
  </div>
</template>
