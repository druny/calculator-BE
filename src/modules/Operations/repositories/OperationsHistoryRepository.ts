import { DocumentQuery } from 'mongoose';
import { IOperationsHistory, OperationsHistoryModel } from '../models';

export interface IOperationsHistoryRepository {
  getAll: object;
  create: object;
}
export type CreateType = {
  leftNumber: number;
  rightNumber: number;
  operation: string;
};

export class OperationsHistoryRepository implements IOperationsHistoryRepository {
  getAll(): DocumentQuery<IOperationsHistory[], IOperationsHistory> {
    return OperationsHistoryModel.find({});
  }

  create({ leftNumber, rightNumber, operation }: CreateType): Promise<IOperationsHistory> {
    console.log(operation);
    return OperationsHistoryModel.create({ leftNumber, rightNumber, operation });
  }
}
