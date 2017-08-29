'use strict';

var users = require('./users');

exports.assignRoutes = function (app) {
    app.post('/users', users.createUser);
}