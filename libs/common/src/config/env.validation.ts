import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),
  PORT: Joi.number().default(3000),
  DATABASE_URL: Joi.string().required(),
  USER_SERVICE_URL: Joi.string().optional(),
  ORDER_SERVICE_URL: Joi.string().optional(),
  PRODUCT_SERVICE_URL: Joi.string().optional(),
});
