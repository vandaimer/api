import queryBuilder from '../config/knex';

export default async function list(table, where, transaction) {
  if (!table || !where) {
    throw new Error('Improper list params');
  }

  let query = queryBuilder(table);

  if (transaction) {
    query.transacting(transaction);
  }

  query.where(where);

  query = await query;

  return query;
}
