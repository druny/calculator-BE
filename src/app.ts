import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import { errors } from 'celebrate';

import { RootModule } from './modules';

import { MongooseConnect } from './services/DB';

const app = express();

// Middleware
app.use(bodyParser.json({ limit: '50mb' }));
app.use(helmet());
app.use(cors());

// Modules
app.use(RootModule);

// Request validator error handling middleware
app.use(errors());

// app.use(errorHandler);

MongooseConnect();

export default app;
