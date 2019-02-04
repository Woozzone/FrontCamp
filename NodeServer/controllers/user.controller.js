const UserModel = require('../models/user.model');

exports.addUser = (req, res, next) => {
  const user = new UserModel({
    username: req.body.username,
    password: req.body.password
  });

  user.save(err => {
    if (err) {
      return next(err);
    }
  
    res.status(201).end();
  });
};