var express = require('express');
require('marko/node-require').install();
var app = express();

app.get('/', require('./src/pages/home'));

app.listen(3000, function(){
  console.log('Listening on port: 3000');
});
