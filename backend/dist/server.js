"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsonServer = require("json-server");
var fs = require("fs");
var https = require("https");
var authenticate_1 = require("./authenticate");
var authorizate_1 = require("./authorizate");
var server = jsonServer.create();
var router = jsonServer.router("../db.json");
var middlewares = jsonServer.defaults();
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.post('/login', authenticate_1.authenticate);
server.use('/orders', authorizate_1.authorizate);
// Use default router
server.use(router);
var options = {
    cert: fs.readFileSync('./keys/cert.pem'),
    key: fs.readFileSync('./keys/key.pem')
};
https.createServer(options, server).listen(3001, function () {
    console.log("JSON Server is running on https://localhost:3001");
});
//# sourceMappingURL=server.js.map