<script setup>
import Icon from './Icon.vue'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
const iconSize = ref({ width: '24px', height: '24px' })
</script>
<template>
  <div
    class="web-bottom-bar cl-bg-base-faint cl-size full-width cl-pos-fixed cl-pos left-offset bottom-offset"
  >
    <ul
      class="cl-list remove-style cl-size full-width cl-flex cl-flex-justify-content-space-between"
    >
      <li>
        <RouterLink to="/" class="cl-txt no-decoration" href="">
          <Icon class="cl-fill-base" name="dashboard" :size="iconSize" />
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/customers" class="cl-txt no-decoration" href="">
          <Icon class="cl-fill-base" name="users" :size="iconSize" />
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/orders" class="cl-txt no-decoration" href="">
          <Icon class="cl-fill-base" name="bag" :size="iconSize" />
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/catalog" class="cl-txt no-decoration" href="">
          <Icon class="cl-fill-base" name="image-ai" :size="iconSize" />
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/settings" class="cl-txt no-decoration" href="">
          <Icon class="cl-fill-base" name="settings" :size="iconSize" />
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
