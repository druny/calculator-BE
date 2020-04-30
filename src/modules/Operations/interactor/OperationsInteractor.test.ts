import { Operations } from '@/services/Operations';

import { OperationsInteractor } from './OperationsInteractor';
import { OperationsHistoryRepository } from '../repositories';

jest.mock('@/services/Operations');
jest.mock('../repositories');

const operationsInteractor = new OperationsInteractor();

describe('OperationsInteractor', () => {
  describe('plus', () => {
    it('Success', async () => {
      expect.hasAssertions();

      await operationsInteractor.plus(1, 2);

      expect(Operations.prototype.addition).toHaveBeenCalledTimes(1);
      expect(OperationsHistoryRepository.prototype.create).toHaveBeenCalledTimes(1);
    });
  });
  describe('minus', () => {
    it('Success', async () => {
      expect.hasAssertions();

      await operationsInteractor.minus(1, 2);

      expect(Operations.prototype.subtraction).toHaveBeenCalledTimes(1);
      expect(OperationsHistoryRepository.prototype.create).toHaveBeenCalledTimes(1);
    });
  });
  describe('multiply', () => {
    it('Success', async () => {
      expect.hasAssertions();

      await operationsInteractor.multiply(1, 2);

      expect(Operations.prototype.multiplication).toHaveBeenCalledTimes(1);
      expect(OperationsHistoryRepository.prototype.create).toHaveBeenCalledTimes(1);
    });
  });
  describe('divide', () => {
    it('Success', async () => {
      expect.hasAssertions();

      await operationsInteractor.divide(1, 2);

      expect(Operations.prototype.division).toHaveBeenCalledTimes(1);
      expect(OperationsHistoryRepository.prototype.create).toHaveBeenCalledTimes(1);
    });
  });
});
