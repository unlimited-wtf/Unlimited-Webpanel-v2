import screens from '#tailwind-config/theme/screens';

const closeSize = Number(screens.lg.replace('px', ''));

export const useNavbar = () => {
    const uiStore = useUIStore();

    /**
     * Handles the resize event and closes the mobile navbar if the screen size is greater than the close size.
     */
    const onResize = () => {
        const navbarHeight = getComputedStyle(document?.querySelector('.navbar') as HTMLElement).height ?? 0;
        uiStore.setNavbarHeight(Number(navbarHeight.replace('px', '')));

        const width = window?.innerWidth;

        if (!uiStore.showMobileNavbar || width < closeSize) return;

        uiStore.setShowMobileNavbar(false);
    };

    /**
     * Handles the scroll event, check if header is overflown and calls the handleScroll function with a delay.
     */
    const onScroll = () => {
        uiStore.setIsScrolled(window?.scrollY > 0);

        if (uiStore.delay) {
            clearTimeout(uiStore.delay);
        }

        const timeout = setTimeout(handleScroll, 100);
        uiStore.setDelay(timeout);
    };

    /**
     * Handles the scroll event and sets the active section based on the scroll position.
     */
    const handleScroll = () => {
        const children = document?.querySelector('.sections')?.children ?? [];
        let minor = window?.innerHeight;

        let active: HTMLElement | null = null;

        [].forEach.call(children, (child: HTMLElement) => {
            const { top } = child.getBoundingClientRect();

            if (Math.abs(top) < minor) {
                minor = Math.abs(top);

                active = child;
            }
        });

        if (!active) return;

        uiStore.setActiveSection((active as HTMLElement).dataset.name || 'hero');
    };

    /**
     * Scrolls the window to the specified section on the page.
     * @param section - The name of the section to scroll to.
     */
    const toSection = (name: string) => {
        const element = document?.querySelector(`[data-name="${name}"]`);
        if (!element) return;

        const y = element.getBoundingClientRect().top + window.scrollY - uiStore.navbarHeight;

        window.scrollTo({ top: y, behavior: 'smooth' });
        uiStore.setActiveSection(name);
    };

    return {
        onResize,
        onScroll,
        toSection
    };
};
