import queryBuilder from '../config/knex';

export default async function create(table, data, transaction) {
  if (!table || !data) {
    throw new Error('Improper create batch params');
  }

  const query = queryBuilder(table);

  if (transaction) {
    query.transacting(transaction);
  }

  query.insert(data).returning('id');

  const [id] = await query;

  let created = queryBuilder(table);

  if (transaction) {
    created.transacting(transaction);
  }

  created.where({ id }).first();

  created = await created;

  return created;
}
