<script setup>
    import AppSettings from '@/components/AppSettings.vue';
</script>
<template>
    <div class="web-settings">
       <AppSettings 
            icon="id-card" 
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
            title="Info" 
            description="Privacy policy, terms of service, and more"
        />

        <AppSettings 
            icon="logout" 
            title="Logout" 
            description="Report a bug, or request a feature"
        />
        
    </div>
</template>