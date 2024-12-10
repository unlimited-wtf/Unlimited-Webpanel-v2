<template>
    <div class="flex w-full justify-center">
        <!-- Big -->
        <SplitBox class="hidden 3xl:flex">
            <template #top>
                <PulsingDot :color="offline ? 'bg-red' : 'bg-positive'" class="mr-3" :pulse="!offline" />
                <span class="text-3xl font-bold">0</span>
            </template>
            <template #bottom>
                <div class="text-md uppercase">
                    {{
                        offline ? $t('components.playersOnline.serverOffline') : $t('components.playersOnline.players')
                    }}
                </div>
            </template>
        </SplitBox>

        <!-- Small -->
        <div
            :class="
                cn(
                    'relative box-border flex w-5/6 select-none items-center justify-center overflow-hidden border px-4 py-4 text-sm drop-shadow-2xl transition-opacity duration-300 [border-image:radial-gradient(hsl(var(--green)),rgba(255,255,255,0))_1] after:absolute after:bottom-0 after:left-1/2 after:h-full after:w-5/6 after:-translate-x-1/2 after:translate-y-full after:transform after:bg-green after:blur-2xl 3xl:hidden',
                    offline && '[border-image:radial-gradient(hsl(var(--red)),rgba(255,255,255,0))_1] after:bg-red'
                )
            "
        >
            <PulsingDot :color="offline ? 'bg-red' : 'bg-positive'" class="mr-3" :pulse="!offline" />
            <span>0 / 48</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { cn } from '~/lib/utils';

// toDO: implement real-time player count

const offline = ref<boolean>(false);
</script>
