import * as http from 'http';
import * as express from 'express';
import { json, urlencoded } from 'body-parser';
import * as helmet from 'helmet';
import { AddressInfo } from 'net';
import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';

import configureCORS from './lib/configureCors';
import normalizePort from './lib/normalizePort';
import router from './routes';
import getConnectionString from './lib/getConnectionString';

//Initialize envs
dotenv.config();

//Connect to DB
mongoose.connect(getConnectionString());

const app = express();
const server = http.createServer(app);

//Add body parsers
app.use(json());
app.use(urlencoded({ extended: true }));

//Add Helmet for more security
app.use(helmet());

//Configure CORS requests
configureCORS(app);

//Configure routes
app.use(router);

//Server Listen
const port = normalizePort();
server.listen(port, () => {
  console.log(
    `Server listening on ${(server.address() as AddressInfo).address}:${
      (server.address() as AddressInfo).port
    }`,
  );
});
