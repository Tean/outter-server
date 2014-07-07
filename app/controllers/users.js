var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    jwt = require('jsonwebtoken');

// GET (/api/v1/users)
exports.users = function(req, res){
  User.find(function(err, users) {
    if (err) {
      res.json(500, err);
    } else {    
      res.json({users: users});
    }
  });
};

// POST (/api/v1/user/login)
exports.login = function (req, res) {
  if(typeof req.body == 'undefined'){
    return res.json(500, {message: 'email or password is undefined'});
  }

  var email = req.body.email;
  var password = req.body.password;

  User.getAuthenticated(email, password, function(err, user, reason) {
    var session = null, 
      token = null;

    if (user == null) {
      var message = '';
      switch (reason) {
        case User.reasons.NOT_FOUND:
        case User.reasons.PASSWORD_INCORRECT:
          message = 0;
          break;
        case User.reasons.MAX_ATTEMPTS:
          message = 1;
      }
    } else {
      console.log("user", user.userName, "logged in");
      session = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        userName: user.userName,
        id: user._id
      };
      token = jwt.sign(session, req.config.secret, { expiresInMinutes: 60 * 5 });
    }

    res.json(200, {
      user: session,
      token: token,
      message: message
    });
  });
};

// GET (/api/v1/user/:id)
exports.user = function (req, res) {
  var id = req.params.id;
  User.findOne({ '_id': id }, function(err, user) {
    if (err) {
      res.json(404, err);
    } else {
      res.json(200, {user: user});
    }
  });
};

// POST (/api/v1/user)
exports.addUser = function (req, res) {
  if(typeof req.body == 'undefined'){
    return res.json(500, {message: 'user is undefined'});
  }

  var user = new User(req.body.user);

  user.save(function (err) {
    console.log(err);
    if (!err) {
      console.log("created user");

      var session = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        userName: user.userName,
        id: user._id
      };
      var token = jwt.sign(session, req.config.secret, { expiresInMinutes: 60 * 5 });


      return res.json(201, {
        user: session,
        token: token
      });
    } else {
      var message = null;
      if (err.code === 11000) {
        message = 0;
      }
      return res.json(500, {message: message, error: err});
    }
  });

};

// PUT (/api/v1/user/:id)
exports.editUser = function (req, res) {
  var id = req.params.id;

  User.findById(id, function (err, user) {
  
    if(typeof req.body.user["firstName"] != 'undefined'){
      user["firstName"] = req.body.user["firstName"];
    }  
  
    if(typeof req.body.user["lastName"] != 'undefined'){
      user["lastName"] = req.body.user["lastName"];
    }  
  
    if(typeof req.body.user["email"] != 'undefined'){
      user["email"] = req.body.user["email"];
    }  
    
    return user.save(function (err) {
      if (!err) {
        console.log("updated user");
        return res.json(200, user.toObject());        
      } else {
       return res.json(500, err);
      }
      return res.json(user);
    });
  });

};

// DELETE (/api/v1/user/:id)
exports.deleteUser = function (req, res) {
  var id = req.params.id;
  User.findById(id, function (err, user) {
    return user.remove(function (err) {
      if (!err) {
        console.log("removed user");
        return res.send(204);
      } else {
        console.log(err);
        return res.json(500, err);
      }
    });
  });
};