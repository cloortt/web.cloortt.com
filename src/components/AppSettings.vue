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
    <div class="child cl-inner-space-3">
        <div class="top">
            <div class="cl-flex cl-flex-align-items-center cl-flex-justify-content-space-between">
                <div>
                    <h6 class="cl-fg-base cl-txt w-bold">
                        <small>{{props.title}}</small>
                    </h6>
                </div>
                <div>
                     <Icon class="cl-fill-base" :name="props.icon" :size="{ width: '25px', height: '25px' }" />
                </div>
            </div>
        </div>
        <div class="bottom">
            <p class="cl-fg-base">{{ props.description }}</p>
        </div>
    </div>
</template>