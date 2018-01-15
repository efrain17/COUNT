let usersDB = require('../../db/users');

describe('prueba de usuarios en DB', ()=> {

  it('ingreso de usuario', (done) => {
    usersDB.saveUser({email: 'email@hotmail.com'})
    .then((createdUser) => {
      expect(createdUser._id).toBeDefined();
      expect(createdUser.email).toBe('email@hotmail.com');
        usersDB.getUsers({ _id: createdUser._id })
        .then(([user]) => {
          expect(user.email).toBe('email@hotmail.com');
          done();
        })
    })
  });

});