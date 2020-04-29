import type { Request, Response } from 'express';

import { Operations } from '@/services/Operations';

export interface OperationsControllerInterface {
  plus: object;
  minus: object;
  multiply: object;
  divide: object;
}

const operations = new Operations();

export class OperationsController implements OperationsControllerInterface {
  plus({ body }: Request, res: Response) {
    const { leftNumber, rightNumber } = body;

    const result = operations.addition(leftNumber, rightNumber);

    res.json({ result });
  }

  minus({ body }: Request, res: Response) {
    const { leftNumber, rightNumber } = body;

    const result = operations.subtraction(leftNumber, rightNumber);

    res.json({ result });
  }

  multiply({ body }: Request, res: Response) {
    const { leftNumber, rightNumber } = body;

    const result = operations.multiplication(leftNumber, rightNumber);

    res.json({ result });
  }

  divide({ body }: Request, res: Response) {
    const { leftNumber, rightNumber } = body;

    const result = operations.division(leftNumber, rightNumber);

    res.json({ result });
  }
}
