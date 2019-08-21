const compose = require('koa-compose');
const bodyParser = require("koa-bodyparser");
const logger = require("koa-logger");

function middleware() {
  return compose([
    logger(),    
    bodyParser()
  ]);
}

module.exports = middleware;