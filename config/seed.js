var mongoose = require('mongoose'),
    Message = mongoose.model('Message'),
    User = mongoose.model('User');

Message.find({}).exec(function(err, collection) {
  if(collection.length === 0) {

    var arrayMessages = [
      { from: "slavkurilyak", to: "ericlee", body: "Go 1.3 is released", category: "fyi" },
      { from: "slavkurilyak", to: "andrewkong", body: "Check out the new Amazon Fire phone", category: "fyi" },
      { from: "slavkurilyak", to: ["ericlee", "andrewkong"], body: "Take my advice: stand up for yourself.", category: "fyi" },
      { from: "slavkurilyak", to: ["ericlee", "andrewkong"], body: "My roommate(s) and I once: had a party every weekend for three months straight.", category: "fyi" },
      { from: "ericlee", to: "andrewkong", body: "Sorry Im late, but I didnt want to come.", category: "fyi" },
      { from: "ericlee", to: "slavkurilyak", body: "Were like a really small gang", category: "fyi" },
      { from: "andrewkong", to: "ericlee", body: "Never in my life have I: built a snowman.", category: "fyi" },
      { from: "andrewkong", to: "ericlee", body: "My ideal breakfast is: chilaquiles.", category: "fyi" },
      { from: "andrewkong", to: ["ericlee", "slavkurilyak"], body: "Sometime soon I plan to visit: Paris.", category: "fyi" },
      { from: "andrewkong", to: ["ericlee", "slavkurilyak"], body: "Bad decisions make good stories.", category: "fyi" },

      { from: "slavkurilyak", to: "ericlee", body: "What time do you finish?", category: "question" },
      { from: "slavkurilyak", to: "andrewkong", body: "Do you want to eat sushi or tacos tonight?", category: "question" },
      { from: "slavkurilyak", to: ["ericlee", "andrewkong"], body: "What do you like on your toast?", category: "question" },
      { from: "slavkurilyak", to: ["ericlee", "andrewkong"], body: "Are you a hat person?", category: "question" },
      { from: "ericlee", to: "andrewkong", body: "ave you ever painted a house?", category: "question" },
      { from: "ericlee", to: "slavkurilyak", body: "Where do you like to go to tonight?", category: "question" },
      { from: "andrewkong", to: "ericlee", body: "Can you play the harmonica?", category: "question" },
      { from: "andrewkong", to: "ericlee", body: "Whats your favourite ocean?", category: "question" },
      { from: "andrewkong", to: ["ericlee", "slavkurilyak"], body: "Have you ever been to a live concert?", category: "question" },
      { from: "andrewkong", to: ["ericlee", "slavkurilyak"], body: "Are you any good at pool?", category: "question" }
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
      { firstName: "Slav", lastName: "Kurilyak", userName: "slavkurilyak", email: "skurilyak@outter.io", password: "Password123" },
      { firstName: "Andrew", lastName: "Kong", userName: "andrewkong", email: "akong@outter.io", password: "Password123" },
      { firstName: "Eric", lastName: "Lee", userName: "ericlee", email: "elee@outter.io", password: "Password123" },
      
      { firstName: "Gordon", lastName: "Wilkinson", userName: "gordonwilkinson", email: "gwilkinson@outter.io", password: "Password123" },
      { firstName: "Andre", lastName: "Soesilo", userName: "andresoesilo", email: "asoesilo@outter.io", password: "Password123" },
      { firstName: "Barrett", lastName: "Stutzman", userName: "barrettstutzman", email: "bstutzman@outter.io", password: "Password123" },
      { firstName: "Billy", lastName: "Lan", userName: "billylan", email: "blan@outter.io", password: "Password123" },
      { firstName: "Brett", lastName: "Campbell", userName: "brettcampbell", email: "bcampbell@outter.io", password: "Password123" },
      { firstName: "Colin", lastName: "Clay", userName: "colinclay", email: "cclay@outter.io", password: "Password123" },
      { firstName: "Duncan", lastName: "Strong", userName: "duncanstrong", email: "dstrong@outter.io", password: "Password123" },
      { firstName: "Gabriel", lastName: "Russ", userName: "gabrielruss", email: "gtruss@outter.io", password: "Password123" },
      { firstName: "Jackson", lastName: "Chao", userName: "jacksonchao", email: "jchao@outter.io", password: "Password123" },
      { firstName: "Jamie", lastName: "Woodbury", userName: "jamiewoodbury", email: "jwoodbury@outter.io", password: "Password123" },
      { firstName: "Jeff", lastName: "Brunson", userName: "jeffbrunson", email: "jbrunson@outter.io", password: "Password123" },
      { firstName: "Kevin", lastName: "Sherman", userName: "kevinsherman", email: "ksherman@outter.io", password: "Password123" },
      { firstName: "Rene", lastName: "Cravioto", userName: "renecravioto", email: "rcravioto@outter.io", password: "Password123" },
      { firstName: "Su", lastName: "Suhn", userName: "susuhn", email: "sysuhn@outter.io", password: "Password123" },

      { firstName: "Khurram", lastName: "Virani", userName: "khurram", email: "kvirani@outter.io", password: "Password123"},
      { firstName: "Jeremy", lastName: "Shaki", userName: "jeremyshaki", email: "jshaki@outter.io", password: "Password123" },
      { firstName: "Ian", lastName: "MacKinnon", userName: "ianmackinnon", email: "imackinnon@outter.io", password: "Password123" },
      { firstName: "Chris", lastName: "Tulip", userName: "christulip", email: "ctulip@outter.io", password: "Password123" },
      { firstName: "Murat", lastName: "Ayfer", userName: "muratayfer", email: "mayfer@outter.io", password: "Password123" },
      { firstName: "Jessica", lastName: "Johnson", userName: "jessicajohnson", email: "jjohnson@outter.io", password: "Password123" },
      { firstName: "Jeff", lastName: "Ling", userName: "jeffling", email: "jling@outter.io", password: "Password123" },
      { firstName: "Neil", lastName: "O\'Grady", userName: "neilogrady", email: "nogrady@outter.io", password: "Password123" },
      { firstName: "Brandan", lastName: "Asselstine", userName: "brandonasselstine", email: "basselstine@outter.io", password: "Password123" }
    ]

    User.create(arrayUsers, function (err) {
      if (err) throw error;
      else
      console.log('New users was successfully added to db');
    });

  }
})