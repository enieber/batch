import { Router } from 'express';
import { getAll, add, edit, changePosition } from '../controllers/procedure';

const procedure = Router();

procedure.get('/', getAll);

procedure.post('/', add);

//Specific Routes
procedure.put('/:id', edit);
procedure.post('/:id/position', changePosition);

export default procedure;
