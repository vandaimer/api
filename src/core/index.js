import { Router } from 'express';

import contacts from './contacts';
import person from './person';

const router = Router();

router.use('/contacts', contacts);
router.use('/person', person);

export default router;
