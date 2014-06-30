var mongoose = require('mongoose'),
    User = mongoose.model('User');

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
  
    if(typeof req.body.user["firstName"] != 'undefined'){
      user["firstName"] = req.body.user["firstName"];
    }  
  
    if(typeof req.body.user["lastName"] != 'undefined'){
      user["lastName"] = req.body.user["lastName"];
    }  
  
    if(typeof req.body.user["email"] != 'undefined'){
      user["email"] = req.body.user["email"];
    }  
  
    // if(typeof req.body.user["created"] != 'undefined'){
    //   user["created"] = req.body.user["created"];
    // }  
  
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