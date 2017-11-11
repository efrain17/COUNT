let usersDB = require('../../db/users');

describe('usersDbTests', ()=> {

  it('ingreso de usuario en DB', (done) => {
    usersDB.saveUser({cedula: 'user3Cedula'})
    .then((createdUser) => {
      expect(createdUser._id).toBeDefined();
      expect(createdUser.cedula).toBe('user3Cedula');
        usersDB.getUsers({ _id: createdUser._id })
        .then(([user]) => {
          expect(user.cedula).toBe('user3Cedula');
          done();
        })
    })
  });

});