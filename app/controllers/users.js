var mongoose = require('mongoose'),
    User = mongoose.model('User');
 
var testUser = new User({
  firstName: 'Slav',
  lastName: 'Kurilyak',
  email: 'skurilyak@outter.io',
  password: 'Password123'
});

// save user to database
testUser.save(function(err) {
  if (err) throw err;
   
  // fetch user and test password verification
  User.findOne({ email: 'skurilyak@outter.io' }, function(err, user) {
    if (err) throw err;

    // test a matching password
    user.comparePassword('Password123', function(err, isMatch) {
      if (err) throw err;
      console.log('Password123:', isMatch); // Password123: true
    });

    // test a failing password
    user.comparePassword('123Password', function(err, isMatch) {
      if (err) throw err;
      console.log('123Password:', isMatch); // 123Password: false
    });
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