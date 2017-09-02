var db_tools = require('../tools/db_tools');
var mongoose = require('mongoose');

// crea el schema
var UserSchema = new mongoose.Schema({
    hola: String,
    lastname: String,
    completename: String,
    dni: String,
    parametro: String,
    chao: String
});

var User = mongoose.model('user', UserSchema);
exports.User = User;

exports.saveUser = function(userData) {
  var user = new User(userData);
  return new Promise((resolve, reject) => {
    user.save()
    .then(user => {
      console.log("User saved!");
      resolve(user);
    })
    .catch(err => {
      console.log("Error saving user: " + err);
      reject(err);
    });
  })
}

exports.getUsers = function(userIds) {
    return new Promise((resolve, reject) => {
        User.find({})
        .then(users => {
            resolve(users);
        })
        .catch(err => {
            console.log('error: ' + err)
            reject(err);
        })
    })
}