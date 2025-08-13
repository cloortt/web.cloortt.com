<script setup>
    import SearchRecordInput from '@/components/SearchRecordInput.vue';
    import AppCatalog from '@/components/AppCatalog.vue';
</script>
<template>
    <SearchRecordInput searchValue="" placeholder="Search for Inspo..."/>
    <div class="web-catalog cl-grid grid-3 stackable">
        <AppCatalog imageUrl="https://images.unsplash.com/photo-1693070739008-c3b048f1f976?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZhc2hpb24lMjBzdHlsZXxlbnwwfHwwfHx8MA%3D%3D"/>
        <AppCatalog imageUrl="https://images.unsplash.com/photo-1623860668007-c9b37082449b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGZhc2hpb24lMjBzdHlsZXxlbnwwfHwwfHx8MA%3D%3D"/>
        <AppCatalog imageUrl="https://images.unsplash.com/photo-1614492025699-2a9ea5b8c58b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGZhc2hpb24lMjBzdHlsZXxlbnwwfHwwfHx8MA%3D%3D"/>
        <AppCatalog imageUrl="https://images.unsplash.com/photo-1693070739008-c3b048f1f976?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZhc2hpb24lMjBzdHlsZXxlbnwwfHwwfHx8MA%3D%3D"/>
        <AppCatalog imageUrl="https://images.unsplash.com/photo-1623860668007-c9b37082449b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGZhc2hpb24lMjBzdHlsZXxlbnwwfHwwfHx8MA%3D%3D"/>
        <AppCatalog imageUrl="https://images.unsplash.com/photo-1614492025699-2a9ea5b8c58b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGZhc2hpb24lMjBzdHlsZXxlbnwwfHwwfHx8MA%3D%3D"/>
    </div>
</template>