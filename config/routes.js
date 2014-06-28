module.exports = function(app){

	var homeCtrl = require('../app/controllers/home');
  var userCtrl = require('../app/controllers/users');

	app.get('/', homeCtrl.index);
  app.get('/api/v1/users', userCtrl.users);
  app.get('/api/v1/user/:id', userCtrl.user);
  app.post('/api/v1/user', userCtrl.addUser);
  app.put('/api/v1/user/:id', userCtrl.editUser);
  app.delete('/api/v1/user/:id', userCtrl.deleteUser);

};