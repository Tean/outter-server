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