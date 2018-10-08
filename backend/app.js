const Koa = require('koa');
const Router = require('koa-router');
const Cors = require('koa-cors');

const getRank = require('./rank');

const app = new Koa();
const router = new Router();

router.get('/rank', (ctx, next) => {
  ctx.body = {
    status: true,
    data: getRank(),
  };
});

app
  .use(Cors())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8088);