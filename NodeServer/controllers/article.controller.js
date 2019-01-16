const ArticleModel = require('../models/article.model');

exports.getArticles = (req, res, next) => {
  ArticleModel.find((err, articles) => {
    if (err) {
      return next(err);
    }

    res.status(200).send(articles);
  });
};

exports.getArticle = (req, res, next) => {
  ArticleModel.findById(req.params.id, (err, article) => {
    if (err) {
      return next(err);
    }

    res.status(200).send(article);
  });
};

exports.addArticle = (req, res, next) => {
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
  
    res.status(201).end();
  });
};

exports.updateArticle = (req, res, next) => {
  const payload = {
    ...req.body,
    updatedAt: new Date()
  }

  ArticleModel.findByIdAndUpdate(req.params.id, payload, { new: true }, (err, article) => {
    if (err) {
      return next(err);
    }

    res.status(200).send(article);
  });
};

exports.deleteArticle = (req, res, next) => {
  ArticleModel.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      return next(err);
    }

    res.status(200).end();
  });
};
