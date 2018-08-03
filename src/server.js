import api from './express/api';

const port = process.env.PORT || 3000;

api(port)
 .then(() => {
  // eslint-disable-next-line no-console
  console.info(`Server running. See http://localhost:${port}`);
})
 .catch(err =>
  // eslint-disable-next-line no-console
  console.error('Unable to start the api:', err),
);
