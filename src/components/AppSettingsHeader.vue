<script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    headerName:{
        type:String,
        default:'Default'
    }
  });
</script>
<template>
    <div class="header cl-bg-base">
        <h6 class="cl-fg-base-faint">
            <small>{{props.headerName}}</small>
        </h6>
    </div>
</template>