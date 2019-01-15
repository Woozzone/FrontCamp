const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Routes.
const articleRoute = require('./routes/article.route');

// DB setup.
const DB_URL = 'mongodb://userino:123qwe@ds129462.mlab.com:29462/news';
mongoose.connect(DB_URL, {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/articles', articleRoute);

app.listen(3000, () => {
  console.log('server is running');
});
