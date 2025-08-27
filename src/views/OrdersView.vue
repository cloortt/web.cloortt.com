<script setup>
import { ref } from 'vue'
import AppOrder from '@/components/AppOrders.vue'
import SearchRecordInput from '@/components/SearchRecordInput.vue'
import Modal from '@/components/Modal.vue'
import FloatActionButton from '@/components/FloatActionButton.vue'

const openNewOrderModal = ref(false)
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

  <FloatActionButton @click="openNewOrderModal = true" />

  <Modal
    title="Home"
    type="sidebar"
    :visibility="openNewOrderModal"
    @close="openNewOrderModal = false"
  >
    <form class="cl-form">
      <div>
        <p class="cl-fg-base cl-txt w-bold">Price <span class="cl-fg-danger">*</span></p>
        <div class="cl-breaker-2"></div>
        <select
          class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width"
          type=""
          placeholder="E.g Pants"
        >
          <option>--Choose from option--</option>
        </select>
      </div>
      <div class="cl-breaker-4"></div>
      <div>
        <p class="cl-fg-base cl-txt w-bold">Home <span class="cl-fg-danger">*</span></p>
        <div class="cl-breaker-2"></div>
        <input
          class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width"
          type=""
          placeholder="E.g Pants"
        />
      </div>
      <div class="cl-breaker-4"></div>
      <div>
        <p class="cl-fg-base cl-txt w-bold">Home <span class="cl-fg-danger">*</span></p>
        <div class="cl-breaker-2"></div>
        <input
          class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width"
          type=""
          placeholder="E.g Pants"
        />
      </div>

      <div>
        <div class="cl-breaker-4"></div>
        <div class="cl-breaker-4"></div>
        <h6 class="cl-fg-base">Customer Info</h6>
        <div class="cl-breaker-4"></div>
        <div class="cl-border bottom-width-1 bottom-style-solid bc-bottom-grey"></div>
        <div class="cl-breaker-4"></div>
        <div class="cl-breaker-4"></div>
      </div>

      <div>
        <p class="cl-fg-base cl-txt w-bold">Home <span class="cl-fg-danger">*</span></p>
        <div class="cl-breaker-2"></div>
        <input
          class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width"
          type=""
          placeholder="E.g Pants"
        />
      </div>
      <div class="cl-breaker-4"></div>
      <div>
        <p class="cl-fg-base cl-txt w-bold">Price <span class="cl-fg-danger">*</span></p>
        <div class="cl-breaker-2"></div>
        <input
          class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width"
          type=""
          placeholder="10,000"
        />
      </div>
      <div class="cl-breaker-4"></div>
      <div class="cl-flex cl-flex-justify-content-end">
        <button
          class="cl-button lg cl-txt w-bold cl-bg-base cl-fg-base-faint cl-border width-1 style-solid bc-base"
        >
          Save
        </button>
      </div>
    </form>
  </Modal>
</template>
