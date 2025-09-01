<script setup>
import { reactive } from 'vue'
import AppSettings from '@/components/AppSettings.vue'
import SearchRecordInput from '@/components/SearchRecordInput.vue'
import Modal from '@/components/Modal.vue'
import Icon from '@/components/Icon.vue'

const modal = reactive({
  profile: false,
  theme: false,
  notification: false,
  logout: false,
})
</script>
<template>
  <SearchRecordInput searchValue="" placeholder="Search Settings..." />

  <div class="web-settings">
    <AppSettings icon="id-card" title="Profile" @click="modal.profile = true" />

    <AppSettings icon="bank-card" title="Subscription" />

    <AppSettings icon="notification" title="Notification" @click="modal.notification = true" />

    <AppSettings icon="users" title="Team members" />

    <AppSettings icon="lock-star" title="Security" />

    <AppSettings icon="pantone" title="Theme" @click="modal.theme = true" />

    <AppSettings icon="file-history" title="History" />

    <AppSettings icon="feedback" title="Contact" />

    <AppSettings icon="file-info" title="Help" />

    <AppSettings icon="logout" title="Logout" @click="modal.logout = true" />
  </div>

  <!-- Business Profile Modal Starts -->
  <Modal title="Profile" type="sidebar" :visibility="modal.profile" @close="modal.profile = false">
    <form class="cl-form">
      <div>
        <img
          class="cl-image cl-display-block tiny-size"
          src="https://images.unsplash.com/photo-1624395213043-fa2e123b2656?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGhlYWRzaG90fGVufDB8fDB8fHww"
          alt="Picture"
        />
      </div>
      <div class="cl-breaker-4"></div>
      <div class="cl-breaker-3"></div>
      <div>
        <p class="cl-fg-base">Business name <span class="cl-fg-danger">*</span></p>
        <div class="cl-breaker-2"></div>
        <input
          class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width"
          type=""
          placeholder="E.g Pants"
        />
      </div>
      <div class="cl-breaker-4"></div>
      <div class="cl-breaker-3"></div>
      <div>
        <p class="cl-fg-base">Business phone <span class="cl-fg-danger">*</span></p>
        <div class="cl-breaker-2"></div>
        <input
          class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width"
          type=""
          placeholder="E.g Pants"
        />
      </div>
      <div class="cl-breaker-4"></div>
      <div class="cl-breaker-3"></div>
      <div>
        <p class="cl-fg-base">Business Email <span class="cl-fg-danger">*</span></p>
        <div class="cl-breaker-2"></div>
        <input
          class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width"
          type=""
          placeholder="E.g Pants"
        />
      </div>
      <div class="cl-breaker-4"></div>
      <div class="cl-breaker-3"></div>
      <div>
        <p class="cl-fg-base">Country of operation <span class="cl-fg-danger">*</span></p>
        <div class="cl-breaker-2"></div>
        <select class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width">
          <option>Naira</option>
          <option>Usd</option>
        </select>
      </div>
      <div class="cl-breaker-4"></div>
      <div class="cl-breaker-3"></div>
      <div>
        <p class="cl-fg-base">Unit of measurement <span class="cl-fg-danger">*</span></p>
        <div class="cl-breaker-2"></div>
        <select class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width">
          <option>Centimetres (Cm)</option>
          <option>Inches (In)</option>
        </select>
      </div>
      <div class="cl-breaker-4"></div>
      <div class="cl-breaker-3"></div>
      <div>
        <p class="cl-fg-base">Currency <span class="cl-fg-danger">*</span></p>
        <div class="cl-breaker-2"></div>
        <select class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width">
          <option>Naira</option>
          <option>Usd</option>
        </select>
      </div>
      <div class="cl-breaker-4"></div>
      <div class="cl-breaker-3"></div>
      <div>
        <p class="cl-fg-base">Description <span class="cl-fg-danger">*</span></p>
        <div class="cl-breaker-2"></div>
        <textarea
          class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width"
          type=""
          placeholder="E.g Pants"
        ></textarea>
      </div>
      <div class="cl-breaker-4"></div>

      <div class="cl-flex cl-flex-justify-content-end">
        <button
          class="cl-button lg cl-size cl-txt w-bold cl-bg-base cl-fg-base-faint cl-border width-1 style-solid bc-base"
        >
          Save
        </button>
      </div>
    </form>
  </Modal>
  <!-- Business Profile Modal Ends -->

  <!-- Notification Modal Starts -->
  <Modal
    title="Notification"
    type="small"
    :visibility="modal.notification"
    @close="modal.notification = false"
  >
    <div class="web-modal-list">
      <div class="child cl-flex cl-flex-align-items-center">
        <div class="title">
          <p class="cl-fg-base">Default</p>
        </div>
        <div class="icon cl-flex cl-flex-justify-content-end">
          <Icon class="cl-fill-base" name="arrow-right" :size="{ width: '22px', height: '22px' }" />
        </div>
      </div>

      <div class="child cl-flex cl-flex-align-items-center">
        <div class="title">
          <p class="cl-fg-base">Light</p>
        </div>
        <div class="icon cl-flex cl-flex-justify-content-end">
          <Icon class="cl-fill-base" name="arrow-right" :size="{ width: '22px', height: '22px' }" />
        </div>
      </div>

      <div class="child cl-flex cl-flex-align-items-center">
        <div class="title">
          <p class="cl-fg-base">Dim</p>
        </div>
        <div class="icon cl-flex cl-flex-justify-content-end">
          <Icon class="cl-fill-base" name="arrow-right" :size="{ width: '22px', height: '22px' }" />
        </div>
      </div>
    </div>
  </Modal>
  <!-- Notification Modal Ends -->

  <!-- Theme Modal Starts -->
  <Modal title="Theme" type="small" :visibility="modal.theme" @close="modal.theme = false">
    <div class="web-modal-list">
      <div class="child cl-flex cl-flex-align-items-center">
        <div class="title">
          <p class="cl-fg-base">Default</p>
        </div>
        <div class="icon cl-flex cl-flex-justify-content-end">
          <Icon class="cl-fill-base" name="arrow-right" :size="{ width: '22px', height: '22px' }" />
        </div>
      </div>

      <div class="child cl-flex cl-flex-align-items-center">
        <div class="title">
          <p class="cl-fg-base">Light</p>
        </div>
        <div class="icon cl-flex cl-flex-justify-content-end">
          <Icon class="cl-fill-base" name="arrow-right" :size="{ width: '22px', height: '22px' }" />
        </div>
      </div>

      <div class="child cl-flex cl-flex-align-items-center">
        <div class="title">
          <p class="cl-fg-base">Dim</p>
        </div>
        <div class="icon cl-flex cl-flex-justify-content-end">
          <Icon class="cl-fill-base" name="arrow-right" :size="{ width: '22px', height: '22px' }" />
        </div>
      </div>
    </div>
  </Modal>
  <!-- Theme Modal Ends -->

  <!-- Logout Modal Starts -->
  <Modal title="Log out" type="small" :visibility="modal.logout" @close="modal.logout = false">
    <div class="cl-breaker-4"></div>

    <p class="cl-fg-base cl-txt align-justified">
      We just want to confirm you wish to log out. All of your saved projects, client data, and
      orders will be safely stored until your next visit.
    </p>
    <div class="cl-breaker-4"></div>
    <div class="cl-flex cl-flex-justify-content-end">
      <button
        class="cl-button sm cl-size cl-txt w-bold cl-bg-base cl-fg-base-faint cl-border width-1 style-solid bc-base"
      >
        Log out
      </button>
    </div>
  </Modal>
  <!-- Logout Modal Ends -->
</template>
