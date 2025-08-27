<script setup>
import { ref } from 'vue'
import AppCustomer from '@/components/AppCustomer.vue'
import SearchRecordInput from '@/components/SearchRecordInput.vue'
import Modal from '@/components/Modal.vue'
import FloatActionButton from '@/components/FloatActionButton.vue'

const openNewCustomerModal = ref(false)
</script>
<template>
  <SearchRecordInput searchValue="" placeholder="Search Customers..." />
  <div class="web-customers cl-bg-white">
    <AppCustomer customerName="Carlos Longe" />
    <AppCustomer customerName="Omas-e" />
    <AppCustomer customerName="Carlos Longe" />
    <AppCustomer customerName="Omas-e" />
    <AppCustomer customerName="Carlos Longe" />
    <AppCustomer customerName="Omas-e" />
    <AppCustomer customerName="Carlos Longe" />
    <AppCustomer customerName="Omas-e" />
    <AppCustomer customerName="Carlos Longe" />
    <AppCustomer customerName="Omas-e" />
  </div>
  <FloatActionButton @click="openNewCustomerModal = true" />

  <Modal
    title="Customer"
    type="sidebar"
    :visibility="openNewCustomerModal"
    @close="openNewCustomerModal = false"
  >
    <form class="cl-form">
      <div>
        <p class="cl-fg-base cl-txt w-bold">Full name <span class="cl-fg-danger">*</span></p>
        <div class="cl-breaker-2"></div>
        <input
          class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width"
          type="text"
          placeholder="E.g Onimisi Alabi"
        />
      </div>
      <div class="cl-breaker-4"></div>
      <div class="cl-breaker-4"></div>
      <div class="cl-grid grid-2">
        <div>
          <p class="cl-fg-base cl-txt w-bold">Phone<span class="cl-fg-danger">*</span></p>
          <div class="cl-breaker-2"></div>
          <input
            class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width"
            type="number"
            placeholder="E.g 07081616034"
          />
        </div>
        <div>
          <p class="cl-fg-base cl-txt w-bold">Email</p>
          <div class="cl-breaker-2"></div>
          <input
            class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width"
            type="email"
            placeholder="E.g hi@cloortt.com"
          />
        </div>
      </div>
      <div class="cl-breaker-4"></div>
      <div class="cl-breaker-4"></div>
      <div>
        <p class="cl-fg-base cl-txt w-bold">Birthday<span class="cl-fg-danger">*</span></p>
        <div class="cl-breaker-2"></div>
        <input
          class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width"
          type="date"
        />
      </div>
      <div class="cl-breaker-4"></div>
      <div class="cl-breaker-4"></div>
      <div>
        <p class="cl-fg-base cl-txt w-bold">Gender<span class="cl-fg-danger">*</span></p>
        <div class="cl-breaker-2"></div>
        <select class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width">
          <option>--Choose from option--</option>
        </select>
      </div>

      <div>
        <div class="cl-breaker-4"></div>
        <div class="cl-breaker-4"></div>
        <h6 class="cl-fg-base">Info</h6>
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
