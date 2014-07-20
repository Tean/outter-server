// adding jwt support

var express = require('express'),
  expressJwt = require('express-jwt'),
  jwt = require('jsonwebtoken'),
  cors = require('cors');

module.exports = function(app, config) {
  'use strict';
  app.configure(function () {
    app.use(cors());
    app.use('/api', expressJwt({
      secret: config.secret,
      skip: ['/v1/user', '/v1/user/login']
    }));
    app.use(express.json());
    app.use(express.urlencoded());
  });

  app.use(function(req, res, next) {
    req.config = config;
    return next();
  });

  app.get('/api/test', function (req, res) {
    res.json({});
  });

  app.post('/api/token', function (req, res) {
    // if (!(req.body.email === 'john.doe' && req.body.password === 'foobar')) {
    //   res.send(401, 'Wrong user or password');
    //   return;
    // }
    var profile = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@doe.com',
      id: 123
    };
    var token = jwt.sign(profile, config.secret, { expiresInMinutes: 60*5 });
    res.json(200, { token: token });
  });
};
