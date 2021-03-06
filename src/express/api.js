import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import healthCheck from './healthCheck';
import notImplemented from './notImplemented';
import routes from '../routes';

export default function api(port) {
  return new Promise((resolve, reject) => {
    function callback(err) {
      if (err) {
        return reject(err);
      }

      return resolve();
    }

    const server = express();

    server.enable('trust proxy');

    server.use(helmet());
    server.use(bodyParser.json());

    server.use(cors());
    server.use(morgan('combined'));
    server.use('/healthz', healthCheck);
    server.use('/api', routes);
    server.all('*', notImplemented);
    server.listen(port, callback);
  });
}
