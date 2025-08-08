<script setup>
    import SidebarLink from './SidebarLink.vue';
</script>
<template>
    <aside class="web-sidebar cl-pos-fixed cl-pos left-offset top-offset cl-size full-height cl-bg-base cl-scroll y-auto">
        <div class="top">
            <h6 class="cl-fg-base-mild cl-txt w-bold">Cl</h6>
            <div class="cl-breaker-1"></div>
            <p class="cl-fg-base-mild">
                Premium Plan
            </p>
            <div class="cl-breaker-1"></div>
            <div class="cl-badge cl-display-inline cl-bg-base-mild cl-fg-base cl-border edge-is-curved cl-txt w-bold">
                Ceo
            </div>
        </div>
        <div class="cl-breaker-4"></div>
        <div class="cl-breaker-4"></div>
        <div class="links">
            <ul class="cl-list remove-style">
                <SidebarLink linkName="Home" linkUrl="/" iconName="tv"/>
                <SidebarLink linkName="Customers" linkUrl="/settings" iconName="users"/>
                <SidebarLink linkName="Home" linkUrl="/" iconName="tv"/>
                <SidebarLink linkName="Customers" linkUrl="/customers" iconName="users"/>
                <SidebarLink linkName="Home" linkUrl="/" iconName="tv"/>
                <SidebarLink linkName="Customers" linkUrl="/customers" iconName="users"/>
                <SidebarLink linkName="Home" linkUrl="/" iconName="tv"/>
                <SidebarLink linkName="Customers" linkUrl="/customers" iconName="users"/>
                <SidebarLink linkName="Home" linkUrl="/" iconName="tv"/>
            </ul>
        </div>
    </aside>
</template>