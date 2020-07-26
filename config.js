const config = {
  root: {
    PORT: 3000
  },
  db: {
    connString: 'mongodb://localhost:27017/Coffee'
  },
  paths: {
    collection: 'entity',
    routeFile: 'routes.js'
  }
}

module.exports = config;