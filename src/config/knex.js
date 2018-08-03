import knex from 'knex';
import config from './knexConfig';

const connection = knex(config);


export default connection;
