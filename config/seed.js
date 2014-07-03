var mongoose = require('mongoose'),
    Message = mongoose.model('Message'),
    User = mongoose.model('User');

Message.find({}).exec(function(err, collection) {
  if(collection.length === 0) {

    var arrayMessages = [
      { from: "skurilyak@outter.io", to: "elee@outter.io", body: "Go 1.3 is released", category: "fyi" },
      { from: "skurilyak@outter.io", to: "akong@outter.io", body: "Check out the new Amazon Fire phone", category: "fyi" },
      { from: "skurilyak@outter.io", to: ["elee@outter.io", "akong@outter.io"], body: "Take my advice: stand up for yourself.", category: "fyi" },
      { from: "skurilyak@outter.io", to: ["elee@outter.io", "akong@outter.io"], body: "My roommate(s) and I once: had a party every weekend for three months straight.", category: "fyi" },
      { from: "elee@outter.io", to: "akong@outter.io", body: "Sorry Im late, but I didnt want to come.", category: "fyi" },
      { from: "elee@outter.io", to: "skurilyak@outter.io", body: "Were like a really small gang", category: "fyi" },
      { from: "akong@outter.io", to: "elee@outter.io", body: "Never in my life have I: built a snowman.", category: "fyi" },
      { from: "akong@outter.io", to: "elee@outter.io", body: "My ideal breakfast is: chilaquiles.", category: "fyi" },
      { from: "akong@outter.io", to: ["elee@outter.io", "skurilyak@outter.io"], body: "Sometime soon I plan to visit: Paris.", category: "fyi" },
      { from: "akong@outter.io", to: ["elee@outter.io", "skurilyak@outter.io"], body: "Bad decisions make good stories.", category: "fyi" },

      { from: "skurilyak@outter.io", to: "elee@outter.io", body: "What time do you finish?", category: "question" },
      { from: "skurilyak@outter.io", to: "akong@outter.io", body: "Do you want to eat sushi or tacos tonight?", category: "question" },
      { from: "skurilyak@outter.io", to: ["elee@outter.io", "akong@outter.io"], body: "What do you like on your toast?", category: "question" },
      { from: "skurilyak@outter.io", to: ["elee@outter.io", "akong@outter.io"], body: "Are you a hat person?", category: "question" },
      { from: "elee@outter.io", to: "akong@outter.io", body: "ave you ever painted a house?", category: "question" },
      { from: "elee@outter.io", to: "skurilyak@outter.io", body: "Where do you like to go to tonight?", category: "question" },
      { from: "akong@outter.io", to: "elee@outter.io", body: "Can you play the harmonica?", category: "question" },
      { from: "akong@outter.io", to: "elee@outter.io", body: "Whats your favourite ocean?", category: "question" },
      { from: "akong@outter.io", to: ["elee@outter.io", "skurilyak@outter.io"], body: "Have you ever been to a live concert?", category: "question" },
      { from: "akong@outter.io", to: ["elee@outter.io", "skurilyak@outter.io"], body: "Are you any good at pool?", category: "question" }
    ];
  
    Message.create(arrayMessages, function (err) {
      if (err) throw error;
      else
      console.log('New messages was successfully added to db');
    });
  
  }
})

User.find({}).exec(function(err, collection) {
  if(collection.length === 0) {

    var arrayUsers = [
      { firstName: "Slav", lastName: "Kurilyak", email: "skurilyak@outter.io", password: "Password123" },
      { firstName: "Andrew", lastName: "Kong", email: "akong@outter.io", password: "Password123" },
      { firstName: "Eric", lastName: "Lee", email: "elee@outter.io", password: "Password123" }
    ]

    User.create(arrayUsers, function (err) {
      if (err) throw error;
      else
      console.log('New users was successfully added to db');
    });

  }
})