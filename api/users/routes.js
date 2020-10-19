
const Users = require('./controller');

module.exports = function(router) {
    router.post('/user', Users.createUser);
    router.get('/list-user', Users.getUsers);
    router.get('/user/:name', Users.getUser);
    router.put('/user/:id', Users.updateUser);
    router.delete('/user/:id', Users.removeUser);
}