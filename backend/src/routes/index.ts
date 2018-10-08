import * as express from 'express';
import * as path from 'path';

const router = express.Router();

//Static File, should be server for last.
router.use(
  '/',
  express.static(path.join(path.resolve(__dirname), '../../static')),
);

export default router;
