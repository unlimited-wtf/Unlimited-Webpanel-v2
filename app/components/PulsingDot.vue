<template>
    <div class="flex justify-center">
        <span class="relative flex size-3">
            <span
                :class="
                    cn(
                        'absolute inline-flex h-full w-full rounded-full bg-positive opacity-75',
                        props.color,
                        props.pulse && 'animate-ping [animation-delay:_2.5s] [animation-duration:_2s]'
                    )
                "
            ></span>
            <span :class="cn('relative inline-flex size-3 rounded-full bg-positive', props.color)" />
        </span>
    </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils';

const props = withDefaults(defineProps<{ color?: string; pulse?: boolean }>(), {
    color: 'bg-positive',
    pulse: true
});
</script>
