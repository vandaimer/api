import { Router } from 'express';

import contacts from './contacts';

const router = Router();

router.use('/contacts', contacts);

export default router;
