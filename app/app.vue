<template>
    <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>

    <NuxtLoadingIndicator />

    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>

    <ClientOnly>
        <Toaster />
    </ClientOnly>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig();
const { onResize } = useNavbar();

useHead({
    title: appConfig.titlePrefix
});

useWindowEventListener('resize', onResize);
</script>
