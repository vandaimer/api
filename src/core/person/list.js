import { list } from '../../queries';

export default async function (req, res) {
  let persons = await list('person', {});

  persons = persons.map(async person => {
    const { id } = person;
    const contacts = await list('contact', { personId: id });
    return { ...person, contacts };
  });

  persons = await Promise.all(persons);

  return res.json({ persons });
};
