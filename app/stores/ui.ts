export const useUIStore = defineStore('ui', () => {
    const { t } = useI18n();

    /* States */
    const sections = ref<Record<string, string>>({
        hero: t('pages.index.sections.hero'),
        project: t('pages.index.sections.project'),
        features: t('pages.index.sections.features'),
        whitelist: t('pages.index.sections.whitelist'),
        faq: t('pages.index.sections.faq')
    });

    const navbarHeight = ref<number>(0);
    const showMobileNavbar = ref<boolean>(false);
    const isScrolled = ref<boolean>(false);
    const activeSection = ref<string>('hero');
    const delay = ref<NodeJS.Timeout>();

    /* Setter */
    const setNavbarHeight = (value: number) => (navbarHeight.value = value);
    const setShowMobileNavbar = (value: boolean) => (showMobileNavbar.value = value);
    const setIsScrolled = (value: boolean) => (isScrolled.value = value);
    const setActiveSection = (value: string) => (activeSection.value = value);
    const setDelay = (value: NodeJS.Timeout) => (delay.value = value);

    return {
        navbarHeight,
        sections,
        showMobileNavbar,
        isScrolled,
        activeSection,
        delay,

        setNavbarHeight,
        setShowMobileNavbar,
        setIsScrolled,
        setActiveSection,
        setDelay
    };
});
