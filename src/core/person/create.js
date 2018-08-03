import { create } from '../../queries';
import Validator from './Validator';


export default async function (req, res) {
  const { body } = req;

  const { error } = Validator.post(body);

  if (error) {
    return res.status(400).send({ error });
  }

	const created = await create('person', body);

  return res.status(201).json({ created });
};
