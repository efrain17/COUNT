var assert = require("assert");
var usersDomain = require('../domain/users');

describe('usersTests', function() {
    it('Try to get list user', function(done) {
        usersDomain.getUsers()
        .then(users => {
            assert(users);
            done();
        })
        .catch(err => {
            console.log(err);
        })
    });
});