const compose = require('koa-compose');
const Router = require('koa-router');

const routerConfigs = [{ folder: 'brewing', prefix: '/brewing' }];

function routes() {
  const composed = [];

  routerConfigs.forEach( config  => {
    const router = new Router({ prefix: config.prefix });
    require(`./${config.folder}`)(router);
    composed.push(router.routes());
    composed.push(router.allowedMethods());
  });

  return compose(composed);
}

module.exports = routes;