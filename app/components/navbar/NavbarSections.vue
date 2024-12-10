<template>
    <ul class="hidden cursor-pointer list-none items-center justify-center gap-14 lg:flex">
        <NavbarSectionLink
            v-for="(label, name) in uiStore.sections"
            :key="name"
            :label="label"
            :name="name"
            :active="uiStore.activeSection === name"
        />
    </ul>
</template>

<script setup lang="ts">
const uiStore = useUIStore();
</script>
