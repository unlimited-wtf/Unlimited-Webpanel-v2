import type { H3Event } from 'h3';

export default defineI18nLocaleDetector((event: H3Event, config) => {
    const cookie = tryCookieLocale(event, { lang: 'en', name: 'i18n_locale' });

    // If the browser language is detected by cookie, return the detected locale
    if (cookie) {
        return cookie.toString();
    }

    // If the browser language is not detected, return the default locale
    return config.defaultLocale;
});
