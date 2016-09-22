var express = require('express');
var HOST = '192.168.20.2';
var PORT = '3000';
var app = express();

app.get('/',function(req, res){
  res.send('Hello World!');
})

app.listen(PORT,HOST,function () {
  console.log('Server On!');
});
