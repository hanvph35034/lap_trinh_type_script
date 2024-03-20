import Joi from 'joi-browser';
export const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  firstName: Joi.string().min(6),
  lastName: Joi.string().min(10)
});
