module.exports = function(app){

	var homeCtrl = require('../app/controllers/home');
  var userCtrl = require('../app/controllers/user');

	app.get('/', homeCtrl.index);
  app.get('/api/v1/users', userCtrl.users);
  app.get('/api/v1/user/:id', userCtrl.user);

};