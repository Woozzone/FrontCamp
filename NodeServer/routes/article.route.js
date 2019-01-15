const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article.controller');

router.get('/', articleController.test);
router.post('/', articleController.create);

module.exports = router;