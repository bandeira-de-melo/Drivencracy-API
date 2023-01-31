import Joi from "joi";

export const pollPostSchema = Joi.object({
    title: Joi.string().min(6).required(),
    expireAt: Joi.date().format('YYYY-MM-DD HH:mm')
})