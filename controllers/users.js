const passport = require('passport');
User = require('../model/UserModel');

exports.login = (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/#/',
    failureRedirect: '/#/register-login'
  });
}

exports.logout = (req, res, next) => {
  req.logout();
  res.redirect('/');
}

exports.register = (req, res, next) => {
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
              : res.json({ success: true });
          })
        );
  });
}
