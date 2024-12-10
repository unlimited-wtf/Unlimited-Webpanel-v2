import { join } from 'node:path';
import { existsSync, createReadStream } from 'node:fs';

// The base path for the language files.
const baseLngPath = join(process.cwd(), process.env.NODE_ENV === 'production' ? 'server' : '', 'i18n/locales');

/**
 * Retrieves a language file as a readable stream.
 *
 * @param language - The language code for the desired language file.
 * @returns A readable stream of the language file if it exists, otherwise `null`.
 */
export const getLanguageFile = (language: string) => {
    const lngPath = join(baseLngPath, `${language}.json`);
    const exist = existsSync(lngPath);

    if (!exist) {
        return null;
    }

    return createReadStream(lngPath);
};
