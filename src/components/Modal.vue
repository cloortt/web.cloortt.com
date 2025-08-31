<script setup>
import Icon from './Icon.vue'
import { defineProps, defineEmits, watch } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'C',
  },
  type: {
    type: String,
    default: 'small',
  },
  visibility: {
    type: Boolean,
    default: false,
  },
})

const emits = defineEmits(['close'])
// Watch for changes in the isVisible prop
watch(
  () => props.visibility,
  (newVal) => {
    if (newVal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  },
)

const closeModal = () => {
  emits('close')
}
</script>
<template>
  <section
    v-if="props.visibility"
    @click.self="closeModal"
    class="cl-modal cl-pos-fixed left-offset top-offset cl-size full-width full-height cl-overlay-dark cl-flex-align-items-center cl-flex-justify-content-center"
  >
    <div
      class="content-box cl-bg-danger cl-bg-white"
      :class="[
        `sz-${props.type}`,
        {
          'cl-border style-solid width-1 bc-base':
            props.type === 'small' || props.type === 'medium' || props.type === 'large',
        },
      ]"
    >
      <div class="the-head cl-flex cl-flex-align-items-center">
        <div class="the-title">
          <h6 class="cl-fg-base">{{ props.title }}</h6>
        </div>
        <div class="icon cl-flex cl-flex-justify-content-end">
          <Icon
            @click="closeModal"
            class="cl-fill-base"
            name="close"
            :size="{ width: '20px', height: '20px' }"
          />
        </div>
      </div>
      <div class="the-body cl-scroll y-scroll cl-size full-height">
        <slot></slot>
      </div>
    </div>
  </section>
</template>
