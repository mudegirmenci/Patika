import express from "express";
import ejs from 'ejs';

const app = new express();



//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));

//ROUTE
app.get('/', (req, res) => {
    res.render('index');
  });
  app.get('/about', (req, res) => {
    res.render('about');
  });
  app.get('/add_post', (req, res) => {
    res.render('add_post');
  });
  app.get('/post', (req, res) => {
    res.render('post');
  });


const port =5000;

app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı`)
})