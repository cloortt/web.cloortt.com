<script setup>
    import Icon from '@/components/Icon.vue';
</script>
<template>
    <div class="web-auth cl-flex cl-flex-align-items-center cl-flex-justify-content-center">
        <div class="frame">
            <div class="content cl-bg-white cl-border width-1 style-solid bc-grey cl-inner-space-3">
                <div class="cl-flex cl-flex-align-items-center cl-flex-justify-content-space-between">
                    <div>
                        <h6 class="cl-fg-base">Create Account</h6>
                    </div>
                    <div>
                        <Icon class="cl-fill-base" name="users" :size="{ width: '30px', height: '30px' }" />
                    </div>
                </div>
                <div class="cl-breaker-4"></div>
                <div class="cl-breaker-2"></div>
                <form class="cl-form">
                    <div>
                        <p class="cl-fg-base cl-txt w-bold">Country</p>
                        <div class="cl-breaker-1"></div>
                        <select class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width">
                            <option value="Nigeria">Nigeria</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Kenya">Kenya</option>
                            <option value="South Africa">South Africa</option>
                        </select>
                    </div>
                    <div class="cl-breaker-4"></div>
                    <div>
                        <p class="cl-fg-base cl-txt w-bold">Business name</p>
                        <div class="cl-breaker-1"></div>
                        <input class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width" type="" placeholder="E.g Cloortt">
                    </div>
                    <div class="cl-breaker-4"></div>
                    <div class="cl-grid grid-2">
                        <div>
                            <p class="cl-fg-base cl-txt w-bold">Email</p>
                            <div class="cl-breaker-1"></div>
                            <input class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width" type="" placeholder="Enter your email">
                        </div>
                        <div>
                            <p class="cl-fg-base cl-txt w-bold">Phone Number</p>
                            <div class="cl-breaker-1"></div>
                            <input class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width" type="" placeholder="E.g +234 123 4567">
                        </div>
                    </div>
                    <div class="cl-breaker-4"></div>
                    <div>
                        <p class="cl-fg-base cl-txt w-bold">Password</p>
                        <div class="cl-breaker-1"></div>
                        <input class="lg cl-bg-white cl-border width-1 style-solid bc-grey cl-size full-width" type="" placeholder="xx-xx-xx-xx">
                    </div>
                    <div class="cl-breaker-4"></div>
                    <p class="cl-txt w-bold">
                        <a class="cl-txt no-decoration cl-fg-base" href="">
                            Sign in to account
                        </a>
                    </p>
                    <div class="cl-breaker-2"></div>
                    <p class="cl-txt w-bold">
                        <a class="cl-txt no-decoration cl-fg-base" href="">
                            Resend code
                        </a>
                    </p>
                    <div class="cl-breaker-4"></div>
                    <div>
                        <button class="cl-button sm cl-txt w-bold cl-bg-base cl-fg-base-faint cl-border width-1 style-solid bc-base">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>