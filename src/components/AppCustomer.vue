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
    <div class="group cl-flex cl-flex-align-items-center">
            <div class="info cl-flex cl-flex-align-items-center">
                <div class="icon cl-margin-right">
                    <div class="box cl-flex cl-flex-align-items-center cl-flex-justify-content-center cl-border width-1 style-solid bc-grey">
                        <h6 class="cl-fg-black">{{ props.customerName[0] }}</h6>
                    </div>
                </div>
                <div class="name">
                    <p class="cl-fg-black cl-txt w-bold">{{props.customerName}}</p> 
                </div>
            </div>
            <div class="action cl-flex cl-flex-justify-content-end">
                <ul class="cl-list remove-style">
                    <li class="cl-display-inline">
                        <Icon class="cl-fill-black" name="file-edit" :size="{ width: '18px', height: '18px' }" />
                    </li>
                    <li class="cl-display-inline">
                        <Icon class="cl-fill-black" name="bin" :size="{ width: '18px', height: '18px' }" />
                    </li>
                </ul>
            </div>
        </div>
</template>