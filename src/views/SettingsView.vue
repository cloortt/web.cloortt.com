<script setup>
import { reactive } from 'vue'
import AppSettings from '@/components/AppSettings.vue'
import SearchRecordInput from '@/components/SearchRecordInput.vue'
import Modal from '@/components/Modal.vue'

const modal = reactive({
  profile: true,
})
</script>
<template>
  <SearchRecordInput searchValue="" placeholder="Search Settings..." />

  <div class="web-settings">
    <AppSettings icon="id-card" title="Profile" />

    <AppSettings icon="bank-card" title="Subscription" />

    <AppSettings icon="notification" title="Notification" />

    <AppSettings icon="users" title="Team members" />

    <AppSettings icon="lock-star" title="Security" />

    <AppSettings icon="pantone" title="Apperance" />

    <AppSettings icon="file-history" title="History" />

    <AppSettings icon="feedback" title="Contact" />

    <AppSettings icon="file-info" title="Help" />

    <AppSettings icon="logout" title="Logout" />
  </div>

  <Modal title="Profile" type="sidebar" :visibility="modal.profile" @close="modal.profile = false">
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
        <p class="cl-fg-base cl-txt w-bold">Business name <span class="cl-fg-danger">*</span></p>
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
        <p class="cl-fg-base cl-txt w-bold">Business phone <span class="cl-fg-danger">*</span></p>
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
        <p class="cl-fg-base cl-txt w-bold">Business Email <span class="cl-fg-danger">*</span></p>
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
        <p class="cl-fg-base cl-txt w-bold">
          Country of operation <span class="cl-fg-danger">*</span>
        </p>
        <div class="cl-breaker-2"></div>
        <select class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width">
          <option>Naira</option>
          <option>Usd</option>
        </select>
      </div>
      <div class="cl-breaker-4"></div>
      <div class="cl-breaker-4"></div>
      <div>
        <p class="cl-fg-base cl-txt w-bold">Business address <span class="cl-fg-danger">*</span></p>
        <div class="cl-breaker-2"></div>
        <textarea
          class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width"
          type=""
          placeholder="E.g Pants"
        ></textarea>
      </div>
      <div class="cl-breaker-4"></div>
      <div class="cl-breaker-4"></div>
      <div>
        <p class="cl-fg-base cl-txt w-bold">
          Unit of measurement <span class="cl-fg-danger">*</span>
        </p>
        <div class="cl-breaker-2"></div>
        <select class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width">
          <option>Centimetres (Cm)</option>
          <option>Inches (In)</option>
        </select>
      </div>
      <div class="cl-breaker-4"></div>
      <div class="cl-breaker-4"></div>
      <div>
        <p class="cl-fg-base cl-txt w-bold">Currency <span class="cl-fg-danger">*</span></p>
        <div class="cl-breaker-2"></div>
        <select class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width">
          <option>Naira</option>
          <option>Usd</option>
        </select>
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
