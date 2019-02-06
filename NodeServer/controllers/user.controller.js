const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const dotenv = require('dotenv');
const UserModel = require('../models/user.model');

// Environment Variables Setup.
dotenv.config();

const FB_OPTIONS = {
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: 'http://localhost:3000/login/facebook/callback'
};

const handleLocalLogin = (username, password, done) => {
  UserModel.findOne({ username: username, provider: 'local' }, (err, user) => {
    if (err) {
      return done(err);
    }

    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }

    if (user.password !== password) {
      return done(null, false, { message: 'Incorrect password.' });
    }

    return done(null, user);
  });
};

const handleFacebookLogin = (accessToken, refreshToken, profile, done) => {
  UserModel.findOne({ facebookId: profile.id }, (err, user) => {
    if (err) {
      return done(err);
    }

    if (!user) {
      user = new UserModel({
        facebookId: profile.id,
        username: profile.displayName,
        password: '',
        provider: profile.provider
      });

      user.save((err) => {
        err && done(err);
        return done(err, user);
      });
    } else {
      return done(err, user);
    }
  });
};

passport.use(new LocalStrategy(handleLocalLogin));
passport.use(new FacebookStrategy(FB_OPTIONS, handleFacebookLogin));
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

exports.addLocalUser = (req, res, next) => {
  const user = new UserModel({
    username: req.body.username,
    password: req.body.password,
    provider: 'local'
  });

  user.save(err => {
    if (err) {
      return next(err);
    }

    res.status(201).end();
  });
};

exports.logoutUser = (req, res) => {
  req.logout();
  res.redirect('/');
};

exports.getUsers = (req, res, next) => {
  UserModel.find((err, users) => {
    if (err) {
      return next(err);
    }

    res.status(200).send(users);
  });
};
