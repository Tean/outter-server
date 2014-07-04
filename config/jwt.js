// adding jwt support

var express = require('express'),
  expressJwt = require('express-jwt'),
  jwt = require('jsonwebtoken'),
  cors = require('cors')

module.exports = function(app, config) {
  app.configure(function () {
    app.use(cors());
    app.use('/auth', expressJwt({
      secret: config.secret,
      skip: ['/token']
    }));
    app.use(express.json());
    app.use(express.urlencoded());
  });

  app.get('/auth/test', function (req, res) {
    res.json({});
  });

  app.post('/auth/token', function (req, res) {
    // if (!(req.body.email === 'john.doe' && req.body.password === 'foobar')) {
    //   res.send(401, 'Wrong user or password');
    //   return;
    // }
    var profile = {
      first_name: 'John',
      last_name: 'Doe',
      email: 'john@doe.com',
      id: 123
    };
    var token = jwt.sign(profile, config.secret, { expiresInMinutes: 60*5 });
    res.json(200, { token: token });
  });
};
