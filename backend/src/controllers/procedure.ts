import { Request, Response } from 'express';
import * as Boom from 'boom';
import * as _ from 'lodash';
import Procedure from '../models/Procedure';

/**
 * Get all procedures
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 */
export async function getAll(req: Request, res: Response) {
  const procedures = await Procedure.Model.find();
  res.send(procedures);
}

/**
 * Add new procedure to DB
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @returns
 */
export async function add(req: Request, res: Response) {
  const data = req.body;

  if (_.isEmpty(data)) {
    const boom = Boom.badRequest('The body is empty');
    res.status(boom.output.statusCode);
    return res.send(boom.output);
  }

  if (!data.name || !data.description || !data.position) {
    const boom = Boom.badRequest('Missing arguments');
    res.status(boom.output.statusCode);
    return res.send(boom.output);
  }

  const Model = Procedure.Model;
  const procedure = new Model({
    name: data.name,
    description: data.description,
    position: data.position,
  });

  const response = await procedure.save();

  res.send(response);
}
