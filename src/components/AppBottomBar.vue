<script setup>
import Icon from './Icon.vue'
import { RouterLink } from 'vue-router'
</script>
<template>
  <div
    class="web-bottom-bar cl-bg-white cl-size full-width cl-pos-fixed cl-pos left-offset bottom-offset"
  >
    <ul
      class="cl-list remove-style cl-size full-width cl-flex cl-flex-justify-content-space-between"
    >
      <li>
        <RouterLink to="/" class="cl-txt no-decoration" href="">
          <Icon class="cl-fill-base" name="dashboard" :size="{ width: '24px', height: '24px' }" />
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/customers" class="cl-txt no-decoration" href="">
          <Icon class="cl-fill-base" name="users" :size="{ width: '24px', height: '24px' }" />
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/orders" class="cl-txt no-decoration" href="">
          <Icon class="cl-fill-base" name="bag" :size="{ width: '24px', height: '24px' }" />
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/settings" class="cl-txt no-decoration" href="">
          <Icon class="cl-fill-base" name="settings" :size="{ width: '24px', height: '24px' }" />
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
