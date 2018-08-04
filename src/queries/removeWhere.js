import queryBuilder from '../config/knex';

export default async function removeWhere(table, where, transaction) {
  if (!table || !where) {
    throw new Error('Improper remove params');
  }

  let query = queryBuilder(table);

  if (transaction) {
    query.transacting(transaction);
  }

  query.where({ ...where }).del();

  query = await query;

  if (!query) {
    throw new Error(`Object remove where (${where}) not-found`);
  }

  return query;
}
