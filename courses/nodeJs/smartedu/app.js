import express from 'express';
import mongoose from 'mongoose';
import pageRouter from './routes/pageRoute.js';
import courseRouter from './routes/courseRoute.js';
import categoryRouter from './routes/categoryRoute.js';

const app = express();

//Connect DB
mongoose.connect('mongodb://127.0.0.1:27017/smartedu-db').then(() => {
  console.log('Db connect success');
});


//Template Engine
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public')); //statik dosyalarımız nerede?
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//ROUTE
app.use('/', pageRouter);
app.use('/courses', courseRouter);
app.use('/categories', categoryRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
