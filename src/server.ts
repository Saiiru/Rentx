/* eslint-disable no-console */
import express from 'express';
import swaggerUi from 'swagger-ui-express'

import {router} from './routes';
import swaggerFile from './swagger.json'

const app = express();
app.use(express.json());

app.use(router);

app.listen(3000, () => console.log('Server is running'));
