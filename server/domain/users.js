var usersDB = require('../db/users');

// validaciones

exports.createUser = function(userData) {
    return new Promise((resolve, reject) => {
      if (!userData) return reject('Missing fields');
      usersDB.saveUser(userData)
      .then(user => resolve(user))
      .catch(err => reject(err))
    });
};

exports.getUsers = function() {
    return new Promise(function(resolve, reject) {
        usersDB.getUsers()
            .then(users => {
                resolve(users);
            })
            .catch(err => {
                reject(err);
            })
    });
}