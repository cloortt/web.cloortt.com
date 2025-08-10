<script setup>
    import Icon from './Icon.vue';
    import { defineProps } from 'vue';

    const props = defineProps({
        orderStatus:{
            type: String,
            default: ''
        },
        customerName: {
            type: String,
            default: 'Default Customer'
        },
        orderDeadline: {
            type: String,
            default: '00 - 00 - 00'
        }
    });
</script>
<template>
    <div class="child">
        <div class="header cl-flex cl-flex-align-items-start cl-flex-justify-content-space-between">
            <div class="status">
                <div class="cl-badge cl-display-inline cl-bg-base cl-fg-base-mild cl-txt w-bold">
                    {{props.orderStatus}}
                </div>
            </div>
            <div class="action cl-flex cl-flex-justify-content-end">
                <Icon class="cl-fill-base" name="file-edit" :size="{ width: '20px', height: '20px' }" />
            </div>
        </div>
        <div class="info">
            <div class="group cl-flex cl-flex-align-items-center">
                <div class="title">
                    <p class="cl-fg-base cl-txt w-bold">Customer</p>
                </div>
                <div class="description cl-flex cl-flex-justify-content-end">
                    <p class="cl-fg-base">{{props.customerName}}</p>
                </div>
            </div>

            <div class="group cl-flex cl-flex-align-items-center">
                <div class="title">
                    <p class="cl-fg-base cl-txt w-bold">Time</p>
                </div>
                <div class="description cl-flex cl-flex-justify-content-end">
                    <p class="cl-fg-base">{{props.orderDeadline}}</p>
                </div>
            </div>
            
        </div>
    </div>
</template>