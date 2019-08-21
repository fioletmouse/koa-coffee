const compose = require('koa-compose');
const bodyParser = require("koa-bodyparser");
const logger = require("koa-logger");
const error = require('./error');

function middleware() {
  return compose([
    logger(),    
    bodyParser(),
    error
  ]);
}

module.exports = middleware;