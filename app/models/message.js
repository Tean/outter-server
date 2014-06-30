var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MessageSchema = new Schema({
  from: String,
  to: [],
  body: String,
  category: String,
  sent: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', MessageSchema);