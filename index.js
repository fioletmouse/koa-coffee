const config = require('./config').root;
const Koa = require('koa');
const app = new Koa();
const bodyParser = require("koa-bodyparser");
const router = require('./routers/test');

app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

app.on('error', err => {
  console.log('server error', err)
});

const server = app.listen(config.PORT, () => {
  console.log(`Server listening on port: ${config.PORT}`);
});

process.on('SIGINT', function() {
  const mongo = require('./mongo/mongoose-connection');
  mongo.connection.close(function () {
      console.log('Mongoose default connection closed through app termination');
      process.exit(0);
  });
});

module.exports = server;