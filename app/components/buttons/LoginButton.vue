<template>
    <div class="my-auto place-self-end">
        <div
            :class="
                cn(
                    'relative hidden h-12 content-center overflow-hidden px-8 align-middle opacity-55 shadow-md after:absolute after:left-8 after:top-4 after:h-32 after:w-32 after:bg-foreground/80 after:blur-2xl hover:cursor-pointer hover:after:bg-foreground lg:block',
                    props.class
                )
            "
        >
            {{ $t('pages.index.button.login') }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';
import { cn } from '~/lib/utils';

interface Props {
    class?: HTMLAttributes['class'];
}

const props = defineProps<Props>();
</script>
