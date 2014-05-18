var express = require('express');
var compress = require('compression');
var favicon = require('serve-favicon');
var morgan  = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var dust = require('dustjs-linkedin');
require('dustjs-helpers');
var cons = require('consolidate');

var hour = 3600000;
var day = (hour * 24);
var week = (day * 7);
var month = (day * 30);

module.exports = function(app, config) {
  app.use(compress());
  app.use(express.static(config.root + '/public'), { maxAge: week });
  app.set('port', config.port);
  app.set('views', config.root + '/app/views');
  app.engine('dust', cons.dust);
  app.set('view engine', 'dust');
  app.use(favicon(config.root + '/public/img/favicon.ico'));
  app.use(morgan({ format: 'dev', immediate: true }));
  app.use(bodyParser());
  app.use(methodOverride());
};
