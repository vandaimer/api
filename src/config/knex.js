import knex from 'knex';
import config from './knexConfig';

const connection = knex(config);

export async function runMigrations() {
  try {
    await connection.migrate.latest();
  } catch (error) {
    connection.destroy();
    throw error;
  }
}

export default connection;
