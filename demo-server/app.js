var jsonServer = require('../node_modules/json-server')
var server = jsonServer.create() // Returns an Express server
var router = jsonServer.router('demo-server/db.json') // Returns an Express router
server.use(jsonServer.defaults) // logger, static and cors middlewares
server.use(router) // Mount router on '/'
server.listen(5000);

var express = require('../node_modules/http-server');
var app = express.createServer();
app.listen(8080);