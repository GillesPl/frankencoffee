var express = require("express");
var path = require('path');


var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/frankencoffee';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db.close();
});


//create router object
var router = express.Router();


module.exports = router;

//home
router.get('/', function(req, res) {  
  res.render('pages/index', {
    title : 'Home'
  });
});

//about
router.get('/about',function(req,res){
 res.render('pages/about' , {
   title : 'About'
 });
});

//contact
router.get('/contact',function(req,res){
    res.render('pages/contact', {
      title : 'Contact'
    });
});

//contact post
router.post('/contact',function(req,res){
    
})

