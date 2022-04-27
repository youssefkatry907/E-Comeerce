const joi = require('joi');

exports.addPostValidation = {
    body: joi.object().required().keys({
        postDescription: joi.string().empty('').required().messages({
            "string.empty": "you have to enter the postDescription",
            "any.required": "you have to enter the postDescription"
        }),
        postTitle: joi.string().empty('').required().messages({
            "string.empty": "you have to enter the postTitle",
            "any.required": "you have to enter the postTitle"
        }),
     
    })
}

exports.updatePostValidation = {
    body: joi.object().optional().keys({
        postDescription: joi.string().empty('').optional().messages({
            "string.empty": "you have to enter the postDescription",
            "any.required": "you have to enter the postDescription"
        }),
        postTitle: joi.string().empty('').optional().messages({
            "string.empty": "you have to enter the postTitle",
            "any.required": "you have to enter the postTitle"
        }),
    })
}