const express = require('express');
const mongoose = require('mongoose');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const path = require('path');

// require routes
const index = require('./routes/index');

const app = express();

app.set('view engine','ejs');
var port = (process.env.PORT || 3000);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

const db= "mongodb://localhost:27017/lab";
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true })
.then((result) => {app.listen(port); console.log('Connected to DB!');})
.catch(err=>console.log(err));


// Mount routes
app.use('/', index);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});
  
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err)
  res.render('error');
});

