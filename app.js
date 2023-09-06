const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fs = require('fs');
const indexRouter = require('./routes/index');
const adminRouter = require('./routes/admin');
const sass = require('sass');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
/**
 * Sass compiling
 */
for (let e of fs.readdirSync(path.resolve(`${__dirname}/sass`), (err, files) => files.filter((e) => path.extname(e).toLowerCase() === '.sass'))) {
  let result = sass.compile(`${__dirname}/sass/${e}`);
  fs.writeFileSync(`${__dirname}/public/stylesheets/${e.slice(0, -4)}css`, result.css);
}
/** */
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
