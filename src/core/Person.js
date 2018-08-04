import { PersonValidator } from '../validators';
import { update, list, remove, create, createBatch } from '../queries';

class Person {

  static async create(req, res) {
    const { body } = req;

    const { error } = PersonValidator.post(body);

    if (error) {
      return res.status(400).send({ error });
    }

    const { contacts: durtyContacts, ...person } = body;
    const created = await create('person', person);
    const { id } = created;

    const contacts = durtyContacts.map(contact => ({ ...contact, personId: id }));

    await createBatch('contact', contacts);

    return res.status(201).json({ created });
  }

  static async list(req, res) {
    let persons = await list('person', {});

    persons = persons.map(async person => {
      const { id } = person;
      const contacts = await list('contact', { personId: id });
      return { ...person, contacts };
    });

    persons = await Promise.all(persons);

    return res.json({ persons });
  }

  static async remove(req, res) {
    const { params: { id } } = req;

    await remove('person', id);

    return res.status(204).json();
  }

  static async update(req, res) {
    const { body, params: { id } } = req;

    const { error } = PersonValidator.put(body);

    if (error) {
      return res.status(400).send({ error });
    }

    const updated = await update('person', id, body);

    return res.status(201).json({ updated });
  }
}

export default Person;
