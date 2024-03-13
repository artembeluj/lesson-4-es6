import Joi from "joi";

export const bookAddSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required()
})

export const bookUpdateSchema = Joi.object({
    title: Joi.string(),
    author: Joi.string()
})