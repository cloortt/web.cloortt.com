<script setup>
import { defineProps } from 'vue'
import Icon from './Icon.vue'

const props = defineProps({
  imageUrl: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <div class="child cl-inner-space-2 cl-border width-1 style-solid bc-grey">
    <img
      class="cl-image cl-display-block cl-size full-width"
      :src="props.imageUrl"
      alt="Catalog Image"
    />
    <div class="cl-breaker-2"></div>
    <div class="cl-flex cl-flex-align-items-center cl-flex-justify-content-space-between">
      <p class="cl-fg-base cl-txt w-bold">Save</p>
      <Icon class="cl-fill-base" name="bookmark" :size="{ width: '22px', height: '22px' }" />
    </div>
  </div>
</template>
