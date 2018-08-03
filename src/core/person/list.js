import { list } from '../../queries';

export default async function (req, res) {
  const persons = await list('person', {});
  return res.json({ persons });
};
