import { Router } from 'express';

import person from './person';

const router = Router();

router.use('/person', person);

export default router;
