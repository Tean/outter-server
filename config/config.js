var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'outter-server'
    },
    port: 27017,
    db: 'mongodb://localhost/outter-server-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'outter-server'
    },
    port: 27017,
    db: 'mongodb://localhost/outter-server-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'outter-server'
    },
    port: 27017,
    db: 'mongodb://localhost/outter-server-production'
  }
};

module.exports = config[env];
