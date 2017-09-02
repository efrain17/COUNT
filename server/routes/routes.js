'use strict';

var users = require('./users');

exports.assignRoutes = function (app) {
    app.post('/api/users', users.createUser);
    app.get('/api/users_total', users.getUsers);
}