import Joi from 'joi';

export const movieAddSchema = Joi.object({
  title: Joi.string().required(),
  director: Joi.string().required(),
  favorite: Joi.boolean(),
  type: Joi.string().valid('film', 'serial').required(),
});
