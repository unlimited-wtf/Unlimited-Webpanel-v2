import { readdirSync, copyFileSync, existsSync, mkdirSync } from 'node:fs';

export default defineNuxtConfig({
    devtools: { enabled: true },
    future: {
        compatibilityVersion: 4
    },
    compatibilityDate: '2024-10-01',
    modules: [
        '@nuxtjs/tailwindcss',
        'shadcn-nuxt',
        '@nuxtjs/i18n',
        'nuxt-zod-i18n',
        '@pinia/nuxt',
        '@nuxt/image',
        'nuxt-typed-router',
        'nuxt3-leaflet',
        '@nuxt/fonts',
        'nuxt-svgo'
    ],

    runtimeConfig: {},
    components: [
        {
            path: '~/components',
            pathPrefix: false
        }
    ],

    i18n: {
        lazy: true,
        experimental: {
            localeDetector: 'i18n/localeDetector.ts'
        },
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_locale',
            redirectOn: 'root'
        },
        strategy: 'no_prefix',
        defaultLocale: 'en',
        locales: [
            {
                code: 'de',
                language: 'de-DE',
                name: 'Deutsch',
                file: 'fetch.ts'
            },
            {
                code: 'en',
                language: 'en-US',
                name: 'English',
                file: 'fetch.ts'
            }
        ],
        langDir: 'locales/'
    },

    hooks: {
        'nitro:build:public-assets': async (builder) => {
            // Check if the dist folder exists
            if (!existsSync(`${builder.options.output.serverDir}/i18n/locales`)) {
                // Create the folder if it does not exist
                mkdirSync(`${builder.options.output.serverDir}/i18n/locales`, { recursive: true });
            }

            // Read all files in the i18n/locales directory
            const files = readdirSync('./i18n/locales');

            files.forEach((file) => {
                // Skip if the file is not a JSON file
                if (!file.endsWith('.json')) {
                    return;
                }

                // Copy the file to the dist/i18n/locales directory
                copyFileSync(`./i18n/locales/${file}`, `${builder.options.output.serverDir}/i18n/locales/${file}`);
            });
        }
    },

    svgo: {
        autoImportPath: false
    },

    fonts: {
        families: [{ name: 'DrukCyr', provider: 'local', src: '/fonts/DrukCyr-Medium.ttf', weight: 'medium' }]
    },

    shadcn: {
        prefix: '',
        componentDir: './app/components/ui'
    },

    tailwindcss: {
        exposeConfig: {
            level: 4
        }
    }
});
