<script setup>
    import { defineProps } from 'vue';
    import Icon from './Icon.vue';
    import { RouterLink } from 'vue-router';

    const props = defineProps({
        childName:{
            type:String,
            default:'Child Component'
        },
        iconName:{
            type:String,
            default:'cloortt'
        },
        routeName:{
            type:String,
            default:'/'
        }   
    });
</script>
<template>
    <RouterLink :to="props.routeName" class="child cl-bg-base-faint cl-flex cl-flex-align-items-center cl-txt no-decoration">
        <div class="icon">
            <Icon class="cl-fill-base" :name="props.iconName" :size="{ width: '20px', height: '20px' }" />
        </div>
        <div class="text">
            <p class="cl-fg-base">{{props.childName}}</p>
        </div>
        <div class="icon cl-flex cl-flex-justify-content-end">
            <Icon class="cl-fill-base" name="arrow-right" :size="{ width: '20px', height: '20px' }" />
        </div>
    </RouterLink>
</template>