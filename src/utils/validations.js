export const validateField = (field, fieldValue) => {
    const fieldErrors = [];

    const emailRegExp =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const alphaRegExp = /^.*[a-zA-Z]+.*$/;
    const numbersRegExp = /^.*[0-9]+.*$/;

    if (field.validations instanceof Object) {
        for (const [key, value] of Object.entries(field.validations)) {
            // MinLength checks
            if (key === "minLength" && fieldValue.length < value) {
                fieldErrors.push(`Min length should be ${value}`);
            }

            // MaxLength checks
            if (key === "maxLength" && fieldValue.length > value) {
                fieldErrors.push(`Max length should be ${value}`);
            }

            // Email checks
            if (key === "email" && !emailRegExp.test(fieldValue)) {
                fieldErrors.push(`Invalid email address`);
            }

            // Alphabets checks
            if (key === "alpha" && !alphaRegExp.test(fieldValue)) {
                fieldErrors.push(`Must contain alphabets`);
            }

            // Numbers check
            if (key === "numbers" && !numbersRegExp.test(fieldValue)) {
                fieldErrors.push(`Must contain numbers`);
            }
        }
    }
    return fieldErrors;
};
