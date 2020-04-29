import { Joi } from 'celebrate';

const { MAX_SAFE_INTEGER, MIN_SAFE_INTEGER } = Number;

const joiNumber = Joi.number().min(MIN_SAFE_INTEGER).max(MAX_SAFE_INTEGER).required();

export const operationsValidatorSchema = {
  body: {
    leftNumber: joiNumber,
    rightNumber: joiNumber,
  },
};
