var express = require('express');
var app = express();


app.get('/', function(req, res){
  res.send('Hello express.');
});

app.listen(3000);

console.log('app is listening at localhost:3000');

