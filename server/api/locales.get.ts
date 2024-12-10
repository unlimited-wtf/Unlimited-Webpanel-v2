import { getLanguageSchema } from '~~/server/modules/language/language.schema';
import { getLanguageFile } from '~~/server/modules/language/language.controller';
import { sendStream } from 'h3';

const { createValidationError } = useThrowError();

export default defineEventHandler(async (event) => {
    const result = await getValidatedQuery(event, (query) => getLanguageSchema.safeParse(query));

    if (!result.success) {
        throw createValidationError('The query field "language" is required');
    }

    const { language } = result.data;
    const fileStream = getLanguageFile(language);

    if (!fileStream) {
        throw createError({
            statusCode: 404,
            message: `Language file ${language}.json not found`
        });
    }

    return sendStream(event, fileStream);
});
