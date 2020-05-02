import { Router } from 'express';

import { OperationsHistoryController } from '../controller';

const { getAll } = new OperationsHistoryController();

export default Router().get('/history', getAll);
