<script setup>
import Icon from './Icon.vue'
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  linkName: {
    type: String,
    default: 'Home',
  },
  linkUrl: {
    type: String,
    default: '/',
  },
  iconName: {
    type: String,
    default: 'cloortt',
  },
})
</script>
<template>
  <li>
    <RouterLink
      :to="props.linkUrl"
      class="cl-txt no-decoration cl-fg-base-mild cl-flex-inline cl-flex-align-items-center cl-flex-justify-content-space-between cl-size full-width"
    >
      <span>{{ props.linkName }}</span>
      <Icon
        class="cl-fill-base-mild"
        :name="props.iconName"
        :size="{ width: '22px', height: '22px' }"
      />
    </RouterLink>
  </li>
</template>
