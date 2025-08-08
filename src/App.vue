<script setup>
  import Sidebar from '@/components/Sidebar.vue';
  import AppBody from '@/components/AppBody.vue';
  import AppHeader from '@/components/AppHeader.vue';
  import { RouterView } from 'vue-router';
</script>

<template>
     <Sidebar/>
     <AppBody>
        <AppHeader routeName="Home"/>
        <RouterView/>
      </AppBody>
</template>


