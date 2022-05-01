import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import MongoStore from 'connect-mongo'
import pageRouter from './routes/pageRoute.js';
import courseRouter from './routes/courseRoute.js';
import categoryRouter from './routes/categoryRoute.js';
import userRouter from './routes/userRoute.js';

const app = express();

//Connect DB
mongoose.connect('mongodb://127.0.0.1:27017/smartedu-db').then(() => {
  console.log('Db connect success');
});

//Template Engine
app.set('view engine', 'ejs');

//Global Variable
global.userIN = null;

//Middlewares

app.use(express.static('public')); //statik dosyalarımız nerede?
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(
  session({
    secret: 'my_keyboard_cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create( { mongoUrl: 'mongodb://127.0.0.1/smartedu-db'})
  })
);
//ROUTE
app.use('*', (req, res, next) => {
  userIN = req.session.userID;
  next();
});
app.use('/', pageRouter);
app.use('/courses', courseRouter);
app.use('/categories', categoryRouter);
app.use('/users', userRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
