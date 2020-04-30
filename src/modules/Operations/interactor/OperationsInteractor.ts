import { Operations } from '@/services/Operations';

import { ADDITION, SUBTRACTION, MULTIPLICATION, DIVISION } from '@/constants';

import { OperationsHistoryRepository } from '../repositories';

export interface IOperationsInteractor {
  plus: object;
  minus: object;
  multiply: object;
  divide: object;
}

const operations = new Operations();
const operationsHistoryRepository = new OperationsHistoryRepository();

export class OperationsInteractor implements IOperationsInteractor {
  async plus(leftNumber: number, rightNumber: number): Promise<number> {
    const result = operations.addition(leftNumber, rightNumber);

    await operationsHistoryRepository.create({
      leftNumber,
      rightNumber,
      operation: ADDITION,
    });

    return result;
  }

  async minus(leftNumber: number, rightNumber: number): Promise<number> {
    const result = operations.subtraction(leftNumber, rightNumber);

    await operationsHistoryRepository.create({
      leftNumber,
      rightNumber,
      operation: SUBTRACTION,
    });

    return result;
  }

  async multiply(leftNumber: number, rightNumber: number): Promise<number> {
    const result = operations.multiplication(leftNumber, rightNumber);

    await operationsHistoryRepository.create({
      leftNumber,
      rightNumber,
      operation: MULTIPLICATION,
    });

    return result;
  }

  async divide(leftNumber: number, rightNumber: number): Promise<number> {
    const result = operations.division(leftNumber, rightNumber);

    await operationsHistoryRepository.create({
      leftNumber,
      rightNumber,
      operation: DIVISION,
    });

    return result;
  }
}
