import { Router } from 'express';
import { celebrate } from 'celebrate';

import { OperationsController } from '../controller';
import { operationsValidatorSchema } from './validatorsSchema';

const { plus, minus, multiply, divide } = new OperationsController();

const operationsValidator = celebrate(operationsValidatorSchema);

export default Router()
  .post('/plus', operationsValidator, plus)
  .post('/minus', operationsValidator, minus)
  .post('/multiply', operationsValidator, multiply)
  .post('/divide', operationsValidator, divide);
