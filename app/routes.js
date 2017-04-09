var express = require("express");
var app = express();
var path = require('path');
var PythonShell = require('python-shell');//initializing pythonshell


//mongo connection
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/frankencoffee';

// Use connect method to connect to the server
MongoClient.connect(url, function (err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db.close();
});


//create router object
var router = express.Router();
module.exports = router;

//home
router.get('/', function (req, res) {
  res.render('pages/index', {
    title: 'Home'
  });
});

//controls
router.get('/controls', function (req, res) {
  res.render('pages/controls', {
    title: 'Controls'
  });
});

//contact
router.get('/contact', function (req, res) {
  res.render('pages/contact',  {
    title: 'Contact'
  });

  var pyshell = new PythonShell("/public/test.py");

  pyshell.send('Downey is a fggit');

  pyshell.on('message', function (message) {
    //ontvangt msg van python (print)
    console.log(message);
  });

  //stopt het process
  pyshell.end(function (err) {
    if (err) throw err;
    console.log('finished');
  });


  /*PythonShell.run("/public/test.py", function (err) {
     if (err) throw err;
     console.log('finished');
   });*/
});

router.get("/refreshwater",function(req,res) {
  //execute python script check in the controls get
  res.redirect("/controls");
});


