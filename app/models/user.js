var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  userName: String
});

UserSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('User', UserSchema);