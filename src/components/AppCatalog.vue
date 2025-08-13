<script setup>
    import { defineProps } from 'vue';
    import Icon from './Icon.vue';

    const props = defineProps({
        imageUrl:{
            type:String,
            default:''
        }
    })
</script>
<template>
    <div class="child cl-inner-space-2 cl-border width-1 style-solid bc-grey">
        <img class="cl-image cl-display-block cl-size full-width" :src="props.imageUrl" alt="Catalog Image">
        <div class="cl-breaker-2"></div>
        <!-- <p class="cl-fg-base cl- w-bold">Save</p> -->
        <Icon class="cl-fill-base" name="bookmark" :size="{ width: '20px', height: '20px' }" />
    </div>
</template>