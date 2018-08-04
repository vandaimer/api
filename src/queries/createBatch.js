import queryBuilder from '../config/knex';

export default async function createBatch(table, data, transaction) {
  if (!table || !data) {
    throw new Error('Improper create batch params');
  }

  let createdIds = queryBuilder(table);

  if (transaction) {
    createdIds.transacting(transaction);
  }

  createdIds.insert(data).returning('id');

  createdIds = await createdIds;

  let created = queryBuilder(table);

  if (transaction) {
    created.transacting(transaction);
  }

  created.whereIn('id', createdIds);

  created = await created;

  return created;
}
