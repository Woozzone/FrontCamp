const express = require('express');
const router = express.Router();
const {
  getArticles,
  getArticle,
  addArticle,
  updateArticle,
  deleteArticle
} = require('../controllers/article.controller');

router
  .get('/', getArticles)
  .post('/', addArticle)
  .get('/:id', getArticle)
  .put('/:id', updateArticle)
  .delete('/:id', deleteArticle);

module.exports = router;
