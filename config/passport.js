User = require('../model/UserModel');
local = require('./passport-strategies/local');

const configurePassport = (app, passport) => {
  passport.serializeUser((user, done) => done(null, user.id));

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user));
  });

  passport.use(local);
}

module.exports = configurePassport;
