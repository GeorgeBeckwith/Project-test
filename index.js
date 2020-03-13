var express = require('express')
var app = express()
var server = require('http').Server(app)
var port = process.env.PORT || 3000;

server.listen(port, error => {
    if (error)
    {
        console.log('Server error: ' + error);
    }
    console.log('Server started! Visit http://localhost:' + port);
})