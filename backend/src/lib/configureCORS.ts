import { Express } from 'express';

/**
 * Added headers to allow API requests
 *
 * @param {Express} app The Express app to be configured
 */
function configureCORS(app: Express): void {
  app.all('/api/*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With',
    );
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');

    if (req.method.toLowerCase() !== 'options') {
      return next();
    }

    return res.sendStatus(204);
  });
}

export default configureCORS;
