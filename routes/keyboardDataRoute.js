const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Kb = require('../model/keyboardData');

router.get('/', (req, res) => {
  Kb.find((kbs, err) => {
    if (err) {
      throw err;
    }
    res.json(kbs);
  });
});

router.get('/', (req, res) => {
  Kb.findById(req.params.id, (kb, err) => {
    if (err) {
      throw err;
    }
    res.json(kb);
  });
});

module.exports = Kb; 
