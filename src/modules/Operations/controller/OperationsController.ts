import type { Request, Response } from 'express';

import { OperationsInteractor } from '../interactor';

export interface OperationsControllerInterface {
  plus: object;
  minus: object;
  multiply: object;
  divide: object;
}

const operationsInteractor = new OperationsInteractor();

export class OperationsController implements OperationsControllerInterface {
  async plus({ body }: Request, res: Response) {
    const { leftNumber, rightNumber } = body;

    const result = await operationsInteractor.plus(leftNumber, rightNumber);

    res.json({ result });
  }

  async minus({ body }: Request, res: Response) {
    const { leftNumber, rightNumber } = body;

    const result = await operationsInteractor.minus(leftNumber, rightNumber);

    res.json({ result });
  }

  async multiply({ body }: Request, res: Response) {
    const { leftNumber, rightNumber } = body;

    const result = await operationsInteractor.multiply(leftNumber, rightNumber);

    res.json({ result });
  }

  async divide({ body }: Request, res: Response) {
    const { leftNumber, rightNumber } = body;

    const result = await operationsInteractor.divide(leftNumber, rightNumber);

    res.json({ result });
  }
}
