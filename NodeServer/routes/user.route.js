const express = require('express');
const passport = require('passport');
const router = express.Router();
const { addLocalUser, logoutUser, getUsers } = require('../controllers/user.controller');

router
  .post('/register', addLocalUser)
  .post('/login', passport.authenticate('local', { successRedirect: '/users', failureRedirect: '/login' }))
  .get('/logout', logoutUser)
  .get('/login/facebook', passport.authenticate('facebook'))
  .get('/login/facebook/callback', passport.authenticate('facebook', { successRedirect: '/users', failureRedirect: '/login' }))
  .get('/users', getUsers);

module.exports = router;
