const express = require('express');
const { getQuestions } = require('./questionService');

const router = express.Router();

router.get('/questions', (req, res) => {
  getQuestions(req.query.type_id)
    .then(users => {
        res.json(users);
    })
    .catch(error => {
        res.json({error})
     })
});

module.exports = router;
