import express from 'express';
import mongoose from 'mongoose';
import pageRouter from './routes/pageRoute.js';
import courseRouter from './routes/courseRoute.js';

const app = express();

//Connect DB
mongoose.connect('mongodb://localhost/smartedu-db',).then( () => {
  console.log("Db connect success")
});

//Template Engine
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public')); //statik dosyalarımız nerede?

//ROUTE
app.use('/', pageRouter);
app.use('/courses', courseRouter);


const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
