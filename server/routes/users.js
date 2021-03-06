'use strict';

let usersDomain = require('../domain/users');
let serviceToken = require('../tools/token_tools');

exports.createUser = function (req, res, next) {
  let userData = req.body;
  usersDomain.createUser(userData)
  .then(user => {
    res.send({token: serviceToken.createToken(user), user: user});
  })
  .catch(err => res.status(400).send(err));
}

exports.getUsers = function (req, res, next) {
  usersDomain.getUsers()
  .then(group => res.send(group))
  .catch(err => res.status(400).send(err));
}