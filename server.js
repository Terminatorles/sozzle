var express = require('express');
var app = express();


var server;

app.use(express.static(__dirname+ '/'));

app.get('/', function(req, res){
    res.sendFile('index.html');
});


server = app.listen(2086);

console.log('server is up');
