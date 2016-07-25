var express = require('express');
var app = express();

app.get('/', function (request, response) {
  response.send('<iframe width="420" height="315" src="https://www.youtube.com/embed/EVL2HRszxdY" frameborder="0" allowfullscreen></iframe>');
});

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port: ', port);
});
