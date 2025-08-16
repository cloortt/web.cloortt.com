<script setup>
    import AppSettings from '@/components/AppSettings.vue';
</script>
<template>
    <div class="web-settings">
       <AppSettings 
            icon="users" 
            title="Profile" 
            description="Preview and manage your business information"
        />

        <AppSettings 
            icon="vip-crown" 
            title="Subscription" 
            description="Control and manage your subscription plan"
        />

        <AppSettings 
            icon="notification" 
            title="Notification" 
            description="Control and manage your notifications"
        />

        <AppSettings 
            icon="key" 
            title="Security" 
            description="Control and manage your security"
        />

        <AppSettings 
            icon="feedback" 
            title="Contact" 
            description="Report a bug, or request a feature"
        />

        <AppSettings 
            icon="file-info" 
            title="About" 
            description="Privacy policy, terms of service, and more"
        />
        
    </div>
</template>