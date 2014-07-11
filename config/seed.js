var mongoose = require('mongoose'),
    Message = mongoose.model('Message'),
    User = mongoose.model('User');

Message.find({}).exec(function(err, collection) {
  if(collection.length === 0) {

    var arrayMessages = [
      { from: "slavkurilyak", to: "ericlee", body: "Go 1.3 is released", category: "fyi", sent: Date.parse("July 11, 2014") },
      { from: "ericlee", to: "andrewkong", body: "Check out the new Amazon Fire phone", category: "fyi", sent: Date.parse("Jul 10, 2014") },
      { from: "andrewkong", to: ["ericlee", "slavkurilyak"], body: "Take my advice: stand up for yourself.", category: "fyi", sent: Date.parse("Jul 9, 2014") },
      { from: "slavkurilyak", to: ["ericlee", "andrewkong"], body: "My roommate(s) and I once: had a party every weekend for three months straight.", category: "fyi", sent: Date.parse("Jul 8, 2014") },
      { from: "ericlee", to: "andrewkong", body: "Sorry Im late, but I didnt want to come.", category: "fyi", sent: Date.parse("Jul 7, 2014") },
      { from: "slavkurilyak", to: "ericlee", body: "Were like a really small gang", category: "fyi", sent: Date.parse("Jul 6, 2014") },
      { from: "andrewkong", to: "ericlee", body: "Never in my life have I: built a snowman.", category: "fyi", sent: Date.parse("Jul 5, 2014") },
      { from: "slavkurilyak", to: "ericlee", body: "My ideal breakfast is: chilaquiles.", category: "fyi", sent: Date.parse("Jul 4, 2014") },
      { from: "andrewkong", to: ["ericlee", "slavkurilyak"], body: "Sometime soon I plan to visit: Paris.", category: "fyi", sent: Date.parse("Jul 3, 2014") },
      { from: "ericlee", to: ["andrewkong", "slavkurilyak"], body: "Bad decisions make good stories.", category: "fyi", sent: Date.parse("Jul 2, 2014") },

      { from: "slavkurilyak", to: "ericlee", body: "What time do you finish?", category: "question", sent: Date.parse("July 11, 2014") },
      { from: "ericlee", to: "andrewkong", body: "Do you want to eat sushi or tacos tonight?", category: "question", sent: Date.parse("Jul 10, 2014") },
      { from: "andrewkong", to: ["ericlee", "slavkurilyak"], body: "What do you like on your toast?", category: "question", sent: Date.parse("Jul 9, 2014") },
      { from: "slavkurilyak", to: ["ericlee", "andrewkong"], body: "Are you a hat person?", category: "question", sent: Date.parse("Jul 8, 2014") },
      { from: "ericlee", to: "andrewkong", body: "Have you ever painted a house?", category: "question", sent: Date.parse("Jul 7, 2014") },
      { from: "slavkurilyak", to: "ericlee", body: "Where do you like to go to tonight?", category: "question", sent: Date.parse("Jul 6, 2014") },
      { from: "andrewkong", to: "ericlee", body: "Can you play the harmonica?", category: "question", sent: Date.parse("Jul 5, 2014") },
      { from: "slavkurilyak", to: "ericlee", body: "Whats your favourite ocean?", category: "question", sent: Date.parse("Jul 4, 2014") },
      { from: "andrewkong", to: ["ericlee", "slavkurilyak"], body: "Have you ever been to a live concert?", category: "question", sent: Date.parse("Jul 3, 2014") },
      { from: "ericlee", to: ["andrewkong", "slavkurilyak"], body: "Are you any good at pool?", category: "question", sent: Date.parse("Jul 2, 2014") },

      { from: "ericlee", to: "slavkurilyak", body: "I finish work at 6pm", category: "response", sent: Date.parse("July 11, 2014") },
      { from: "andrewkong", to: "ericlee", body: "Sushi sounds better", category: "response", sent: Date.parse("Jul 10, 2014") },
      { from: "ericlee", to: "slavkurilyak", body: "Butter is my choice", category: "response", sent: Date.parse("Jul 9, 2014") },
      { from: "slavkurilyak", to: "ericlee", body: "I am a hat person all the way", category: "response", sent: Date.parse("Jul 8, 2014") },
      { from: "ericlee", to: "andrewkong", body: "No, I\'ve never pained a house", category: "response", sent: Date.parse("Jul 7, 2014") },
      { from: "slavkurilyak", to: "ericlee", body: "I want to go to the movies tonight", category: "response", sent: Date.parse("Jul 6, 2014") },
      { from: "andrewkong", to: "ericlee", body: "I can play the harmonica", category: "response", sent: Date.parse("Jul 5, 2014") },
      { from: "slavkurilyak", to: "ericlee", body: "My favorite ocean is the Black Sea", category: "response", sent: Date.parse("Jul 4, 2014") },
      { from: "andrewkong", to: "slavkurilyak", body: "I\'ve been to a live concert before", category: "response", sent: Date.parse("Jul 3, 2014") },
      { from: "ericlee", to: "slavkurilyak", body: "I\'m awesome at pool", category: "response", sent: Date.parse("Jul 2, 2014") },

      { from: "slavkurilyak", to: "ericlee", body: "Please pick up the milk today", category: "actionrequest", sent: Date.parse("July 11, 2014") },
      { from: "ericlee", to: "andrewkong", body: "Finish the report by 7pm", category: "actionrequest", sent: Date.parse("Jul 10, 2014") },
      { from: "andrewkong", to: ["ericlee", "slavkurilyak"], body: "Please make french toast tomorrow", category: "actionrequest", sent: Date.parse("Jul 9, 2014") },
      { from: "slavkurilyak", to: ["ericlee", "andrewkong"], body: "Stop by the grocery store on Sunday", category: "actionrequest", sent: Date.parse("Jul 8, 2014") },
      { from: "ericlee", to: "andrewkong", body: "Please paint the outside of the house by next Thursday", category: "actionrequest", sent: Date.parse("Jul 7, 2014") },
      { from: "slavkurilyak", to: "ericlee", body: "Meet me outside of Starbucks at 7pm", category: "actionrequest", sent: Date.parse("Jul 6, 2014") },
      { from: "andrewkong", to: "ericlee", body: "Buy the guitar tonight using Amazon", category: "actionrequest", sent: Date.parse("Jul 5, 2014") },
      { from: "slavkurilyak", to: "ericlee", body: "Please pick up the kids by lunch", category: "actionrequest", sent: Date.parse("Jul 4, 2014") },
      { from: "andrewkong", to: ["ericlee", "slavkurilyak"], body: "Weekly standup meeting in the conference room tomorrow at 8am", category: "actionrequest", sent: Date.parse("Jul 3, 2014") },
      { from: "ericlee", to: ["andrewkong", "slavkurilyak"], body: "Daily standup meeting on Thursday at 10am", category: "actionrequest", sent: Date.parse("Jul 2, 2014") }
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
      { firstName: "Slav", lastName: "Kurilyak", userName: "slavkurilyak", email: "skurilyak@outter.io", password: "Password123", about: "Alumni of Lighthouse Labs", picURL: "https://avatars2.githubusercontent.com/u/6625584", contacts: [ "andrewkong", "ericlee", "gordonwilkinson", "andresoesilo", "barrettstutzman", "billylan", "brettcampbell", "colinclay", "duncanstrong", "gabrielruss", "jacksonchao", "jamiewoodbury", "jeffbrunson", "kevinsherman", "renecravioto", "susuhn", "khurramvirani", "jeremyshaki", "ianmackinnon", "christulip", "muratayfer", "jessicajohnson", "jeffling", "neilogrady", "brandonasselstine" ] },
      { firstName: "Andrew", lastName: "Kong", userName: "andrewkong", email: "akong@outter.io", password: "Password123", about: "Alumni of Lighthouse Labs", picURL: "https://avatars0.githubusercontent.com/u/6866835", contacts: [ "slavkurilyak", "ericlee", "gordonwilkinson", "andresoesilo", "barrettstutzman", "billylan", "brettcampbell", "colinclay", "duncanstrong", "gabrielruss", "jacksonchao", "jamiewoodbury", "jeffbrunson", "kevinsherman", "renecravioto", "susuhn", "khurramvirani", "jeremyshaki", "ianmackinnon", "christulip", "muratayfer", "jessicajohnson", "jeffling", "neilogrady", "brandonasselstine" ] },
      { firstName: "Eric", lastName: "Lee", userName: "ericlee", email: "elee@outter.io", password: "Password123", about: "Alumni of Lighthouse Labs", picURL: "https://avatars0.githubusercontent.com/u/6914584", contacts: [ "slavkurilyak", "andrewkong", "gordonwilkinson", "andresoesilo", "barrettstutzman", "billylan", "brettcampbell", "colinclay", "duncanstrong", "gabrielruss", "jacksonchao", "jamiewoodbury", "jeffbrunson", "kevinsherman", "renecravioto", "susuhn", "khurramvirani", "jeremyshaki", "ianmackinnon", "christulip", "muratayfer", "jessicajohnson", "jeffling", "neilogrady", "brandonasselstine" ] },
      { firstName: "Gordon", lastName: "Wilkinson", userName: "gordonwilkinson", email: "gwilkinson@outter.io", password: "Password123", about: "Alumni of Lighthouse Labs", picURL: "https://avatars1.githubusercontent.com/u/5892280?s=460", contacts: [ "slavkurilyak", "andrewkong", "ericlee", "andresoesilo", "barrettstutzman", "billylan", "brettcampbell", "colinclay", "duncanstrong", "gabrielruss", "jacksonchao", "jamiewoodbury", "jeffbrunson", "kevinsherman", "renecravioto", "susuhn", "khurramvirani", "jeremyshaki", "ianmackinnon", "christulip", "muratayfer", "jessicajohnson", "jeffling", "neilogrady", "brandonasselstine" ] },
      { firstName: "Andre", lastName: "Soesilo", userName: "andresoesilo", email: "asoesilo@outter.io", password: "Password123", about: "Alumni of Lighthouse Labs", picURL: "http://www.quokastudios.com/img/andre.jpg", contacts: [ "slavkurilyak", "andrewkong", "ericlee", "gordonwilkinson", "barrettstutzman", "billylan", "brettcampbell", "colinclay", "duncanstrong", "gabrielruss", "jacksonchao", "jamiewoodbury", "jeffbrunson", "kevinsherman", "renecravioto", "susuhn", "khurramvirani", "jeremyshaki", "ianmackinnon", "christulip", "muratayfer", "jessicajohnson", "jeffling", "neilogrady", "brandonasselstine" ] },
      { firstName: "Barrett", lastName: "Stutzman", userName: "barrettstutzman", email: "bstutzman@outter.io", password: "Password123", about: "Alumni of Lighthouse Labs", picURL: "https://avatars2.githubusercontent.com/u/6879517", contacts: [ "slavkurilyak", "andrewkong", "ericlee", "gordonwilkinson", "andresoesilo", "billylan", "brettcampbell", "colinclay", "duncanstrong", "gabrielruss", "jacksonchao", "jamiewoodbury", "jeffbrunson", "kevinsherman", "renecravioto", "susuhn", "khurramvirani", "jeremyshaki", "ianmackinnon", "christulip", "muratayfer", "jessicajohnson", "jeffling", "neilogrady", "brandonasselstine" ] },
      { firstName: "Billy", lastName: "Lan", userName: "billylan", email: "blan@outter.io", password: "Password123", about: "Alumni of Lighthouse Labs", picURL: "https://avatars0.githubusercontent.com/u/6962957", contacts: [ "slavkurilyak", "andrewkong", "ericlee", "gordonwilkinson", "andresoesilo", "barrettstutzman", "brettcampbell", "colinclay", "duncanstrong", "gabrielruss", "jacksonchao", "jamiewoodbury", "jeffbrunson", "kevinsherman", "renecravioto", "susuhn", "khurramvirani", "jeremyshaki", "ianmackinnon", "christulip", "muratayfer", "jessicajohnson", "jeffling", "neilogrady", "brandonasselstine" ] },
      { firstName: "Brett", lastName: "Campbell", userName: "brettcampbell", email: "bcampbell@outter.io", password: "Password123", about: "Alumni of Lighthouse Labs", picURL: "https://avatars2.githubusercontent.com/u/3759868", contacts: [ "slavkurilyak", "andrewkong", "ericlee", "gordonwilkinson", "andresoesilo", "barrettstutzman", "billylan", "colinclay", "duncanstrong", "gabrielruss", "jacksonchao", "jamiewoodbury", "jeffbrunson", "kevinsherman", "renecravioto", "susuhn", "khurramvirani", "jeremyshaki", "ianmackinnon", "christulip", "muratayfer", "jessicajohnson", "jeffling", "neilogrady", "brandonasselstine" ] },
      { firstName: "Colin", lastName: "Clay", userName: "colinclay", email: "cclay@outter.io", password: "Password123", about: "Alumni of Lighthouse Labs", picURL: "https://avatars2.githubusercontent.com/u/6610263", contacts: [ "slavkurilyak", "andrewkong", "ericlee", "gordonwilkinson", "andresoesilo", "barrettstutzman", "billylan", "brettcampbell", "duncanstrong", "gabrielruss", "jacksonchao", "jamiewoodbury", "jeffbrunson", "kevinsherman", "renecravioto", "susuhn", "khurramvirani", "jeremyshaki", "ianmackinnon", "christulip", "muratayfer", "jessicajohnson", "jeffling", "neilogrady", "brandonasselstine" ] },
      { firstName: "Duncan", lastName: "Strong", userName: "duncanstrong", email: "dstrong@outter.io", password: "Password123", about: "Alumni of Lighthouse Labs", picURL: "https://avatars3.githubusercontent.com/u/7073663", contacts: [ "slavkurilyak", "andrewkong", "ericlee", "gordonwilkinson", "andresoesilo", "barrettstutzman", "billylan", "brettcampbell", "colinclay", "gabrielruss", "jacksonchao", "jamiewoodbury", "jeffbrunson", "kevinsherman", "renecravioto", "susuhn", "khurramvirani", "jeremyshaki", "ianmackinnon", "christulip", "muratayfer", "jessicajohnson", "jeffling", "neilogrady", "brandonasselstine" ] },
      { firstName: "Gabriel", lastName: "Russ", userName: "gabrielruss", email: "gtruss@outter.io", password: "Password123", about: "Alumni of Lighthouse Labs", picURL: "https://avatars0.githubusercontent.com/u/3871682", contacts: [ "slavkurilyak", "andrewkong", "ericlee", "gordonwilkinson", "andresoesilo", "barrettstutzman", "billylan", "brettcampbell", "colinclay", "duncanstrong", "jamiewoodbury", "jeffbrunson", "kevinsherman", "renecravioto", "susuhn", "khurramvirani", "jeremyshaki", "ianmackinnon", "christulip", "muratayfer", "jessicajohnson", "jeffling", "neilogrady", "brandonasselstine" ] },
      { firstName: "Jackson", lastName: "Chao", userName: "jacksonchao", email: "jchao@outter.io", password: "Password123", about: "Alumni of Lighthouse Labs", picURL: "https://avatars0.githubusercontent.com/u/7062613", contacts: [ "slavkurilyak", "andrewkong", "ericlee", "gordonwilkinson", "andresoesilo", "barrettstutzman", "billylan", "brettcampbell", "colinclay", "duncanstrong", "gabrielruss", "jamiewoodbury", "jeffbrunson", "kevinsherman", "renecravioto", "susuhn", "khurramvirani", "jeremyshaki", "ianmackinnon", "christulip", "muratayfer", "jessicajohnson", "jeffling", "neilogrady", "brandonasselstine" ] },
      { firstName: "Jamie", lastName: "Woodbury", userName: "jamiewoodbury", email: "jwoodbury@outter.io", password: "Password123", about: "Alumni of Lighthouse Labs", picURL: "https://avatars1.githubusercontent.com/u/4008498", contacts: [ "slavkurilyak", "andrewkong", "ericlee", "gordonwilkinson", "andresoesilo", "barrettstutzman", "billylan", "brettcampbell", "colinclay", "duncanstrong", "gabrielruss", "jacksonchao", "jeffbrunson", "kevinsherman", "renecravioto", "susuhn", "khurramvirani", "jeremyshaki", "ianmackinnon", "christulip", "muratayfer", "jessicajohnson", "jeffling", "neilogrady", "brandonasselstine" ] },
      { firstName: "Jeff", lastName: "Brunson", userName: "jeffbrunson", email: "jbrunson@outter.io", password: "Password123", about: "Alumni of Lighthouse Labs", picURL: "https://avatars1.githubusercontent.com/u/6828417", contacts: [ "slavkurilyak", "andrewkong", "ericlee", "gordonwilkinson", "andresoesilo", "barrettstutzman", "billylan", "brettcampbell", "colinclay", "duncanstrong", "gabrielruss", "jacksonchao", "jamiewoodbury", "kevinsherman", "renecravioto", "susuhn", "khurramvirani", "jeremyshaki", "ianmackinnon", "christulip", "muratayfer", "jessicajohnson", "jeffling", "neilogrady", "brandonasselstine" ] },
      { firstName: "Kevin", lastName: "Sherman", userName: "kevinsherman", email: "ksherman@outter.io", password: "Password123", about: "Alumni of Lighthouse Labs", picURL: "https://avatars1.githubusercontent.com/u/5759428", contacts: [ "slavkurilyak", "andrewkong", "ericlee", "gordonwilkinson", "andresoesilo", "barrettstutzman", "billylan", "brettcampbell", "colinclay", "duncanstrong", "gabrielruss", "jacksonchao", "jamiewoodbury", "jeffbrunson", "renecravioto", "susuhn", "khurramvirani", "jeremyshaki", "ianmackinnon", "christulip", "muratayfer", "jessicajohnson", "jeffling", "neilogrady", "brandonasselstine" ] },
      { firstName: "Rene", lastName: "Cravioto", userName: "renecravioto", email: "rcravioto@outter.io", password: "Password123", about: "Alumni of Lighthouse Labs", picURL: "http://images.glaciermedia.ca/polopoly_fs/1.811717.1391447476!/fileImage/httpImage/image.jpg_gen/derivatives/landscape_563/seymourestates.jpg", contacts: [ "slavkurilyak", "andrewkong", "ericlee", "gordonwilkinson", "andresoesilo", "barrettstutzman", "billylan", "brettcampbell", "colinclay", "duncanstrong", "gabrielruss", "jacksonchao", "jamiewoodbury", "jeffbrunson", "kevinsherman", "susuhn", "khurramvirani", "jeremyshaki", "ianmackinnon", "christulip", "muratayfer", "jessicajohnson", "jeffling", "neilogrady", "brandonasselstine" ] },
      { firstName: "Su", lastName: "Suhn", userName: "susuhn", email: "sysuhn@outter.io", password: "Password123", about: "Alumni of Lighthouse Labs", picURL: "https://avatars2.githubusercontent.com/u/6752423", contacts: [ "slavkurilyak", "andrewkong", "ericlee", "gordonwilkinson", "andresoesilo", "barrettstutzman", "billylan", "brettcampbell", "colinclay", "duncanstrong", "gabrielruss", "jacksonchao", "jamiewoodbury", "jeffbrunson", "kevinsherman", "renecravioto", "khurramvirani", "jeremyshaki", "ianmackinnon", "christulip", "muratayfer", "jessicajohnson", "jeffling", "neilogrady", "brandonasselstine" ] },

      { firstName: "Khurram", lastName: "Virani", userName: "khurramvirani", email: "kvirani@outter.io", password: "Password123", about: "Teacher at Lighthouse Labs", picURL: "http://www.lighthouselabs.ca/assets/team/khurram_virani-aa973d87928471687432e9f776cf98f7.jpg", contacts: [ "slavkurilyak", "andrewkong", "ericlee", "gordonwilkinson", "andresoesilo", "barrettstutzman", "billylan", "brettcampbell", "colinclay", "duncanstrong", "gabrielruss", "jacksonchao", "jamiewoodbury", "jeffbrunson", "kevinsherman", "renecravioto", "susuhn", "jeremyshaki", "ianmackinnon", "christulip", "muratayfer", "jessicajohnson", "jeffling", "neilogrady", "brandonasselstine" ] },
      { firstName: "Jeremy", lastName: "Shaki", userName: "jeremyshaki", email: "jshaki@outter.io", password: "Password123", about: "Teacher at Lighthouse Labs", picURL: "http://www.lighthouselabs.ca/assets/team/jeremy_shaki-64616f57fdefcdf897665c2fc46337a2.png", contacts: [ "slavkurilyak", "andrewkong", "ericlee", "gordonwilkinson", "andresoesilo", "barrettstutzman", "billylan", "brettcampbell", "colinclay", "duncanstrong", "gabrielruss", "jacksonchao", "jamiewoodbury", "jeffbrunson", "kevinsherman", "renecravioto", "susuhn", "khurramvirani", "ianmackinnon", "christulip", "muratayfer", "jessicajohnson", "jeffling", "neilogrady", "brandonasselstine" ] },
      { firstName: "Ian", lastName: "MacKinnon", userName: "ianmackinnon", email: "imackinnon@outter.io", password: "Password123", about: "Teacher Assistant at Lighthouse Labs", picURL: "http://www.lighthouselabs.ca/assets/team/ian_mackinnon-96e9c710a59025d18fa9ede871829b47.jpeg", contacts: [ "slavkurilyak", "andrewkong", "ericlee", "gordonwilkinson", "andresoesilo", "barrettstutzman", "billylan", "brettcampbell", "colinclay", "duncanstrong", "gabrielruss", "jacksonchao", "jamiewoodbury", "jeffbrunson", "kevinsherman", "renecravioto", "susuhn", "khurramvirani", "jeremyshaki", "christulip", "muratayfer", "jessicajohnson", "jeffling", "neilogrady", "brandonasselstine" ] },
      { firstName: "Chris", lastName: "Tulip", userName: "christulip", email: "ctulip@outter.io", password: "Password123", about: "Teacher Assistant at Lighthouse Labs", picURL: "http://www.lighthouselabs.ca/assets/team/chris_tulip-4c25084bec4383dd07f5d92f0b8d5b60.jpg", contacts: [ "slavkurilyak", "andrewkong", "ericlee", "gordonwilkinson", "andresoesilo", "barrettstutzman", "billylan", "brettcampbell", "colinclay", "duncanstrong", "gabrielruss", "jacksonchao", "jamiewoodbury", "jeffbrunson", "kevinsherman", "renecravioto", "susuhn", "khurramvirani", "jeremyshaki", "ianmackinnon", "muratayfer", "jessicajohnson", "jeffling", "neilogrady", "brandonasselstine" ] },
      { firstName: "Murat", lastName: "Ayfer", userName: "muratayfer", email: "mayfer@outter.io", password: "Password123", about: "Teacher Assistant at Lighthouse Labs", picURL: "http://www.lighthouselabs.ca/assets/team/murat_ayfer-245722fab7b675d8b2197d9557740cc5.png", contacts: [ "slavkurilyak", "andrewkong", "ericlee", "gordonwilkinson", "andresoesilo", "barrettstutzman", "billylan", "brettcampbell", "colinclay", "duncanstrong", "gabrielruss", "jacksonchao", "jamiewoodbury", "jeffbrunson", "kevinsherman", "renecravioto", "susuhn", "khurramvirani", "jeremyshaki", "ianmackinnon", "christulip", "jessicajohnson", "jeffling", "neilogrady", "brandonasselstine" ] },
      { firstName: "Jessica", lastName: "Johnson", userName: "jessicajohnson", email: "jjohnson@outter.io", password: "Password123", about: "Teacher Assistant at Lighthouse Labs", picURL: "http://www.lighthouselabs.ca/assets/team/jessica_johnson-0259e62c31c6303260429e4375539339.jpg", contacts: [ "slavkurilyak", "andrewkong", "ericlee", "gordonwilkinson", "andresoesilo", "barrettstutzman", "billylan", "brettcampbell", "colinclay", "duncanstrong", "gabrielruss", "jacksonchao", "jamiewoodbury", "jeffbrunson", "kevinsherman", "renecravioto", "susuhn", "khurramvirani", "jeremyshaki", "ianmackinnon", "christulip", "muratayfer", "jeffling", "neilogrady", "brandonasselstine" ] },
      { firstName: "Jeff", lastName: "Ling", userName: "jeffling", email: "jling@outter.io", password: "Password123", about: "Teacher Assistant at Lighthouse Labs", picURL: "http://www.lighthouselabs.ca/assets/team/jeff_ling-82f1c6a6f9c788a2cb4c57014175ef8b.jpg", contacts: [ "slavkurilyak", "andrewkong", "ericlee", "gordonwilkinson", "andresoesilo", "barrettstutzman", "billylan", "brettcampbell", "colinclay", "duncanstrong", "gabrielruss", "jacksonchao", "jamiewoodbury", "jeffbrunson", "kevinsherman", "renecravioto", "susuhn", "khurramvirani", "jeremyshaki", "ianmackinnon", "christulip", "muratayfer", "jessicajohnson", "neilogrady", "brandonasselstine" ] },
      { firstName: "Neil", lastName: "O\'Grady", userName: "neilogrady", email: "nogrady@outter.io", password: "Password123", about: "Teacher Assistant at Lighthouse Labs", picURL: "http://www.lighthouselabs.ca/assets/team/neal_ogrady-fc1ad5afbf3dc6a80b8e680c2e1affb9.jpg", contacts: [ "slavkurilyak", "andrewkong", "ericlee", "gordonwilkinson", "andresoesilo", "barrettstutzman", "billylan", "brettcampbell", "colinclay", "duncanstrong", "gabrielruss", "jacksonchao", "jamiewoodbury", "jeffbrunson", "kevinsherman", "renecravioto", "susuhn", "khurramvirani", "jeremyshaki", "ianmackinnon", "christulip", "muratayfer", "jessicajohnson", "jeffling", "brandonasselstine" ] },
      { firstName: "Brandan", lastName: "Asselstine", userName: "brandonasselstine", email: "basselstine@outter.io", password: "Password123", about: "Teacher Assistant at Lighthouse Labs", picURL: "http://www.lighthouselabs.ca/assets/team/brendan_asselstine-e34643078c1529df97795113d49d3be6.png", contacts: [ "slavkurilyak", "andrewkong", "ericlee", "gordonwilkinson", "andresoesilo", "barrettstutzman", "billylan", "brettcampbell", "colinclay", "duncanstrong", "gabrielruss", "jacksonchao", "jamiewoodbury", "jeffbrunson", "kevinsherman", "renecravioto", "susuhn", "khurramvirani", "jeremyshaki", "ianmackinnon", "christulip", "muratayfer", "jessicajohnson", "jeffling", "neilogrady" ] }
    ]

    User.create(arrayUsers, function (err) {
      if (err) throw error;
      else
      console.log('New users was successfully added to db');
    });

  }
})

// Mongoose Population
// var slavkurilyak = User.findOne({ userName: "slavkurilyak" });
// console.log('slavkurilyak', slavkurilyak);
// var ericlee = User.findOne({ userName: "ericlee" });
// console.log('ericlee._id', ericlee._id);

// slavkurilyak
// .exec(function (err, person) {
//   if (err) return handleError(err);
//   console.log('person', person);
// })

// User.findOne({userName: "slavkurilyak"}, function(err, user){
//   slavkurilyak = user._id;
// })
// .populate({
//   path: 'contactsArray',
//   match: 'new'
//   select: 'userName -_id',
//   options: { limit: 5 }
// })
// .exec()

// var samroberts = new User({ _id: 0, userName: "samroberts", email: "sroberts@outter.io", password: "Password123", loginAttempts: 0 });

// samroberts.save(function (err) {
//   if (err) return handleError(err);
  
//   var tomcruise = new User({ 
//     _id: 1, 
//     userName: "tomcruise", 
//     email: "tcruise@outter.io", 
//     password: "Password123", 
//     loginAttempts: 0,
//     _creator: samroberts._id    // assign the _id from the person
//   });
  
//   tomcruise.save(function (err) {
//     if (err) return handleError(err);
//     // thats it!
//   });
// })