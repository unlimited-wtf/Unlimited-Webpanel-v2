import { z } from 'zod';

export const getLanguageSchema = z.object({
    language: z.string({
        required_error: 'errors.required'
    })
});
