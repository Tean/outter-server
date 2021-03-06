var mongoose = require('mongoose'),
    Message = mongoose.model('Message');

// GET (/api/v1/messages)
exports.messages = function(req, res){
  'use strict';
  Message.find(function(err, messages) {
    if (err) {
      res.json(500, err);
    } else {
      res.json({messages: messages});
    }
  });
};

// GET (/api/v1/message/:id)
exports.message = function (req, res) {
  'use strict';
  var id = req.params.id;
  Message.findOne({ '_id': id }, function(err, message) {
    if (err) {
      res.json(404, err);
    } else {
      res.json(200, {message: message});
    }
  });
};

// POST (/api/v1/message)
exports.addMessage = function (req, res) {
  'use strict';
  if(typeof req.body === 'undefined') {
    return res.json(500, {message: 'message is undefined'});
  }

  //-- Ensure sender is correct
  req.body.from = req.user.userName;
  //-- TODO: Ensure sender's contacts are correct?

  var message = new Message(req.body);

  message.save(function (err) {
    if (!err) {
      console.log('created message');
      return res.json(201, message.toObject());
    } else {
       return res.json(500, err);
    }
  });

};

// PUT (/api/v1/message/:id)
exports.editMessage = function (req, res) {
  'use strict';
  var id = req.params.id;

  Message.findById(id, function (err, message) {

    if(typeof req.body.message['.from'] !== 'undefined'){
      message['.from'] = req.body.message['.from'];
    }

    if(typeof req.body.message['.to'] !== 'undefined'){
      message['.to'] = req.body.message['.to'];
    }

    if(typeof req.body.message['.body'] !== 'undefined'){
      message['.body'] = req.body.message['.body'];
    }

    if(typeof req.body.message['.category'] !== 'undefined'){
      message['.category'] = req.body.message['.category'];
    }

    return message.save(function (err) {
      if (!err) {
        console.log('updated message');
        return res.json(200, message.toObject());
      } else {
       return res.json(500, err);
      }
      return res.json(message);
    });
  });

};

// DELETE (/api/v1/message/:id)
exports.deleteMessage = function (req, res) {
  'use strict';
  var id = req.params.id;
  Message.findById(id, function (err, message) {
    return message.remove(function (err) {
      if (!err) {
        console.log('removed message');
        return res.send(204);
      } else {
        console.log(err);
        return res.json(500, err);
      }
    });
  });
};

// GET (/api/v1/messages/to/:id)
exports.messagesTo = function (req, res) {
  'use strict';
  var to = req.params.id;
  Message.find({ 'to': to }, function(err, message) {
    if (err) {
      res.json(404, err);
    } else {
      res.json(200, {message: message});
    }
  });
};

// GET (/api/v1/messages/to/:id/fyis)
exports.messagesToByCategoryFyi = function (req, res) {
  'use strict';
  var to = req.params.id;
  Message.find({ 'to': to, category: 'fyi' }, function(err, message) {
    if (err) {
      res.json(404, err);
    } else {
      res.json(200, {message: message});
    }
  });
};

// GET (/api/v1/messages/to/:id/questions)
exports.messagesToByCategoryQuestion = function (req, res) {
  'use strict';
  var to = req.params.id;
  Message.find({ 'to': to, category: 'question' }, function(err, message) {
    if (err) {
      res.json(404, err);
    } else {
      res.json(200, {message: message});
    }
  });
};

// GET (/api/v1/messages/to/:id/responses)
exports.messagesToByCategoryResponse = function (req, res) {
  'use strict';
  var to = req.params.id;
  Message.find({ 'to': to, category: 'response' }, function(err, message) {
    if (err) {
      res.json(404, err);
    } else {
      res.json(200, {message: message});
    }
  });
};

// GET (/api/v1/messages/to/:id/action-requests)
exports.messagesToByCategoryActionRequest = function (req, res) {
  'use strict';
  var to = req.params.id;
  Message.find({ 'to': to, category: 'action-request' }, function(err, message) {
    if (err) {
      res.json(404, err);
    } else {
      res.json(200, {message: message});
    }
  });
};

// GET (/api/v1/messages/from/:id)
exports.messagesFrom = function (req, res) {
  'use strict';
  var from = req.params.id;
  Message.find({ 'from': from }, function(err, message) {
    if (err) {
      res.json(404, err);
    } else {
      res.json(200, {message: message});
    }
  });
};
