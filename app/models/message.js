var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MessageSchema = new Schema({
  from: String,
  to: String,
  body: String,
  category: String
});

module.exports = mongoose.model('Message', MessageSchema);