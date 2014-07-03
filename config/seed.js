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
      { firstName: "Eric", lastName: "Lee", email: "elee@outter.io", password: "Password123" },
      
      { firstName: "Gordon", lastName: "Wilkinson", email: "gwilkinson@outter.io", password: "Password123" },
      { firstName: "Andre", lastName: "Soesilo", email: "asoesilo@outter.io", password: "Password123" },
      { firstName: "Barrett", lastName: "Stutzman", email: "bstutzman@outter.io", password: "Password123" },
      { firstName: "Billy", lastName: "Lan", email: "blan@outter.io", password: "Password123" },
      { firstName: "Brett", lastName: "Campbell", email: "bcampbell@outter.io", password: "Password123" },
      { firstName: "Colin", lastName: "Clay", email: "cclay@outter.io", password: "Password123" },
      { firstName: "Duncan", lastName: "Strong", email: "dstrong@outter.io", password: "Password123" },
      { firstName: "Gabriel Taylor", lastName: "Russ", email: "gtruss@outter.io", password: "Password123" },
      { firstName: "Jackson", lastName: "Chao", email: "jchao@outter.io", password: "Password123" },
      { firstName: "Jamie", lastName: "Woodbury", email: "jwoodbury@outter.io", password: "Password123" },
      { firstName: "Jeff", lastName: "Brunson", email: "jbrunson@outter.io", password: "Password123" },
      { firstName: "Kevin", lastName: "Sherman", email: "ksherman@outter.io", password: "Password123" },
      { firstName: "Rene", lastName: "Cravioto", email: "rcravioto@outter.io", password: "Password123" },
      { firstName: "Su Yon", lastName: "Suhn", email: "sysuhn@outter.io", password: "Password123" },

      { firstName: "Khurram", lastName: "Virani", email: "kvirani@outter.io", password: "Password123" },
      { firstName: "Jeremy", lastName: "Shaki", email: "jshaki@outter.io", password: "Password123" },
      { firstName: "Ian", lastName: "MacKinnon", email: "imackinnon@outter.io", password: "Password123" },
      { firstName: "Chris", lastName: "Tulip", email: "ctulip@outter.io", password: "Password123" },
      { firstName: "Murat", lastName: "Ayfer", email: "mayfer@outter.io", password: "Password123" },
      { firstName: "Jessica", lastName: "Johnson", email: "jjohnson@outter.io", password: "Password123" },
      { firstName: "Jeff", lastName: "Ling", email: "jling@outter.io", password: "Password123" },
      { firstName: "Neil", lastName: "O\'Grady", email: "nogrady@outter.io", password: "Password123" },
      { firstName: "Brandan", lastName: "Asselstine", email: "basselstine@outter.io", password: "Password123" }
    ]

    User.create(arrayUsers, function (err) {
      if (err) throw error;
      else
      console.log('New users was successfully added to db');
    });

  }
})