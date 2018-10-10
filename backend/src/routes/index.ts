import * as express from 'express';
import * as path from 'path';

import api from './api';

const router = express.Router();

//Api routes
router.use('/api', api);

//Static File, should be server for last.
router.use(
  '/',
  express.static(path.join(path.resolve(__dirname), '../../static')),
);

export default router;
