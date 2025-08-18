<script setup>
import Icon from './Icon.vue'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
const iconSize = ref({ width: '22px', height: '22px' })
</script>
<template>
  <div
    class="web-bottom-bar cl-bg-base-faint cl-size full-width cl-pos-fixed cl-pos left-offset bottom-offset"
  >
    <ul
      class="cl-list remove-style cl-size full-width cl-flex cl-flex-justify-content-space-between"
    >
      <li class="cl-txt align-center">
        <router-link to="/" class="cl-txt no-decoration" exact>
          <Icon class="cl-fill-base" name="home" :size="iconSize" />
          <p class="cl-fg-base cl-txt">
            <small>Home</small>
          </p>
        </router-link>
      </li>
      <li class="cl-txt align-center">
        <RouterLink to="/customers" class="cl-txt no-decoration">
          <Icon class="cl-fill-base" name="users" :size="iconSize" />
          <p class="cl-fg-base cl-txt">
            <small>Customers</small>
          </p>
        </RouterLink>
      </li>
      <li class="cl-txt align-center">
        <RouterLink to="/orders" class="cl-txt no-decoration">
          <Icon class="cl-fill-base" name="bag" :size="iconSize" />
          <p class="cl-fg-base cl-txt">
            <small>Orders</small>
          </p>
        </RouterLink>
      </li>
      <li class="cl-txt align-center">
        <RouterLink to="/catalog" class="cl-txt no-decoration">
          <Icon class="cl-fill-base" name="image-ai" :size="iconSize" />
          <p class="cl-fg-base cl-txt">
            <small>Catalog</small>
          </p>
        </RouterLink>
      </li>
      <li class="cl-txt align-center">
        <RouterLink to="/settings" class="cl-txt no-decoration" href="">
          <Icon class="cl-fill-base" name="settings" :size="iconSize" />
          <p class="cl-fg-base cl-txt">
            <small>Settings</small>
          </p>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
