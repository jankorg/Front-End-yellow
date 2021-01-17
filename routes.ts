import { Router } from 'express';
import apiRouter from './ApiRouter';

const routes = Router();

routes.use('/api', apiRouter);

export default routes;