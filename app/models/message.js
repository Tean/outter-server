var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MessageSchema = new Schema({
  from: String,
  to: [],
  body: String,
  category: String,
  sent: { type: Date, default: Date.now }
});

/* JSON equivalent
{
  message: {
    _id: "53b10a0d6b8e657629000003",
    from: "akong@outter.io",
    body: "Have you heard of Hackernews.com?",
    category: "question",
    __v: 0,
    sent: "2014-06-30T06:56:13.823Z",
    to: [
      "skurilyak@outter.io",
      "elee@outter.io"
    ]
  }
}
*/

module.exports = mongoose.model('Message', MessageSchema);