const config = require('./config');
const Koa = require('koa');
const app = new Koa();

const Router = require('koa-router');
const router = new Router();

const pstg = require('./postgres');
router.get('hoba', '/:id', (ctx, next) => {
  ctx.body = {
    name: ctx.params.id
  };
} )
app.use(router.routes()).use(router.allowedMethods());

const server = app.listen(config.PORT, () => {
  console.log(`Server listening on port: ${config.PORT}`);
});

module.exports = server;