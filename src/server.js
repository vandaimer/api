import api from './express/api';

const port = process.env.PORT || 3000;

api(port)
.then(() => {
  console.info(`Server running. See http://localhost:${port}`);
})
.catch(err =>
  console.error('Unable to start the api:', err),
);
