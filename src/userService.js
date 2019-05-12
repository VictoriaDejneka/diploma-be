const pgp = require('pg-promise')(/*options*/);
const db = pgp("postgres://postgres:admin@localhost:5432/diploma");

module.exports.createUser =  function(user) {
    db.none('INSERT INTO users(user_name) VALUES($1)', [user.name]);
}

module.exports.getUser =  function(id) {
    return db.one('select * from users where users.id = $1', [id]);
}

module.exports.getUsers =  function() {
    return db.query('select * from users',[]);
}