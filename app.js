var express = require('express');
var fs = require('fs');
var solution = require('./uniquePizzaToppingsSolution.js');
var app = express();
var port = 7499;

var toppings;
var output;


app.get('/', function(req, res) {
  res.send("Hey, fuckface!");
});

app.listen(port, function() {
  console.log('App listening on port 7499');
});



toppings = JSON.parse(fs.readFileSync('./pizzas.json', 'UTF8'));



console.log(typeof toppings);
output = solution.getPopularSets(toppings);
console.log(output);


fs.writeFile('./result.txt', JSON.stringify(output), function(err) {
  if(err) throw err;
  console.log('WRITTTTEN');
});