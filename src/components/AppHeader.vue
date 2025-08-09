<script setup>
    import { defineProps } from 'vue';
    import Icon from './Icon.vue';
    const props = defineProps({
        routeName: {
            type: String,
            default: 'Home'
        }
    });
</script>
<template>
     <div class="the-head cl-flex cl-flex-align-items-center">
        <div class="col-1">
            <h6 class="cl-fg-black cl-txt no-line-height">{{props.routeName}}</h6>
        </div>
        <div class="col-2 cl-flex cl-flex-justify-content-end">
            <ul class="cl-list remove-style cl-flex-inline cl-flex-align-items-center">
                <li class="cl-display-inline-block cl-bg-white cl-flex cl-flex-align-items-center cl-flex-justify-content-center cl-border width-1 style-solid bc-grey edge-is-blunts">
                    <Icon class="cl-fill-black" name="notification" :size="{ width: '24px', height: '24px' }" />
                </li>

            </ul>
        </div>
    </div>
</template>