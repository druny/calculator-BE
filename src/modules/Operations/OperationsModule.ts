import express from 'express';

import router from './router';

const operationsModule = express();

operationsModule.use(router);

export default operationsModule;
