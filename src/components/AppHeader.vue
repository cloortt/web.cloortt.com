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
            <h6 class="cl-fg-base">{{props.routeName}}</h6>
        </div>
        <div class="col-2 cl-flex cl-flex-justify-content-end">
            <ul class="cl-list remove-style cl-flex-inline cl-flex-align-items-center cl-border edge-is-curved">
                <li class="cl-display-inline-block cl-bg-base-faint cl-flex cl-flex-align-items-center cl-flex-justify-content-center cl-border edge-is-curved">
                    <Icon class="cl-fill-base" name="notification" :size="{ width: '24px', height: '24px' }" />
                </li>

                <!-- <li class="cl-display-inline-block">
                    <Icon class="cl-fill-base" name="settings" :size="{ width: '24px', height: '24px' }" />
                </li> -->
                <!-- <li class="cl-display-inline-block">
                    <img class="user-photo cl-image tiny-size cl-display-block cl-border edge-is-round" src="../assets/img/user.svg" alt=""/>
                </li> -->
            </ul>
        </div>
    </div>
</template>