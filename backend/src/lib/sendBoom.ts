import * as Boom from 'boom';
import { Response } from 'express';

function sendBoom(boom: Boom, res: Response) {
  const output = boom.output;

  Object.keys(output.headers).forEach(key => {
    res.header(key, output.headers[key]);
  });

  res.status(output.statusCode);

  return res.send(output.payload);
}

export default sendBoom;
