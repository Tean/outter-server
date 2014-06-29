var mongoose = require('mongoose'),
    User = mongoose.model('User');
 
var testUser = new User({
  firstName: 'Robert',
  lastName: 'Callender',
  email: 'rcallender@outter.io',
  password: 'Password123'
});

// save user to database
testUser.save(function(err) {
  if (err) throw err;
 
  // attempt to authenticate user
  User.getAuthenticated('rcallender@outter.io', 'Password123', function(err, user, reason) {
    if (err) throw err;

    // login was successful if we have a user
    if (user) {
      // handle login success
      console.log('Login success');
      return;
    }

    // otherwise we can determine why we failed
    var reasons = User.failedLogin;
    switch (reason) {
      case reasons.NOT_FOUND:
        console.log('User failed to login due to account not found');
      case reasons.PASSWORD_INCORRECT:
        console.log('User failed to login due to incorrect password');
      // note: these cases are usually treated the same - don't tell
      // the user *why* the login failed, only that it did
      break;
      case reasons.MAX_ATTEMPTS:
        console.log('User failed to login due to max attempts reached');
      // send email or otherwise notify user that account is
      // temporarily locked
      break;
    }
  });
});

// ALL
exports.users = function(req, res){
  User.find(function(err, users) {
    if (err) {
      res.json(500, err);
    } else {    
      res.json({users: users});
    }
  });
};

// GET
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

// POST
exports.addUser = function (req, res) {
  
  var user;
    
  if(typeof req.body.user == 'undefined'){
    return res.json(500, {message: 'user is undefined'});
  }

  user = new User(req.body.user);

  user.save(function (err) {
    if (!err) {
      console.log("created user");
      return res.json(201, user.toObject());
    } else {
       return res.json(500, err);
    }
  });

};

// PUT
exports.editUser = function (req, res) {
  var id = req.params.id;

  User.findById(id, function (err, user) {
  
    if(typeof req.body.user["title"] != 'undefined'){
      user["title"] = req.body.user["title"];
    }  
  
    if(typeof req.body.user["excerpt"] != 'undefined'){
      user["excerpt"] = req.body.user["excerpt"];
    }  
  
    if(typeof req.body.user["content"] != 'undefined'){
      user["content"] = req.body.user["content"];
    }  
  
    if(typeof req.body.user["active"] != 'undefined'){
      user["active"] = req.body.user["active"];
    }  
  
    if(typeof req.body.user["created"] != 'undefined'){
      user["created"] = req.body.user["created"];
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

// DELETE
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