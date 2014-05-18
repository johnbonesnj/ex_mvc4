var express = require('express'),
  mongoose = require('mongoose'),
  fs = require('fs'),
  config = require('./config/config');

mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

var modelsPath = __dirname + '/app/models';
fs.readdirSync(modelsPath).forEach(function (file) {
  if (file.indexOf('.js') >= 0) {
    require(modelsPath + '/' + file);
  }
});

var app = express();

require('./config/express')(app, config);
require('./config/routes')(app);


app.use(function(req, res) {
  res.status(404).render('404', { title: '404' });
});

var server = app.listen(config.port, function() {
  console.log("Server running @: " + 'http://' + server.address().address + ':' + server.address().port);
});
