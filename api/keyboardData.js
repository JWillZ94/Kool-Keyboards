const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
Kb = require('../model/keyboardModel');

router.get('/', (req, res) => {
  Kb.find((err, kbs) => {
    if (err) throw err;
    res.json({ kbs: kbs });
  });
});

router.get('/:id', (req, res) => {
  Kb.findById(req.params.id, (err, kb) => {
    if (err) throw err;
    res.json({ kb: kb });
  });
});

router.post('/', (req, res) => {
  Kb.create(req.body, (err, kb) => {
    if (err) throw err;
    res.json(kb);
  });
});

router.delete('/:id', (req, res) => {
  Kb.findByIdAndDelete(req.params.id, req.body, (err, kb) => {
    if (err) throw err;
    res.send("deleted...");
  })
});

router.put('/', (req, res) => {
  console.log(req.body);
  // Kb.updateMany({ name: req.body.item.name }, { $set: { amount_in_stock: req.body.newAmt }}, (err, kbs) => {
  //   if (err) throw err;
  //   res.json({ kbs: kbs });
  // });
});

module.exports = router;
