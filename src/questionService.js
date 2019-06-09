const pgp = require('pg-promise')(/*options*/);
const db = pgp("postgres://postgres:admin@localhost:5432/diploma");

// module.exports.createType =  function(name) {
//   db.none('INSERT INTO poll_type(name) VALUES($1)', [name]);
// }

module.exports.getUser =  function(id) {
  return db.one('select * from users where users.id = $1', [id]);
}

module.exports.getQuestions =  function(typeId) {
  return db.query('select questions.id, questions.name from questions inner join poll_type on questions.type_id=poll_type.id where poll_type.id=$1',[typeId]);
}