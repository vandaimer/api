import queryBuilder from '../config/knex';

export default async function update(table, id, data, transaction) {
  if (!table || !id || !data) {
    throw new Error('Improper update params');
  }

  let updated = queryBuilder(table);

  if (transaction) {
    updated.transacting(transaction);
  }

  updated.update(data).where({ id });

  updated = await updated;

  if (!updated) {
    throw new Error(`Object with given id (${id}) not-found`);
  }

  let query = queryBuilder(table);

  if (transaction) {
    query.transacting(transaction);
  }

  query.where({ id }).first();

  query = await query;

  return query;
}
