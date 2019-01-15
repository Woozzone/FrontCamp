const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  author: String,
  title: String,
  description: String,
  publishedAt: Date
})

module.exports = mongoose.model('Article', ArticleSchema);
