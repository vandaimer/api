import { update } from '../../queries';
import Validator from './Validator';


export default async function (req, res) {
  const { body, params: { id } } = req;

  const { error } = Validator.put(body);

  if (error) {
    return res.status(400).send({ error });
  }

	const updated = await update('person', id, body);

  return res.status(201).json({ updated });
};
