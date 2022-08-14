import 'express-async-errors';
import express from 'express';
import { routes } from './routes';
import { middlewares } from './middleware';

const app = express();

app.use(express.json());

app.use(routes);

app.use(middlewares);

export default app;
