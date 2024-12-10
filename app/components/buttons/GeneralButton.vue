<template>
    <button
        class="relative box-border flex select-none justify-center overflow-hidden border px-4 py-6 text-sm drop-shadow-2xl transition-opacity duration-300 [border-image:radial-gradient(hsl(var(--primary)),rgba(255,255,255,0))_1] after:absolute after:bottom-0 after:left-1/2 after:h-full after:w-5/6 after:-translate-x-1/2 after:translate-y-full after:transform after:bg-primary after:blur-2xl hover:opacity-80"
    >
        <slot />
    </button>
</template>
