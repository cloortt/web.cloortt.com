<script setup>
    import Icon from '@/components/Icon.vue';
    import { defineProps } from 'vue';

    const props = defineProps({
        title:{
            type:String,
            default:''
        },
        description:{
            type:String,
            default:''  
        },
        icon:{
            type:String,
            default:'cloortt'
        }
    });
</script>
<template>
    <div class="child cl-flex cl-flex-align-items-center cl-flex-justify-content-space-between cl-cursor pointer">
        <div class="info cl-flex cl-flex-align-items-center">
            <Icon class="cl-fill-base" :name="props.icon" :size="{ width: '22px', height: '22px' }" />
            <p class="cl-fg-base">
                {{props.title}}
            </p>
        </div>
        <div class="action">
            <Icon class="cl-fill-base" name="arrow-right" :size="{ width: '22px', height: '22px' }" />
        </div>
    </div>
</template>