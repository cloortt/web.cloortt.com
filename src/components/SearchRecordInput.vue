<script setup>
 import { defineProps } from 'vue';

 const props = defineProps({
     placeholder: {
         type: String,
         default: 'Search...'
     },
     searchValue: {
         type: String,
         default: ''
     }
 });
</script>
<template>
     <form class="cl-form">
        <div>
            <input type="text" class="sm cl-border width-1 style-solid bc-grey cl-size full-width" v-model="props.searchValue" :placeholder="props.placeholder" >
        </div>
    </form>
</template>