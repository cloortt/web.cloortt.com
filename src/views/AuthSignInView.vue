<script setup>
import Icon from '@/components/Icon.vue'
</script>
<template>
  <div
    class="web-auth cl-bg-base cl-flex cl-flex-align-items-center cl-flex-justify-content-center"
  >
    <div class="frame">
      <div class="content cl-bg-white cl-inner-space-3">
        <div class="cl-flex cl-flex-align-items-center cl-flex-justify-content-space-between">
          <div>
            <h6 class="cl-fg-base">Sign In</h6>
          </div>
          <div>
            <Icon class="cl-fill-base" name="users" :size="{ width: '30px', height: '30px' }" />
          </div>
        </div>
        <div class="cl-breaker-4"></div>
        <div class="cl-breaker-2"></div>
        <form class="cl-form">
          <div>
            <p class="cl-fg-base cl-txt w-bold">Email</p>
            <div class="cl-breaker-1"></div>
            <input
              class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width"
              type=""
              placeholder="Enter your email"
            />
          </div>
          <div class="cl-breaker-4"></div>
          <div>
            <p class="cl-fg-base cl-txt w-bold">Password</p>
            <div class="cl-breaker-1"></div>
            <input
              class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width"
              type=""
              placeholder="xx-xx-xx-xx"
            />
          </div>
          <div class="cl-breaker-4"></div>
          <p class="cl-txt w-bold">
            <a class="cl-txt no-decoration cl-fg-base" href=""> Create an account </a>
          </p>
          <div class="cl-breaker-2"></div>
          <p class="cl-txt w-bold">
            <a class="cl-txt no-decoration cl-fg-base" href=""> Reset account </a>
          </p>
          <div class="cl-breaker-4"></div>
          <div>
            <button
              class="cl-button sm cl-txt w-bold cl-bg-base cl-fg-base-faint cl-border width-1 style-solid bc-base"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
