<script setup>
    import Icon from '@/components/Icon.vue';
    import AppSettingsGroup from '@/components/AppSettingsGroup.vue';
    import AppSettingsHeader from '@/components/AppSettingsHeader.vue';
    import AppSettingsChild from '@/components/AppSettingsChild.vue';
</script>
<template>
    <div class="web-settings">
        <div class="frame">
            <AppSettingsGroup>
                <AppSettingsHeader headerName="Profile" />
                <div class="content">
                    <AppSettingsChild childName="Business Information" iconName="users"/>
                </div>
            </AppSettingsGroup>
            


            <div class="group">
                <div class="header cl-bg-base">
                    <h6 class="cl-fg-base-faint">
                        <small>Profile</small>
                    </h6>
                </div>
                <div class="content">
                    <div class="child cl-bg-base-faint cl-flex cl-flex-align-items-center">
                        <div class="icon">
                            <Icon class="cl-fill-base" name="users" :size="{ width: '20px', height: '20px' }" />
                        </div>
                        <div class="text">
                            <p class="cl-fg-base">Business Information</p>
                        </div>
                        <div class="icon cl-flex cl-flex-justify-content-end">
                            <Icon class="cl-fill-base" name="arrow-right" :size="{ width: '20px', height: '20px' }" />
                        </div>
                    </div>

                    <div class="child cl-bg-base-faint cl-flex cl-flex-align-items-center">
                        <div class="icon">
                            <Icon class="cl-fill-base" name="users" :size="{ width: '20px', height: '20px' }" />
                        </div>
                        <div class="text">
                            <p class="cl-fg-base">Subscription</p>
                        </div>
                        <div class="icon cl-flex cl-flex-justify-content-end">
                            <Icon class="cl-fill-base" name="arrow-right" :size="{ width: '20px', height: '20px' }" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>