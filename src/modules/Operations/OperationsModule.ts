import express from 'express';

import { OperationsRouter, OperationsHistoryRouter } from './router';

const operationsModule = express();

operationsModule.use(OperationsRouter);
operationsModule.use(OperationsHistoryRouter);

export default operationsModule;
