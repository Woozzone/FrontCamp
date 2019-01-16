const express = require('express');
const router = express.Router();
const { getArticles } = require('../controllers/article.controller');

router.get('/', getArticles);

module.exports = router;

