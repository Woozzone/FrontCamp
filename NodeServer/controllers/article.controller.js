const ArticleModel = require('../models/article.model');

exports.test = (req, res) => {
  res.send('Greetings from the Test controller!');
};

exports.create = (req, res) => {
  const article = new ArticleModel({
    author: req.body.author,
    title: req.body.title,
    description: req.body.description,
    publishedAt: new Date()
  });

  article.save(err => {
    if (err) {
      return next(err);
    }
    res.send('Article Created successfully');
  });
};
