<script setup>
  import Sidebar from '@/components/Sidebar.vue';
  import AppBody from '@/components/AppBody.vue';
  import AppHeader from '@/components/AppHeader.vue';
  import { RouterView, useRoute } from 'vue-router';
  
  const route = useRoute();
  const routeNames = {
    'homepage':'Catalog',
    'settings':'Account'
  }
  // alert(routeNames.homepage);
  // alert(`Current route: ${route.name}`);
</script>

<template>
     <Sidebar/>
     <AppBody>
        <AppHeader :routeName="`${routeNames[route.name]}`"/>
        <RouterView/>
      </AppBody>
</template>


