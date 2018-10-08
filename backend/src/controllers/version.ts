import { Request, Response } from 'express';

const pjson = require('../../package.json');

/**
 * Return version
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 */
export function getVersion(req: Request, res: Response) {
  res.send({
    version: pjson.version,
  });
}
