import { Router } from 'express';

import create from './create';
import list from './list';
import remove from './remove';
import update from './update';

const router = Router();

router.delete('/:id([0-9]+)', remove);
router.get('/', list);
router.post('/', create);
router.put('/:id([0-9]+)', update);

export default router;
