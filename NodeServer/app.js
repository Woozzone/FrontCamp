const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs');
const morgan = require('morgan');

// Routes Import.
const indexRoute = require('./routes');
const articleRoute = require('./routes/article.route');

// DB setup.
const DB_URL = 'mongodb://userino:123qwe@ds129462.mlab.com:29462/news';
mongoose.connect(DB_URL, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Error handlers.
const clientErrorHandler = (req, res, next) => {
  err = new Error('Page Not Found');
  err.status = 404;
  next(err);
}

const errorHandler = (err, req, res, next) => {
  res.render('error', {
    message: err.message,
    error: {}
  });
}

// App settings.
const app = express();
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Logger setting.
const logStream = fs.createWriteStream('access.log', { flags: 'a' });
app.use(morgan(':url :date[web]', { stream: logStream }));

// Routes.
app.use('/', indexRoute);
app.use('/articles', articleRoute);
app.use(clientErrorHandler);
app.use(errorHandler);

// Server Start.
app.listen(process.env.PORT || 3000, () => {
  console.log('Server is Running');
});
