import { Request, Response } from 'express';
import * as Boom from 'boom';
import * as _ from 'lodash';
import Procedure from '../models/Procedure';
import sendBoom from '../lib/sendBoom';
import returnHighest from '../lib/returnHighest';

/**
 * Get all procedures
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 */
export async function getAll(req: Request, res: Response) {
  const procedures = await Procedure.Model.find().sort({ position: 1 });
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

  if (!data.name || !data.description) {
    const boom = Boom.badRequest('Missing arguments');
    res.status(boom.output.statusCode);
    return res.send(boom.output);
  }

  const Model = Procedure.Model;

  const highest = await returnHighest('position');

  const procedure = new Model({
    name: data.name,
    description: data.description,
    position: highest + 1,
  });

  const response = await procedure.save();

  res.send(response);
}

/**
 * Edit the Procedure, this method don't accept the change of position
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @returns
 */
export async function edit(req: Request, res: Response) {
  const data = req.body;

  if (!!Object.keys(data).find(key => key === 'position')) {
    const boom = Boom.badData(
      'You can not change position in this endpoint, use :id/position instead',
    );
    return sendBoom(boom, res);
  }

  let procedure;
  try {
    procedure = await Procedure.Model.findOneAndUpdate(
      { _id: req.params.id },
      {
        ...data,
      },
      { new: true },
    );
  } catch (error) {
    console.error(error);
    switch (error.name) {
      case 'CastError':
        const boom = Boom.notFound('Procedure not found');
        return sendBoom(boom, res);
    }
  }

  res.send(procedure);
}

export async function changePosition(req: Request, res: Response) {
  const data = req.body;

  if (!data.position) {
    const boom = Boom.badRequest('Missing the new position');
    return sendBoom(boom, res);
  }

  try {
    const query = await Procedure.Model.findOne({ _id: req.params.id });

    const old_position = (query.toObject() as Procedure).position;

    if (old_position > data.position) {
      await Procedure.Model.updateMany(
        { position: { $lte: old_position, $gte: data.position } },
        { $inc: { position: 1 } },
      );
      await query.update({ position: data.position });
    }

    if (old_position < data.position) {
      await Procedure.Model.updateMany(
        { position: { $gte: old_position, $lte: data.position } },
        { $inc: { position: -1 } },
      );
      await query.update({ position: data.position });
    }

    return res.send({ old_position, new_position: data.position });
  } catch (error) {
    console.error(error);
    switch (error.name) {
      case 'CastError':
        const boom = Boom.notFound('Procedure not found');
        return sendBoom(boom, res);
    }
  }
}
