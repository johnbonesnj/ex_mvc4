var mongoose = require('mongoose'),
    Article  = require('../models/article')

exports.index = function(req, res){
  Article.find(function(err, articles){
    if(err) throw new Error(err);
    res.render('home/index', {
      title: 'Generator-Express MVC',
      articles: articles,
      active: 'home'
    });
  });
};

exports.simple = function(req, res) {
  res.send({"Hello": "World"});
}