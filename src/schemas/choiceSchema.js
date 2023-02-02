import Joi from 'joi'

const choiceSchema = Joi.object({
    title: Joi.string().min(1).required(),
    pollId: Joi.string().regex(/^[a-f\d]{24}$/i).required()
})

export default choiceSchema