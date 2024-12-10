<template>
    <DialogClose
        class="relative box-border flex w-full select-none items-center justify-center overflow-hidden border py-5 text-sm drop-shadow-2xl [border-image:radial-gradient(hsla(var(--secondary-foreground)/0.35),rgba(255,255,255,0))_1] after:absolute after:bottom-0 after:left-1/2 after:h-full after:w-5/6 after:-translate-x-1/2 after:translate-y-full after:transform hover:cursor-pointer hover:[border-image:radial-gradient(hsl(var(--primary)),rgba(255,255,255,0))_1] hover:after:bg-primary hover:after:blur-2xl"
        @click="toSection(name)"
    >
        <li>
            {{ label }}
        </li>
    </DialogClose>
</template>

<script setup lang="ts">
import { DialogClose } from 'radix-vue';
const { toSection } = useNavbar();

interface NavbarSectionsMobileLinkProps {
    name: string;
    label: string;
}

defineProps<NavbarSectionsMobileLinkProps>();
</script>
