const express = require('express');
const { createUser, getUser, getUsers } = require('./userService');

const router = express.Router();

router.get('/user/:userId', (req, res) => {
  getUser(req.params.userId)
    .then(user => {
        res.json(user);
    })
    .catch(error => {
        res.json({error})
     })
});

router.get('/users', (req, res) => {
  getUsers()
    .then(users => {
        res.json(users);
    })
    .catch(error => {
        res.json({error})
     })
});

router.post('/user', (req, res) => {
  createUser(req.body);
  res.sendStatus(201);
});

router.put('/user', (req, res) => {
  res.send('Hello World!');
});

router.delete('/user', (req, res) => {
  res.send('Hello World!');
});
module.exports = router;
