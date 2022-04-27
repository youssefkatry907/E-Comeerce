const joi = require('joi');

exports.signUpValidation = {
    body: joi.object().required().keys({
        email: joi.string().empty('').email({ minDomainSegments: 2 }).empty('').required().messages({
            "string.email": "Please enter a valid email",
            "string.empty": "You have to enter email",
            "any.required": "You have to enter email"
        }),
        userName: joi.string().alphanum().min(4).max(25).required().messages({
            "string.empty": "You have to enter username",
            'string.min': "Username should have a minimum length of 4",
            'string.max': "Username should have a maximuim length of 25",
            "any.required": "You have to enter username"
        }),
        password: joi.string().pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)).required().messages({
            "string.empty": "You have to enter password",
            "string.pattern.base": "Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one special character and one number",
            "any.required": "You have to enter password"
        }),
        age: joi.number().min(7).max(100).required().messages({
            "number.base": "please enter a valid age",
            "number.max": "your age must be between 7 and 100",
            "number.min": "your age must be between 7 and 100",
            "any.required": "You have to enter your age"
        }),
        nationalID: joi.number().min(1e13).max(1e14-1).required().messages({
            "number.base": "please enter a valid national ID",
            "number.max": "your national ID must consist of 14 numbers",
            "number.min": "your national ID must consist of 14 numbers",
            "any.required": "You have to enter your national ID"
        })
    })
}


exports.logInValidation = {
    body: joi.object().required().keys({
        email: joi.string().empty('').email({ minDomainSegments: 2 }).empty('').required().messages({
            "string.email": "Please enter a valid email",
            "string.empty": "You have to enter email",
            "any.required": "You have to enter email"
        }),
        password: joi.string().pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)).required().messages({
            "string.empty": "You have to enter password",
            "string.pattern.base": "Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one special character and one number",
            "any.required": "You have to enter password"
        }),
    })
}

exports.adminSignUpValidation = {
    body: joi.object().required().keys({
        email: joi.string().empty('').email({ minDomainSegments: 2 }).empty('').required().messages({
            "string.email": "Please enter a valid email",
            "string.empty": "You have to enter email",
            "any.required": "You have to enter email"
        }),
        userName: joi.string().alphanum().min(4).max(25).required().messages({
            "string.empty": "You have to enter username",
            'string.min': "Username should have a minimum length of 4",
            'string.max': "Username should have a maximuim length of 25",
            "any.required": "You have to enter username"
        }),
        password: joi.string().pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)).required().messages({
            "string.empty": "You have to enter password",
            "string.pattern.base": "Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one special character and one number",
            "any.required": "You have to enter password"
        }),
        age: joi.number().min(7).max(100).required().messages({
            "number.base": "please enter a valid age",
            "number.max": "your age must be between 7 and 100",
            "number.min": "your age must be between 7 and 100",
            "any.required": "You have to enter your age"
        }),
        nationalID: joi.number().min(1e13).max(1e14-1).required().messages({
            "number.base": "please enter a valid national ID",
            "number.max": "your national ID must consist of 14 numbers",
            "number.min": "your national ID must consist of 14 numbers",
            "any.required": "You have to enter your national ID"
        }),
        role: joi.string().required().messages({
            "string.empty": "You have to enter password",
            "any.required": "You have to enter password"
        })
    })
}