// server.js
var express = require('express');
var ejs = require('express-ejs-layouts');
var app = express();
var port = 8080;



//use ejs en express layouts
app.set('view engine','ejs');
app.use(ejs);

var router = require('./app/routes');
//express middleware
app.use('/' , router);


//set static files (css, images)
app.use(express.static(__dirname + '/public'));

// start the server
app.listen(port, function() {
  console.log('app started on localhost:' + port);
});

