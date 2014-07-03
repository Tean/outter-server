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
      { from: "akong@outter.io", to: ["elee@outter.io", "skurilyak@outter.io"], body: "Bad decisions make good stories.", category: "fyi" }
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