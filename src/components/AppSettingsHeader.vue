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
    <div class="header cl-bg-white  cl-border bottom-width-1 bottom-style-solid bc-bottom-grey">
        <h6 class="cl-fg-base">
            <small>{{props.headerName}}</small>
        </h6>
    </div>
</template>