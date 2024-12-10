export const useThrowError = () => {
    /**
     * Creates a validation error with a specified message.
     *
     * @param msg - The message to be included in the validation error.
     * @returns An error object with a status code of 409 and the provided message.
     */
    const createValidationError = (msg: string) => {
        return createError({
            statusCode: 409,
            message: msg
        });
    };

    return {
        createValidationError
    };
};
