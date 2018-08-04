import Contact from './Contact';
import { PersonValidator } from '../validators';
import { update, list, remove, create } from '../queries';

class Person {
  static tableName = 'person';

  static async create(req) {
    const { body } = req;

    const { error, value } = PersonValidator.post(body);

    if (error) {
      throw new Error(error);
    }

    const { contacts, ...person } = value;
    const created = await create(Person.tableName, person);
    const { id } = created;

    await Contact.saveBatch(id, contacts);

    return { created };
  }

  static async list() {
    let persons = await list(Person.tableName, {});

    persons = persons.map(async person => {
      const { id } = person;
      const contacts = await Contact.listByPersonId(id);
      return { ...person, contacts };
    });

    persons = await Promise.all(persons);

    return persons;
  }

  static async remove(req) {
    const {
      params: { id },
    } = req;

    await Contact.removeByPersonId(id);

    await remove(Person.tableName, id);
  }

  static async update(req, res) {
    const {
      body,
      params: { id },
    } = req;

    const { error } = PersonValidator.put(body);

    if (error) {
      return res.status(400).json({ error });
    }

    const updated = await update(Person.tableName, id, body);

    return res.status(201).json({ updated });
  }
}

export default Person;
