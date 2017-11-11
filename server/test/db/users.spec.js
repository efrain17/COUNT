let usersDB = require('../../db/users');

describe('usersDbTests', ()=> {

  fit('ingreso de usuario', (done) => {
    usersDB.saveUser({cedula: 'user3Cedula'})
    .then((createdUser) => {
      expect(createdUser._id).toBeDefined();
      expect(createdUser.cedula).toBe('user3Cedula');
        usersDB.getUsers({ _id: createdUser._id })
        .then(([user]) => {
          expect(user.cedula).toBe('user3Cedula');
          done();
        });
    });
  });

});