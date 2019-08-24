const path = require('path');
const config = require('../config').paths;
const error = require('./error');
const context_error = require('./context-type-error');
const compose = require('koa-compose');
const bodyParser = require("koa-bodyparser");
const logger = require("koa-logger");
const favicon = require('koa-favicon');

function middleware() {
  return compose([
    logger(),   
    favicon(path.join(path.dirname(__dirname), config.public, config.icon)), 
    bodyParser(),
    context_error,
    error
  ]);
}

module.exports = middleware;