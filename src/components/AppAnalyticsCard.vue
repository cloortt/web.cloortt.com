<script setup>
import { defineProps } from 'vue'
import Icon from './Icon.vue'

const props = defineProps({
  cardName: {
    type: String,
    default: '',
  },
  cardIcon: {
    type: String,
    default: '',
  },
  cardValue: {
    type: String,
    default: '',
  },
  cardFilter: {
    type: Array,
    default: [],
  },
})
</script>
<template>
  <div class="child cl-inner-space-2 cl-border width-1 style-solid bc-grey">
    <Icon class="cl-fill-base" :name="props.cardIcon" :size="{ width: '22px', height: '22px' }" />
    <div class="cl-breaker-3"></div>
    <p class="cl-fg-base">{{ props.cardName }}</p>
    <h6 class="cl-fg-base">
      <small>{{ props.cardValue }}</small>
    </h6>
    <div class="cl-breaker-3"></div>
    <form class="cl-form">
      <select
        class="line-in cl-bg-white cl-size full-width cl-border bottom-width-1 bottom-style-solid bc-bottom-grey"
      >
        <option v-for="(filter, index) in cardFilter" :key="index">{{ filter }}</option>
      </select>
    </form>
  </div>
</template>
