import Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().min(3).required(),
    price: Joi.number().min(0).required(),
    year: Joi.number().min(1900).required(),
});
