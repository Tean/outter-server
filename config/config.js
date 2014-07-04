var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    secret: 'abc123',
    root: rootPath,
    app: {
      name: 'outter-server'
    },
    port: 3000,
    db: 'mongodb://localhost/outter-server-development'
  },

  test: {
    secret: 'abc123',
    root: rootPath,
    app: {
      name: 'outter-server'
    },
    port: 3000,
    db: 'mongodb://localhost/outter-server-test'
  },

  production: {
    secret: 'abc123',
    root: rootPath,
    app: {
      name: 'outter-server'
    },
    port: 3000,
    db: 'mongodb://localhost/outter-server-production'
  }
};

module.exports = config[env];
