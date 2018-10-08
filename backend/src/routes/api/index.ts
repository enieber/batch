import { Router } from 'express';
import { getVersion } from '../../controllers/version';
import procedure from '../procedure';

const route = Router();

route.get('/v', getVersion);

route.use('/procedure', procedure);

export default route;
