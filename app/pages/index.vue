<template>
    <div class="sections">
        <!-- Hero Section -->
        <HeroSection class="container max-w-screen-3xl" />

        <!-- Project Section -->
        <div class="backdrop-brightness-[60%]" data-name="project">
            <ProjectSection class="container max-w-screen-3xl" />
        </div>

        <!-- Features Section -->
        <div class="relative bg-background" data-name="features">
            <FeaturesSection class="container max-w-screen-3xl" />
        </div>
    </div>
</template>

<script lang="ts" setup>
const { t } = useI18n();
const { onScroll } = useNavbar();
const appConfig = useAppConfig();

useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} | ${t('app.title')}` : t('app.title');
    }
});

useSeoMeta({
    ogTitle: appConfig.titlePrefix || t('app.title'),
    description: t('pages.index.og.subtitle'),
    ogDescription: t('pages.index.og.subtitle'),
    ogImage: '/logo.png',
    twitterCard: 'summary_large_image'
});

useWindowEventListener('scroll', onScroll);
</script>
