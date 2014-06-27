var mongoose = require('mongoose'),
  User = mongoose.model('User');

  exports.index = function(req, res){
    User.find(function(err, Users){
      if(err) throw new Error(err);
      res.render('home/index', {
        title: 'Outter Server',
        Users: Users
      });
    });
};