const router = require('express').Router();
const User = require('../models/user');

// Find All
router.get('/', (req, res) => {
  User.findAll()
    .then((users) => {
      

      res.json(users);
    })
    .catch(err => res.status(500).send(err));
});

// Create new todo document
router.post('/', (req, res) => {
    User.create(req.body)
      .then(user => res.send(user))
      .catch(err => res.status(500).send(err));
  });

  module.exports = router;
