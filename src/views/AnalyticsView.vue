<script setup>
    import AppAnalyticsCard from '@/components/AppAnalyticsCard.vue';
    import { ref } from 'vue';

    const customersFilter = ref(['All','Pending']);
    const ordersFilter = ref(['All','Pending']);
    const pricingFilter = ref(['All','Pending']);
    const catalogFilter = ref(['All','Pending']);
</script>
<template>
    <div class="web-analytics cl-grid grid-4 stackable">
        <AppAnalyticsCard cardName="Customers" cardIcon="users" cardValue="6" :cardFilter="customersFilter"/>
        <AppAnalyticsCard cardName="Orders" cardIcon="bag" cardValue="70" :cardFilter="ordersFilter"/>
        <AppAnalyticsCard cardName="Pricing" cardIcon="bank-card" cardValue="5" :cardFilter="pricingFilter"/>
        <AppAnalyticsCard cardName="Catalog" cardIcon="image-ai" cardValue="11" :cardFilter="catalogFilter"/>
    </div>
</template>