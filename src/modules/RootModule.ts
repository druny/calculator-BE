import express from 'express';

import { OperationsModule } from './Operations';

export default express().use('/operations', OperationsModule);
