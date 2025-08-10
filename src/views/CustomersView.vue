<script setup>
    import AppCustomer from '@/components/AppCustomer.vue';
    import SearchRecordInput from '@/components/SearchRecordInput.vue';
</script>
<template>
    <SearchRecordInput searchValue="" placeholder="Search Customers..."/>
    <div class="web-customers cl-bg-white">
        <AppCustomer customerName="Carlos Longe"/>
        <AppCustomer customerName="Omas-e"/>
        <AppCustomer customerName="Carlos Longe"/>
        <AppCustomer customerName="Omas-e"/>
        <AppCustomer customerName="Carlos Longe"/>
        <AppCustomer customerName="Omas-e"/>
        <AppCustomer customerName="Carlos Longe"/>
        <AppCustomer customerName="Omas-e"/>
        <AppCustomer customerName="Carlos Longe"/>
        <AppCustomer customerName="Omas-e"/>
    </div>
</template>