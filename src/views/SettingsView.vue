<script setup>
    import AppSettings from '@/components/AppSettings.vue';
</script>
<template>
    <div class="web-settings">
       <AppSettings 
            icon="id-card" 
            title="Profile" 
        />

        <AppSettings 
            icon="vip-crown" 
            title="Subscription" 
        />

        <AppSettings 
            icon="notification" 
            title="Notification" 
        />

        <AppSettings 
            icon="key" 
            title="Security" 
        />

        <AppSettings 
            icon="feedback" 
            title="Contact" 
        />

        <AppSettings 
            icon="file-info" 
            title="Help" 
        />

        <AppSettings 
            icon="logout" 
            title="Logout" 
        />
        
    </div>
</template>