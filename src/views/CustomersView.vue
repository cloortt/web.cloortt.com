<script setup>
import { ref, reactive } from 'vue'
import AppCustomer from '@/components/AppCustomer.vue'
import SearchRecordInput from '@/components/SearchRecordInput.vue'
import Modal from '@/components/Modal.vue'
import FloatActionButton from '@/components/FloatActionButton.vue'
const modal = reactive({
  customer: false,
})
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

  <FloatActionButton @click="modal.customer = true" />

  <Modal
    title="Customer"
    type="sidebar"
    :visibility="modal.customer"
    @close="modal.customer = false"
  >
    <form class="cl-form">
      <div>
        <p class="cl-fg-base">Full name <span class="cl-fg-danger">*</span></p>
        <div class="cl-breaker-2"></div>
        <input
          class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width"
          type="text"
          placeholder="E.g Onimisi Alabi"
        />
      </div>
      <div class="cl-breaker-4"></div>
      <div class="cl-breaker-1"></div>
      <div class="cl-grid grid-2">
        <div>
          <p class="cl-fg-base">Phone<span class="cl-fg-danger">*</span></p>
          <div class="cl-breaker-2"></div>
          <input
            class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width"
            type="number"
            placeholder="E.g 07081616034"
          />
        </div>
        <div>
          <p class="cl-fg-base">Email</p>
          <div class="cl-breaker-2"></div>
          <input
            class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width"
            type="email"
            placeholder="E.g hi@cloortt.com"
          />
        </div>
      </div>
      <div class="cl-breaker-4"></div>
      <div class="cl-breaker-1"></div>
      <div>
        <p class="cl-fg-base">Birthday <span class="cl-fg-danger">*</span></p>
        <div class="cl-breaker-2"></div>
        <input
          class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width"
          type="date"
        />
      </div>
      <div class="cl-breaker-4"></div>
      <div class="cl-breaker-1"></div>
      <div>
        <p class="cl-fg-base">Gender <span class="cl-fg-danger">*</span></p>
        <div class="cl-breaker-2"></div>
        <select class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width">
          <option value="">--Choose from option--</option>
          <option value="FEMALE">Female</option>
          <option value="MALE">Male</option>
        </select>
      </div>

      <div>
        <div class="cl-breaker-4"></div>
        <div class="cl-breaker-4"></div>
        <h6 class="cl-fg-base">Upper body</h6>
        <div class="cl-breaker-3"></div>
        <div class="cl-border bottom-width-1 bottom-style-solid bc-bottom-grey"></div>
        <div class="cl-breaker-4"></div>
        <div class="cl-breaker-4"></div>
      </div>

      <div class="cl-grid grid-2">
        <div>
          <p class="cl-fg-base">Armhole <span class="cl-fg-danger">*</span></p>
          <div class="cl-breaker-2"></div>
          <input
            class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width"
            type="number"
            placeholder="0"
          />
        </div>
        <div>
          <p class="cl-fg-base">Ankle <span class="cl-fg-danger">*</span></p>
          <div class="cl-breaker-2"></div>
          <input
            class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width"
            type="number"
            placeholder="0"
          />
        </div>
      </div>

      <div>
        <div class="cl-breaker-4"></div>
        <div class="cl-breaker-4"></div>
        <h6 class="cl-fg-base">Lower body</h6>
        <div class="cl-breaker-3"></div>
        <div class="cl-border bottom-width-1 bottom-style-solid bc-bottom-grey"></div>
        <div class="cl-breaker-4"></div>
        <div class="cl-breaker-4"></div>
      </div>

      <div class="cl-grid grid-2">
        <div>
          <p class="cl-fg-base">Armhole <span class="cl-fg-danger">*</span></p>
          <div class="cl-breaker-2"></div>
          <input
            class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width"
            type="number"
            placeholder="0"
          />
        </div>
        <div>
          <p class="cl-fg-base">Ankle <span class="cl-fg-danger">*</span></p>
          <div class="cl-breaker-2"></div>
          <input
            class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width"
            type="number"
            placeholder="0"
          />
        </div>
      </div>

      <div class="cl-breaker-4"></div>
      <div class="cl-breaker-1"></div>

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
