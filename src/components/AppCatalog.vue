<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        imageUrl:{
            type:String,
            default:''
        }
    })
</script>
<template>
    <div class="child">
        <img class="cl-image cl-display-block cl-size full-width" :src="props.imageUrl" alt="Catalog Image">
    </div>
</template>