import { Router } from 'express';
import { getAll, add } from '../controllers/procedure';

const procedure = Router();

procedure.get('/', getAll);

procedure.post('/', add);

export default procedure;
