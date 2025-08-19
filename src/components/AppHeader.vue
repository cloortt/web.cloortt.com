<script setup>
import { defineProps } from 'vue'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Icon from './Icon.vue'
const props = defineProps({
  routeName: {
    type: String,
    default: 'Home',
  },
})
const route = useRoute()
const router = useRouter()

const goBack = () => {
  router.go(-1)
}

const toggleBottomBar = computed(() => {
  return !route.meta.toggleBottomBar
})
</script>
<template>
  <div class="the-head cl-flex cl-flex-align-items-center">
    <div class="col-1 cl-flex cl-flex-align-items-center">
      <Icon
        v-if="toggleBottomBar"
        class="cl-fill-base"
        name="equal"
        :size="{ width: '30px', height: '30px' }"
      />
      <Icon
        @click="goBack"
        v-else
        class="cl-fill-base"
        name="arrow-left"
        :size="{ width: '30px', height: '30px' }"
      />
      <h6 class="cl-fg-base">{{ props.routeName }}</h6>
    </div>
    <div class="col-2 cl-flex cl-flex-justify-content-end">
      <ul class="cl-list remove-style cl-flex-inline cl-flex-align-items-center">
        <li
          class="cl-display-inline-block cl-bg-base cl-flex cl-flex-align-items-center cl-flex-justify-content-center"
        >
          <Icon
            class="cl-fill-base-faint"
            name="notification"
            :size="{ width: '24px', height: '24px' }"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
