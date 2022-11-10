const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();
const multer = require('multer');



const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const transactionRouter = require('./routes/transaction');
const authRouter = require('./routes/auth');
const categoryRouter = require('./routes/category');

const port = process.env.PORT || 3001;

const app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/auth', authRouter);
app.use('/transactions', transactionRouter);
app.use('/categories', categoryRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Servidor funcionando en el puerto ${port}`);
});
/////////////////////////////////////////////////////
// app.use(multer({
//   dest: path.join(__dirname, 'public/static'),
//   fileFilter: function (req, file, cb) {

//       var filetypes = /jpeg|jpg|png|gif/;
//       var mimetype = filetypes.test(file.mimetype);
//       var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

//       if (mimetype && extname) {
//           return cb(null, true);
//       }
//       cb("Error: File upload only supports the following filetypes - " + filetypes);
//   },
//   limits: {fileSize: 1000000},
// }).single('image'));
module.exports = app;
