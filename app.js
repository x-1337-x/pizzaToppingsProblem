var express = require('express');
var fs = require('fs');
var app = express();
var port = 7499;

var toppings;


app.get('/', function(req, res) {
  res.send("Hey, fuckface!");
});

app.listen(port, function() {
  console.log('App listening on port 7499');
});




fs.readFile('./pizzas.json', 'UTF8', function(err, data) {
  console.log("reader ran");
  toppings = data;
  console.log(typeof toppings);
});
