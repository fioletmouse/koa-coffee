const compose = require('koa-compose');
const Router = require('koa-router');

const routerConfigs = require('./dir-collection');

function routes() {
  const composed = [];

  routerConfigs.forEach( config  => {
    const router = new Router({ prefix: config.prefix });
    require(`../entity/${config.folder}/routes`)(router);
    composed.push(router.routes());
    composed.push(router.allowedMethods());
  });

  return compose(composed);
}

module.exports = routes;