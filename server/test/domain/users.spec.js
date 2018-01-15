let usersDomain = require('../../domain/users');
let usersDB = require('../../db/users');

describe('prueba de usuarios en la capa domain', ()=> {

  beforeEach(() => {
    spyOn(usersDB, 'saveUser').and.returnValue(Promise.resolve('user'));
  })

  it('Intento de ingresar usuarios', (done)=> {
    usersDomain.createUser('userData')
    .then((result) => {
      expect(usersDB.saveUser).toHaveBeenCalledWith('userData');
      expect(result).toBe('user');
      done();
    })
  });

  it('Intento de ingresar usuarios vacios', (done)=> {
    usersDomain.createUser()
    .then(() => {
      done.fail('Permitio ingresar usuarios vacios');
    })
    .catch((error) => {
      expect(error).toBe('Missing fields');
      done();
    })
  });
});