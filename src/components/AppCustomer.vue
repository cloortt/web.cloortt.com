<script setup>
    import Icon from './Icon.vue';
    import { defineProps } from 'vue';

    const props = defineProps({
        customerName:{
            type: String,
            default: 'Cloortt'
        }

    });
</script>
<template>
    <div class="group cl-flex cl-flex-align-items-center cl-inner-space-3">
            <div class="info cl-flex cl-flex-align-items-center">
                <div class="icon cl-margin-right">
                    <div class="box cl-bg-base-mild cl-flex cl-flex-align-items-center cl-flex-justify-content-center cl-border edge-is-blunt">
                        <h6 class="cl-fg-base">{{ props.customerName[0] }}</h6>
                    </div>
                </div>
                <div class="name">
                    <p class="cl-fg-base cl-txt w-bold">{{props.customerName}}</p> 
                </div>
            </div>
            <div class="action cl-flex cl-flex-justify-content-end">
                <ul class="cl-list remove-style">
                    <li class="cl-display-inline">
                        <Icon class="cl-fill-base" name="file-edit" :size="{ width: '20px', height: '20px' }" />
                    </li>
                    <li class="cl-display-inline">
                        <Icon class="cl-fill-base" name="bin" :size="{ width: '20px', height: '20px' }" />
                    </li>
                </ul>
            </div>
        </div>
</template>