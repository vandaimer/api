import { Router } from 'express';

import Person from '../core/Person';

const router = Router();

router.delete('/:id([0-9]+)', async (req, res) => {
  try {
    await Person.remove(req);
    return res.status(204).json();
  } catch ({ message }) {
    return res.status(400).json({ message });
  }
});

router.post('/', async (req, res) => {
  try {
    const created = await Person.create(req);
    return res.status(200).json(created);
  } catch ({ message }) {
    return res.status(400).json({ message });
  }
});

router.get('/', async (req, res) => {
  try {
    const items = await Person.list();
    return res.status(200).json({ items });
  } catch (error) {
    return res.status(400).send();
  }
});

router.put('/:id([0-9]+)', async (req, res) => {
  try {
    const updated = await Person.update(req);
    return res.status(200).json(updated);
  } catch ({ message }) {
    return res.status(400).json({ message });
  }
});

export default router;
