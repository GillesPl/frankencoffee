// server.js
var express = require('express');
var ejs = require('express-ejs-layouts');
var app = express();
var port = 8080;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


//use ejs en express layouts
app.set('view engine','ejs');
app.use(ejs);

//set static files (css, images)
app.use(express.static(__dirname + '/public'));

app.use('/nm', express.static('/node_modules'))


var router = require('./app/routes');
//express middleware
app.use('/' , router);




// start the server
app.listen(port, function() {
  console.log('app started on localhost:' + port);
});

