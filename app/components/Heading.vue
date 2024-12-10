<template>
    <h1 class="font-drukcyr text-8xl">
        {{ props.text }}
        <span
            :class="
                cn(
                    `relative bg-[radial-gradient(70%_70%_at_50%_50%,hsl(var(--primary))_0%,rgba(255,255,255,0)_100%)] bg-clip-text text-transparent after:absolute after:left-0 after:content-[attr(data-text)] after:[-webkit-text-stroke:_.5px_hsl(var(--primary))]`,
                    props.class
                )
            "
            :data-text="props.prominent"
        >
            {{ props.prominent }}
        </span>
    </h1>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '~/lib/utils';

interface Props {
    class?: HTMLAttributes['class'];
    text: string;
    prominent?: string;
}

const props = defineProps<Props>();
</script>
