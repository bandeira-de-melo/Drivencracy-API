import DateExtension from '@joi/date';
import JoiImport from 'joi';

const Joi = JoiImport.extend(DateExtension) ;

export const pollPostSchema = Joi.object({
    title: Joi.string().min(6).required(),
    expireAt: Joi.date().format('YYYY-MM-DD HH:mm')
})