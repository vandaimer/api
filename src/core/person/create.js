import { create, createBatch } from '../../queries';
import Validator from './Validator';


export default async function (req, res) {
  const { body } = req;

  const { error } = Validator.post(body);

  if (error) {
    return res.status(400).send({ error });
  }

  const { contacts: durtyContacts, ...person } = body;
	const created = await create('person', person);
  const { id } = created;

  const contacts = durtyContacts.map(contact => ({ ...contact, personId: id }));

  await createBatch('contact', contacts);

  return res.status(201).json({ created });
};
