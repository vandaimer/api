import api from './express/api';
import { runMigrations } from './config/knex';

const port = process.env.PORT || 3000;

runMigrations()
  .then(() => api(port))
  .then(() => {
    // eslint-disable-next-line no-console
    console.info(`Server running. See http://localhost:${port}`);
  })
  .catch(err =>
    // eslint-disable-next-line no-console
    console.error('Unable to start the api:', err),
  );
