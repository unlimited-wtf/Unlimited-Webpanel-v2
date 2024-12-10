export default defineI18nLocale((locale) => {
    return $fetch(`/api/locales?language=${locale}`);
});
