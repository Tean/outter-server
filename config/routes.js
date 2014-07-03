module.exports = function(app){

	// var seed = require('./seed');

  var homeCtrl = require('../app/controllers/home');
  var userCtrl = require('../app/controllers/users');
  var messageCtrl = require('../app/controllers/messages');

	app.get('/', homeCtrl.index);
  
  app.get('/api/v1/users', userCtrl.users);
  app.get('/api/v1/user/:id', userCtrl.user);
  app.post('/api/v1/user', userCtrl.addUser);
  app.put('/api/v1/user/:id', userCtrl.editUser);
  app.delete('/api/v1/user/:id', userCtrl.deleteUser);

  app.get('/api/v1/messages', messageCtrl.messages);
  app.get('/api/v1/message/:id', messageCtrl.message);
  app.post('/api/v1/message', messageCtrl.addMessage);
  app.put('/api/v1/message/:id', messageCtrl.editMessage);
  app.delete('/api/v1/message/:id', messageCtrl.deleteMessage);

  app.get('/api/v1/messages/to/:id', messageCtrl.messagesTo);
  app.get('/api/v1/messages/to/:id/fyi', messageCtrl.messagesToByCategoryFyi);
  app.get('/api/v1/messages/to/:id/question', messageCtrl.messagesToByCategoryQuestion);

};