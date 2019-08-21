const config = require('./config').root;
const Koa = require('koa');
const app = new Koa();
const middleware = require('./middleware');
const routes = require('./routes');

app.use(middleware());
app.use(routes());

// no proper route found
app.use(ctx => ctx.status = 404);

// smth goes wrong
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