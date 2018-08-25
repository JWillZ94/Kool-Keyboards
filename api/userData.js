const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
User = require('../model/UserModel');

router.get('/', (req, res) => {
  User.find((err, users) => {
    if (err) throw err;
    res.json({ users: users });
  });
});

router.get('/:id', (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) throw err;
    res.json({ user: user });
  });
});

module.exports = router;
