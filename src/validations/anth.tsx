import Joi from 'joi-browser';
export const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  firstName: Joi.string().min(6),
  lastName: Joi.string().min(10),
});
export const productVali = Joi.object({
  title: Joi.string().min(5),
  price: Joi.string().min(5),
  stock: Joi.string().min(5),
  description: Joi.string().min(5),
  image: Joi.string().min(5)
});

