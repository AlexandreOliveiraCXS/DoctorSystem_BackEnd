import {Router} from 'express';
import cors from 'cors';

import patientsRouter from './patients.routes';
import conductsRouter from './conducts.routes';
import anamnesisRouter from './anamnesis.routes';

const routes = Router();

routes.use(cors());
routes.use('/patients', patientsRouter);
routes.use('/anamnesis', anamnesisRouter);
routes.use('/conducts', conductsRouter);
routes.use('/exams', conductsRouter);
routes.use('/ratings', conductsRouter);
routes.use('/recipes', conductsRouter);

export default routes;
