<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { ToastAction, type ToastActionProps } from 'radix-vue';
import { cn } from '@/lib/utils';

const props = defineProps<ToastActionProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});
</script>

<template>
    <ToastAction
        v-bind="delegatedProps"
        :class="
            cn(
                'group-[.negative]:hover:border-negative/30 group-[.negative]:hover:bg-negative group-[.negative]:hover:text-negative-foreground group-[.negative]:focus:ring-negative inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.negative]:border-muted/40',
                props.class
            )
        "
    >
        <slot />
    </ToastAction>
</template>
