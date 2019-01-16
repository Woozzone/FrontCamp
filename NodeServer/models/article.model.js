const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  author: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  publishedAt: Date,
  updatedAt: Date
})

module.exports = mongoose.model('Article', ArticleSchema);
