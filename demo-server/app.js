var jsonServer = require('../node_modules/json-server')
var server = jsonServer.create() // Returns an Express server
var router = jsonServer.router('demo-server/db.json') // Returns an Express router
server.use(jsonServer.defaults) // logger, static and cors middlewares
server.use(router) // Mount router on '/'
server.listen(5000);

/*var express = require('../node_modules/http-server');
var app = express.createServer();
app.listen(8080);*/

// Authentication module.
var express = require("../node_modules/express");
var path    = require("path");

// Application setup.
var app = express();
app.get('/', function(req, res){
    if (!req.user) {
        res.redirect('/pages/auth/auth.html');
    }else{
        res.sendFile(path.join(__dirname+'\\..\\index.html'));
    }
});
app.get('/pages/auth/auth.html', function(req, res){
    res.sendFile(path.join(__dirname+'\\..\\pages/auth/auth.html'));
});
app.use(express.static(path.join(__dirname, '..\\')));
app.listen(8080);