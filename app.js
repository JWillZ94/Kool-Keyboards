const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const http = require('http');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send({ express: 'here we are' });
});

app.listen(port, () => {
  console.log('server up');
});
