var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'express - dev'
    },
    port: 3000,
    db: 'mongodb://localhost/express-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'express - test'
    },
    port: 3000,
    db: 'mongodb://localhost/express-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'express - pro'
    },
    port: 3000,
    db: 'mongodb://localhost/express-production'
  }
};

module.exports = config[env];
