<script setup>
import AppOrder from '@/components/AppOrders.vue'
import SearchRecordInput from '@/components/SearchRecordInput.vue'
</script>
<template>
  <SearchRecordInput searchValue="" placeholder="Search Orders..." />
  <div class="web-orders">
    <AppOrder customerName="Carlos Longe" orderStatus="In Progress" orderDeadline="09 - 08 -25" />
    <AppOrder customerName="Omas-e" orderStatus="Pending" orderDeadline="09 - 08 -25" />
    <AppOrder customerName="Carlos Longe" orderStatus="In Progress" orderDeadline="09 - 08 -25" />
    <AppOrder customerName="Omas-e" orderStatus="Pending" orderDeadline="09 - 08 -25" />
    <AppOrder customerName="Carlos Longe" orderStatus="In Progress" orderDeadline="09 - 08 -25" />
    <AppOrder customerName="Omas-e" orderStatus="Pending" orderDeadline="09 - 08 -25" />
    <AppOrder customerName="Carlos Longe" orderStatus="In Progress" orderDeadline="09 - 08 -25" />
    <AppOrder customerName="Omas-e" orderStatus="Pending" orderDeadline="09 - 08 -25" />
  </div>
</template>
