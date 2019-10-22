const restify = require("restify");

const server = restify.createServer();

const routesProfile = require('./src/profile/profile.route');
routesProfile(server);

module.exports = server;