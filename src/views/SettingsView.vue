<script setup>
import AppSettings from '@/components/AppSettings.vue'
</script>
<template>
  <div class="web-settings">
    <AppSettings icon="id-card" title="Profile" />

    <AppSettings icon="bank-card" title="Subscription" />

    <AppSettings icon="notification" title="Notification" />

    <AppSettings icon="users" title="Team members" />

    <AppSettings icon="lock-star" title="Security" />

    <AppSettings icon="pantone" title="Apperance" />

    <AppSettings icon="file-history" title="History" />

    <AppSettings icon="feedback" title="Contact" />

    <AppSettings icon="file-info" title="Help" />

    <AppSettings icon="logout" title="Logout" />
  </div>
</template>
