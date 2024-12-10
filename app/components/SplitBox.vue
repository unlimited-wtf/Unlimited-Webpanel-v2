<template>
    <div
        class="relative flex h-32 w-48 flex-col items-center justify-center overflow-hidden border border-solid bg-primary/5 shadow-sm shadow-black/25 [border-image:linear-gradient(hsl(var(--primary)),rgba(255,255,255,0))_1] after:absolute after:bottom-0 after:left-1/2 after:h-full after:w-5/6 after:-translate-x-1/2 after:translate-y-2/3 after:transform after:bg-primary after:opacity-50 after:blur-2xl [&>*]:flex [&>*]:items-center [&>*]:justify-center"
    >
        <div class="h-2/3">
            <slot name="top"></slot>
        </div>
        <div class="h-1/3 w-full bg-primary text-secondary/55 shadow-[0_1px_55px_hsla(var(--primary)/0.55)]">
            <slot name="bottom"></slot>
        </div>
    </div>
</template>
