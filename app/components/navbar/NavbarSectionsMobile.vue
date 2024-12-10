<template>
    <ClientOnly>
        <div class="grid justify-end lg:hidden">
            <Sheet :open="uiStore.showMobileNavbar" @update:open="uiStore.setShowMobileNavbar($event)">
                <DialogTrigger>
                    <NavbarSectionsMobileTrigger />
                </DialogTrigger>

                <DialogPortal>
                    <DialogOverlay
                        class="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
                    />
                    <DialogContent
                        :class="
                            cn(sheetVariants({ side }), props.class, 'w-full bg-secondary px-0 py-4 sm:max-w-[100vw]')
                        "
                        v-bind="{ ...forwarded, ...$attrs }"
                    >
                        <DialogTitle class="flex justify-end px-6">
                            <DialogClose>
                                <NavbarSectionsMobileTrigger />
                            </DialogClose>
                        </DialogTitle>

                        <ScrollArea class="h-full">
                            <ul class="flex h-full flex-col items-center justify-center gap-4 pt-4">
                                <NavbarSectionsMobileLink
                                    v-for="(label, name) in uiStore.sections"
                                    :key="name"
                                    :label="label"
                                    :name="name"
                                />

                                <li class="pointer-events-none">
                                    <NuxtImg
                                        src="/img/human-with-car.webp"
                                        alt="Guy with a car"
                                        class="w-[200%] max-w-[800px]"
                                    />
                                </li>
                            </ul>
                        </ScrollArea>
                    </DialogContent>
                </DialogPortal>
            </Sheet>
        </div>
    </ClientOnly>
</template>

<script setup lang="ts">
import {
    DialogPortal,
    DialogOverlay,
    DialogContent,
    DialogClose,
    DialogTrigger,
    DialogTitle,
    useForwardPropsEmits,
    type DialogContentEmits,
    type DialogContentProps
} from 'radix-vue';
import { type HTMLAttributes } from 'vue';
import { type SheetVariants, sheetVariants } from '~/components/ui/sheet';
import { cn } from '~/lib/utils';
const uiStore = useUIStore();

interface SheetContentProps extends DialogContentProps {
    class?: HTMLAttributes['class'];
    side?: SheetVariants['side'];
}

const props = defineProps<SheetContentProps>();

const emits = defineEmits<DialogContentEmits>();

const delegatedProps = computed(() => {
    const { class: _, side, ...delegated } = props;

    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>
