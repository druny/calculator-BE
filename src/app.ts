import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import { errors } from 'celebrate';

// import swaggerUi from 'swagger-ui-express';
//
// import swaggerSpec from './api/swagger/swaggerSpec';
// import routes from './api/routes';

import { RootModule } from './modules';

const app = express();

// Middleware
app.use(bodyParser.json({ limit: '50mb' }));
app.use(helmet());
app.use(cors());

// Swagger
// app.get('/', (req, res) => res.redirect('/docs'));
// app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// app.get('/swagger.json', (req, res) => {
//   res.setHeader('Content-Type', 'application/json');
//   res.send(swaggerSpec);
// });

// Modules
app.use(RootModule);

// Request validator error handling middleware
app.use(errors());

// app.use(errorHandler);

export default app;
