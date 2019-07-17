var sql = require('./db.js');

var express = require('express'),
app = express(),
bodyParser = require('body-parser');
port = process.env.PORT || 4000;

app.listen(port);

console.log('Server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('../routes/routes'); 
routes(app);