import type { Request, Response } from 'express';

export interface IOperationsHistoryController {
  getAll: object;
}

import { OperationsHistoryRepository } from '../repositories';

const operationsHistoryRepository = new OperationsHistoryRepository();

export class OperationsHistoryController implements IOperationsHistoryController {
  async getAll(req: Request, res: Response) {
    const operations = await operationsHistoryRepository.getAll();

    res.json(operations);
  }
}
