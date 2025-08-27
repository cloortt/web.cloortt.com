<script setup>
import { ref } from 'vue'
import SearchRecordInput from '@/components/SearchRecordInput.vue'
import AppPricing from '@/components/AppPricing.vue'
import FloatActionButton from '@/components/FloatActionButton.vue'
import Modal from '@/components/Modal.vue'

const openNewPriceModal = ref(false)
</script>
<template>
  <SearchRecordInput searchValue="" placeholder="Search Pricing..." />
  <div class="web-pricing">
    <AppPricing
      name="Playsuit"
      price="70,000"
      image="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0fGVufDB8fDB8fHww"
    />
    <AppPricing
      name="Coat"
      price="6,500"
      image="https://plus.unsplash.com/premium_photo-1671221672467-e87b65cb07df?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHRyb3VzZXJ8ZW58MHx8MHx8fDA%3D"
    />
    <AppPricing
      name="Playsuit"
      price="70,000"
      image="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0fGVufDB8fDB8fHww"
    />
    <AppPricing
      name="Coat"
      price="6,500"
      image="https://plus.unsplash.com/premium_photo-1671221672467-e87b65cb07df?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHRyb3VzZXJ8ZW58MHx8MHx8fDA%3D"
    />
    <AppPricing
      name="Playsuit"
      price="70,000"
      image="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0fGVufDB8fDB8fHww"
    />
    <AppPricing
      name="Coat"
      price="6,500"
      image="https://plus.unsplash.com/premium_photo-1671221672467-e87b65cb07df?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHRyb3VzZXJ8ZW58MHx8MHx8fDA%3D"
    />
    <AppPricing
      name="Playsuit"
      price="70,000"
      image="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0fGVufDB8fDB8fHww"
    />
    <AppPricing
      name="Coat"
      price="6,500"
      image="https://plus.unsplash.com/premium_photo-1671221672467-e87b65cb07df?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHRyb3VzZXJ8ZW58MHx8MHx8fDA%3D"
    />
    <AppPricing
      name="Playsuit"
      price="70,000"
      image="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0fGVufDB8fDB8fHww"
    />
    <AppPricing
      name="Coat"
      price="70,000"
      image="https://plus.unsplash.com/premium_photo-1671221672467-e87b65cb07df?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHRyb3VzZXJ8ZW58MHx8MHx8fDA%3D"
    />
  </div>

  <FloatActionButton @click="openNewPriceModal = true" />

  <Modal
    title="Pricing"
    type="sidebar"
    :visibility="openNewPriceModal"
    @close="openNewPriceModal = false"
  >
    <form class="cl-form">
      <div>
        <img
          class="cl-image cl-display-block tiny-size"
          src="https://plus.unsplash.com/premium_photo-1671221672467-e87b65cb07df?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHRyb3VzZXJ8ZW58MHx8MHx8fDA%3D"
          alt="Picture"
        />
      </div>
      <div class="cl-breaker-4"></div>
      <div class="cl-breaker-4"></div>
      <div>
        <p class="cl-fg-base cl-txt w-bold">Name <span class="cl-fg-danger">*</span></p>
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
