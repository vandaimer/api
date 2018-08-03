import { Router } from 'express';

import list from './list';

const router = Router();

router.get('/contacts/', list);

export default router;
