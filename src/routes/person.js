import { Router } from 'express';

import Person from '../core/Person';

const router = Router();
router.delete('/:id([0-9]+)', Person.remove);
router.get('/', Person.list);
router.post('/', Person.create);
router.put('/:id([0-9]+)', Person.update);

export default router;
