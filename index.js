var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.write('Hello World ! Nodemon is working !');
  res.end();
});

app.listen(3000, function(){
  console.log('Listening on port: 3000');
});
