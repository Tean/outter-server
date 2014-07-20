exports.index = function(req, res){
  'use strict';
  res.render('home/index', {
    title: 'Outter Server'
  });
};
