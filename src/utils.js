
export const nameValidation = (title) => {
    return {
        required: { value: true, message: `${title} is required` },
        maxLength: { value: 20, message: `${title} should not be more than 10 characteres` },
        minLength: { value: 3, message: `${title} should be more than 3 characteres` }
    }
}

export const mobileValidation = (title) => {
    return {
        required: { value: true, message: `${title} is required` },
        maxLength: { value: 11, message: `${title} should not be more than 11 number` },
        minLength: { value: 10, message: `${title} shoulds be more than 10 number` }
    }
}

export const passwordValidation = (title) => {
    return {
        required: { value: true, message: `${title} is required` },
        maxLength: { value: 9, message: `${title} should not be more than 8 characteres` },
        minLength: { value: 4, message: `${title} should be more than 4 characteres` },
        pattern: { value: "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" }
    }
}


export const emailValidation = (title) => {
    return {
        required: { value: true, message: `${title} is required` },
        // message :'email is not valid',
        pattern: { value: new RegExp(/\S+@\S+.\S+/i) },
        message: { value: true, message: `${title} email is not valid` }

    }
}



















