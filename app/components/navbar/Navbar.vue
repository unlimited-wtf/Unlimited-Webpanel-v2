<template>
    <header
        :class="
            cn(
                'navbar sticky top-0 z-40 border-border bg-background/80 py-2 lg:border-b lg:py-8',
                uiStore.isScrolled && 'bg-secondary/40 backdrop-blur-md'
            )
        "
    >
        <nav class="max-w-screen-3xl container grid grid-flow-col items-center px-6">
            <!-- Server name -->
            <div class="font-drukcyr text-5xl uppercase text-primary">
                {{ appConfig.serverName }}
            </div>

            <!-- Nav items -->
            <NavbarSections />

            <!-- Login Button -->
            <LoginButton />

            <!-- Mobile Nav Sidebar -->
            <NavbarSectionsMobile />
        </nav>
    </header>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils';
const uiStore = useUIStore();
const appConfig = useAppConfig();
</script>
