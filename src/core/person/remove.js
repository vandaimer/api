import { remove } from '../../queries';


export default async function (req, res) {
  const { params: { id } } = req;

	await remove('person', id);

  return res.status(204).json();
};
