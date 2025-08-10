<script setup>
    import AppOrder from '@/components/AppOrders.vue';
    import SearchRecordInput from '@/components/SearchRecordInput.vue';
</script>
<template>
    <SearchRecordInput searchValue="" placeholder="Search Orders..."/>
    <div class="web-orders">
        <AppOrder/>
        <AppOrder/>
        <AppOrder/>
        <AppOrder/>
        <AppOrder/>
        <AppOrder/>
        <AppOrder/>
        <AppOrder/>
    </div>
</template>