var mongoose = require('mongoose'),
    Message = mongoose.model('Message'),
    User = mongoose.model('User');

// Seed messages
var newMessage = new Message({
  from: 'skurilyak@outter.io',
  to: 'elee@outter.io',
  body: 'Check out hackernews.com',
  category: 'fyi'
});

newMessage.save(function(err) {
  if (err) throw err;
  console.log('New message was successfully added to db');
});

var newMessage2 = new Message({
  from: 'elee@outter.io',
  to: ['skurilyak@outter.io', 'akong@outter.io'],
  body: 'Hackernews.com is awesome',
  category: 'fyi'
});

newMessage2.save(function(err) {
  if (err) throw err;
  console.log('New message was successfully added to db');
});

var newMessage3 = new Message({
  from: 'akong@outter.io',
  to: ['skurilyak@outter.io', 'elee@outter.io'],
  body: 'Have you heard of Hackernews.com?',
  category: 'question'
});

newMessage3.save(function(err) {
  if (err) throw err;
  console.log('New message was successfully added to db');
});
 
// Seed users
var newUser1 = new User({
  firstName: 'Slav',
  lastName: 'Kurilyak',
  email: 'skurilyak@outter.io',
  password: 'Password123'
});

newUser1.save(function(err) {
  if (err) throw err;
  console.log('New user was successfully added to db');
});

var newUser2 = new User({
  firstName: 'Andrew',
  lastName: 'Kong',
  email: 'akong@outter.io',
  password: 'Password123'
});

newUser2.save(function(err) {
  if (err) throw err;
  console.log('New user was successfully added to db');
});

var newUser3 = new User({
  firstName: 'Eric',
  lastName: 'Lee',
  email: 'elee@outter.io',
  password: 'Password123'
});

newUser3.save(function(err) {
  if (err) throw err;
  console.log('New user was successfully added to db');
});