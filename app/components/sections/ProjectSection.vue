<template>
    <div class="relative flex flex-col items-center gap-y-20 px-8 pt-20 2xl:items-end 2xl:pb-32">
        <!-- Typography -->
        <div class="flex max-w-xl flex-col items-center 2xl:items-end">
            <!-- Header -->
            <Heading
                :text="$t('pages.index.project.headerNormal')"
                :prominent="$t('pages.index.project.headerColored')"
            />
            <span class="pt-6 text-center text-lg text-foreground/50 2xl:text-right">
                {{ $t('pages.index.project.headerSubtitle') }}
            </span>

            <!-- Text -->
            <div class="mt-16 flex w-full flex-col gap-y-24">
                <div
                    v-for="i in 2"
                    :class="
                        cn(
                            'grid grid-cols-[min-content_auto] grid-rows-[min-content_1fr] items-center gap-x-6 pr-3 text-left [grid-template-areas:\'bar_title\'\'bar_content\'] 2xl:self-start',
                            i % 2 !== 0 &&
                                'grid-cols-[auto_min-content] pl-3 pr-0 text-right [grid-template-areas:\'title_bar\'\'content_bar\'] 2xl:self-end'
                        )
                    "
                >
                    <div class="uppercase [grid-area:title]">{{ $t(`pages.index.project.title-${i}`) }}</div>
                    <div class="inline-block h-full pt-2 align-top leading-8 text-foreground/50 [grid-area:content]">
                        {{ $t(`pages.index.project.text-${i}`) }}
                    </div>
                    <div
                        class="flex justify-center bg-[radial-gradient(50%_50%_at_50%_50%,hsl(var(--primary))_0%,rgba(255,255,255,0)_100%)] bg-clip-text text-xl text-transparent [grid-area:bar] [writing-mode:vertical-rl]"
                    >
                        {{ '/'.repeat(40) }}
                    </div>
                </div>
            </div>
        </div>

        <!-- Biker Image / Circles -->
        <div
            class="w-full max-w-xl -translate-x-[20%] self-start 2xl:absolute 2xl:bottom-0 2xl:left-0 2xl:max-w-3xl 3xl:max-w-5xl"
        >
            <!-- Biker Image -->
            <NuxtImg src="/img/biker.webp" alt="Women on a bike" class="bottom-0 left-0 z-50 2xl:absolute" />

            <!-- Circles -->
            <div
                class="absolute -bottom-[180px] -left-[150px] hidden size-[850px] select-none 2xl:block 3xl:size-[1050px] [&>*]:absolute [&>*]:bottom-0 [&>*]:left-0 [&>*]:h-full [&>*]:w-full"
            >
                <!-- Grey Circles -->
                <div
                    class="max-h-[850px] max-w-[850px] bg-[url('@/assets/icons/big-circle-grey.svg')] bg-cover bg-center bg-no-repeat 3xl:max-h-[1050px] 3xl:max-w-[1050px]"
                >
                    <div
                        class="absolute left-1/2 top-1/2 h-full max-h-[62%] w-full max-w-[62%] -translate-x-1/2 -translate-y-1/2 transform bg-[url('@/assets/icons/big-circle-grey.svg')] bg-cover bg-center bg-no-repeat"
                    />
                </div>

                <!-- White Circle -->
                <BigWhiteCircle
                    class="max-h-[850px] max-w-[850px] animate-spin [animation-duration:_15s] 3xl:max-h-[1050px] 3xl:max-w-[1050px]"
                    :fontControlled="false"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils';
import BigWhiteCircle from '~/assets/icons/big-circle-white.svg';
</script>
