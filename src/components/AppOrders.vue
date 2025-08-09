<script setup>
    import Icon from './Icon.vue';
</script>
<template>
    <div class="child cl-bg-white cl-border width-1 style-solid bc-grey edge-is-blunts">
        <div class="header cl-flex cl-flex-align-items-center cl-flex-justify-content-space-between">
            <div class="status">
                <div class="cl-badge cl-display-inline cl-bg-base-faint cl-fg-base cl-border edge-is-curved cl-txt w-bold">
                    In Progress
                </div>
            </div>
            <div class="action cl-flex cl-flex-justify-content-end">
                <Icon class="cl-fill-black" name="file-edit" :size="{ width: '20px', height: '20px' }" />
            </div>
        </div>
        <div class="info">
            <div class="group cl-flex cl-flex-align-items-center">
                <div class="title">
                    <p class="cl-fg-black cl-txt w-bold">Customer</p>
                </div>
                <div class="description cl-flex cl-flex-justify-content-end">
                    <p class="cl-fg-black">Omas-e</p>
                </div>
            </div>

            <div class="group cl-flex cl-flex-align-items-center">
                <div class="title">
                    <p class="cl-fg-black cl-txt w-bold">Style</p>
                </div>
                <div class="description cl-flex cl-flex-justify-content-end">
                    <p class="cl-fg-black">Ankara Gown</p>
                </div>
            </div>

            <div class="group cl-flex cl-flex-align-items-center">
                <div class="title">
                    <p class="cl-fg-black cl-txt w-bold">Timeline</p>
                </div>
                <div class="description cl-flex cl-flex-justify-content-end">
                    <p class="cl-fg-black">09 - 08 - 25</p>
                </div>
            </div>

            <div class="group cl-flex cl-flex-align-items-center">
                <div class="title">
                    <p class="cl-fg-black cl-txt w-bold">Price</p>
                </div>
                <div class="description cl-flex cl-flex-justify-content-end">
                    <p class="cl-fg-black">7,000</p>
                </div>
            </div>

            <div class="group cl-flex cl-flex-align-items-center">
                <div class="title">
                    <p class="cl-fg-black cl-txt w-bold">Payment Status</p>
                </div>
                <div class="description cl-flex cl-flex-justify-content-end">
                    <div class="cl-badge cl-display-inline cl-bg-base-faint cl-fg-base cl-border edge-is-curved cl-txt w-bold">
                        Pending
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>