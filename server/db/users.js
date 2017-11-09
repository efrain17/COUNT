let db_tools = require('../tools/db_tools');
let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
  cedula: { type: String, index: true, unique: true },
  nombres: String,
  apellidos: String,
  correo: String
});
// autor: { type: Schema.ObjectId, ref: "Autor" } 

let User = mongoose.model('user', UserSchema);
exports.User = User;

exports.saveUser = function(userData) {
  let user = new User(userData);
  
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
    .then(users => resolve(users))
    .catch(err => {
        console.log('error: ' + err)
        reject(err);
    })
  })
}