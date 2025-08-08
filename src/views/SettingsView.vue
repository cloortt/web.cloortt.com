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
                    <AppSettingsChild childName="Business Information" iconName="users" routeName="/settings/business-info"/>
                    <AppSettingsChild childName="Subscription" iconName="vip-crown" routeName="/settings/subscription"/>
                </div>
            </AppSettingsGroup>

            <AppSettingsGroup>
                <AppSettingsHeader headerName="Preferences" />
                <div class="content">
                    <AppSettingsChild childName="Notification" iconName="notification" routeName="/settings/notification"/>
                    <AppSettingsChild childName="Security" iconName="key" routeName="/settings/security"/>
                </div>
            </AppSettingsGroup>

            <AppSettingsGroup>
                <AppSettingsHeader headerName="Learn more" />
                <div class="content">
                    <AppSettingsChild childName="Feedback" iconName="feedback" routeName="/business-information"/>
                    <AppSettingsChild childName="Legal" iconName="file-info" routeName="/security"/>
                </div>
            </AppSettingsGroup>
            
        </div>
    </div>
</template>