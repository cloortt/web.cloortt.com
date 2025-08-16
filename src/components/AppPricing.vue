<script setup>
import Icon from './Icon.vue'
import { defineProps } from 'vue'

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    default: '',
  },
  price: {
    type: String,
    default: '0.00',
  },
})
</script>
<template>
  <div class="group cl-flex cl-flex-align-items-center">
    <div class="info cl-flex cl-flex-align-items-center">
      <div class="photo cl-margin-right">
        <img class="cl-image cl-display-block" :src="props.image" :alt="props.name" />
      </div>
      <div class="price">
        <p class="cl-fg-base cl-txt w-bold">
          {{ props.name }}
        </p>
      </div>
    </div>
    <div class="price cl-flex cl-flex-justify-content-end">
      <p class="cl-fg-base cl-txt w-bold">
        <small>&#8358; {{ props.price }}</small>
      </p>
    </div>
  </div>
</template>
