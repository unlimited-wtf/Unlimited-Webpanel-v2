<template>
    <div
        data-name="hero"
        class="grid justify-items-center pb-32 2xl:grid-cols-[minmax(0,1fr)_550px] 2xl:pb-0 3xl:grid-cols-[1fr_minmax(0,1000px)_1fr] 3xl:content-center"
    >
        <!-- Join -->
        <div
            class="order-2 flex w-full max-w-[500px] flex-col items-center justify-center gap-y-6 text-center 3xl:order-1 3xl:text-start"
        >
            <Heading :text="$t('pages.index.hero.headerNormal')" :prominent="$t('pages.index.hero.headerColored')" />
            <span class="text-center text-lg text-foreground/50">
                {{ $t('pages.index.hero.headerSubtitle') }}
            </span>

            <!-- Buttons -->
            <div class="flex w-full flex-col items-center gap-y-4">
                <GeneralButton class="w-5/6 3xl:w-full">{{ $t('pages.index.button.play') }}</GeneralButton>

                <!-- Players Online -->
                <PlayersOnline class="3xl:hidden" />
            </div>
        </div>

        <!-- Logo -->
        <div class="order-1 grid items-start justify-items-center 3xl:order-2">
            <NuxtImg
                src="/logo-centered.webp"
                alt="Logo"
                class="col-start-1 row-start-1 w-full bg-[80%_auto] bg-[center_80%] bg-no-repeat drop-shadow-[0px_2px_100px_hsl(var(--primary))]"
            />
            <NuxtImg
                src="/img/hero-header.webp"
                alt="Hero Image"
                class="col-start-1 row-start-1 w-5/6 translate-y-1/2 transform"
            />
        </div>

        <!-- Players Online -->
        <div class="order-3 hidden items-center 3xl:flex">
            <PlayersOnline />
        </div>
    </div>
</template>
