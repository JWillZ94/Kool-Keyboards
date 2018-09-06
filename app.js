const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const http = require('http');
const cors = require('cors');
const session = require('express-session');

const app = express();

// Middleware ==========================

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/build')));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'pst',
  cookie: { secure: true },
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

// Database ============================

mongoose.connect('mongodb://JWillZ94:104280Jw@ds239692.mlab.com:39692/kool-keyboards');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'database connection error: '));
db.once('open', () => {
  console.log('database up');
});
User = require('./model/UserModel');

// API ==============================

const kbs = require('./api/keyboardData');
app.use('/api/kbs', kbs);
const storedUsers = require('./api/userData');
app.use('/api/users', storedUsers);

// Passport =============================

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) return done(err);
      if (!user) {
        console.log('Incorrect username.');
        return done(null, false);
      }
      if (password !== user.password) {
        console.log('Incorrect password.');
        return done(null, false);
      }
      return done(null, user);
    });
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
  console.log("Logging in user: ", user.username);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => done(err, user));
  console.log("Logging out user by id: " + id);
});

app.post("/api/login", passport.authenticate('local'), (req, res) => {
  res.json(req.user);
});

app.get("/api/logout", (req, res) => {
  req.logout();
  req.session.destroy(err => {
    return err
      ? console.log("Trouble logging out of session")
      : console.log("Logged out of session successfully");
  });
  res.json({ success: 'Successfully logged out!' });
});

app.post("/api/register", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    return user
      ? (
          res.json({
            success: false,
            message: "Email already in use bro"
          })
        )
      : (
          User.create(req.body, err => {
            return err
              ? (
                  console.error(err)
                  // res.json({ success: false })
                )
              : res.json(req.body);
          })
        );
  });
});

// Server ==============================

const port = process.env.PORT || 5000;

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')));

Kb = require('./model/keyboardModel');
app.get('/api/kbs', (req, res) => {
  Kb.find((err, kbs) => {
    if (err) throw err;
    res.json({ kbs: kbs });
  });
});

app.listen(port, () => console.log('server up'));

/*
  App todos:
  - reduxform library for register/login forms
  - add the cart and total to payment section through state
  - make user go to error page if signed in with wrong username or password on login
*/
