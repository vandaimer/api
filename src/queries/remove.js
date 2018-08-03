import queryBuilder from '../config/knex';

export default async function remove(table, id, where, transaction) {
  if (!table || !id) {
    throw new Error('Improper remove params');
  }

  let query = queryBuilder(table);

  if (transaction) {
    query.transacting(transaction);
  }

  query.where({ id, ...where }).del();

  query = await query;

  if (!query) {
    throw new Error(`Object remove (${id}) not-found`);
  }

  return query;
}
