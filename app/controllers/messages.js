var mongoose = require('mongoose'),
    Message = mongoose.model('Message');
 
// ALL
exports.messages = function(req, res){
  Message.find(function(err, messages) {
    if (err) {
      res.json(500, err);
    } else {    
      res.json({messages: messages});
    }
  });
};

// GET
exports.message = function (req, res) {
  var id = req.params.id;
  Message.findOne({ '_id': id }, function(err, message) {
    if (err) {
      res.json(404, err);
    } else {
      res.json(200, {message: message});
    }
  });
};

// POST
exports.addMessage = function (req, res) {
  
  var message;
    
  if(typeof req.body.message == 'undefined'){
    return res.json(500, {message: 'message is undefined'});
  }

  message = new Message(req.body.message);

  message.save(function (err) {
    if (!err) {
      console.log("created message");
      return res.json(201, message.toObject());
    } else {
       return res.json(500, err);
    }
  });

};

// PUT
exports.editMessage = function (req, res) {
  var id = req.params.id;

  Message.findById(id, function (err, message) {
  
    if(typeof req.body.message["from"] != 'undefined'){
      message["from"] = req.body.message["from"];
    }  
  
    if(typeof req.body.message["to"] != 'undefined'){
      message["to"] = req.body.message["to"];
    }  
  
    if(typeof req.body.message["body"] != 'undefined'){
      message["body"] = req.body.message["body"];
    }  
  
    if(typeof req.body.message["category"] != 'undefined'){
      message["category"] = req.body.message["category"];
    }  
  
    return message.save(function (err) {
      if (!err) {
        console.log("updated message");
        return res.json(200, message.toObject());        
      } else {
       return res.json(500, err);
      }
      return res.json(message);
    });
  });

};

// DELETE
exports.deleteMessage = function (req, res) {
  var id = req.params.id;
  Message.findById(id, function (err, message) {
    return message.remove(function (err) {
      if (!err) {
        console.log("removed message");
        return res.send(204);
      } else {
        console.log(err);
        return res.json(500, err);
      }
    });
  });
};

// GET (MESSAGES/TO)
exports.messagesTo = function (req, res) {
  var to = req.params.id;
  Message.find({ 'to': to }, function(err, message) {
    if (err) {
      res.json(404, err);
    } else {
      res.json(200, {message: message});
    }
  });
};