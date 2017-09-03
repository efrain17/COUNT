'use strict';

var users = require('./users');
var middleware = require('../tools/token_tools');

exports.assignRoutes = function (app) {
    app.post('/api/users', users.createUser);
    app.get('/api/users_total', middleware.ensureAuthenticated, users.getUsers);
}