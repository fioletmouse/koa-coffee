const path = require('path');
const config = require('../config').paths;
const error = require('./error');
const context_error = require('./context-type-error');
const compose = require('koa-compose');
const bodyParser = require("koa-bodyparser");
const logger = require("koa-logger");

function middleware() {
  return compose([
    logger(),   
    bodyParser(),
    context_error,
    error // should be the last
  ]);
}

module.exports = middleware;