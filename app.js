const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const http = require('http');
const cors = require('cors');

const app = express();

// Middleware ==========================

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

// Database ============================

mongoose.connect('mongodb://localhost/kool-keyboards');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'database connection error: '));
db.once('open', () => {
  console.log('database up');
});

// Routes ==============================

const kbs = require('./routes/keyboardDataRoute');
app.use('/kbs', kbs);
const users = require('./routes/userRoute');
app.use('/users', users);

// Server ==============================

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send({ hey: 'test' });
});

app.listen(port, () => {
  console.log('server up');
});
