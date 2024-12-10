<template>
    <li
        :class="
            cn(
                'text-white opacity-25',
                active &&
                    'relative opacity-100 after:absolute after:-bottom-[3rem] after:left-0 after:block after:h-1 after:w-full after:bg-primary after:shadow-[0_0_2rem_hsl(var(--primary))]'
            )
        "
        @click="toSection(name)"
    >
        {{ label }}
    </li>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils';
const { toSection } = useNavbar();

interface NavbarSectionLinkProps {
    active: boolean;
    name: string;
    label: string;
}

defineProps<NavbarSectionLinkProps>();
</script>
