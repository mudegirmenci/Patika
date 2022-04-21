import express from "express";
import mongoose from 'mongoose';
import ejs from 'ejs';
import Post from "./models/Post.js";

const app = new express();

//connect  DB
mongoose.connect('mongodb://localhost/cleanblog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


//TEMPLATE ENGINE
app.set('view engine', 'ejs');


//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//ROUTE
app.get('/', async (req, res) => {
    const posts = await Post.find( {})
    res.render('index', { posts });
  });
  app.get('/about', (req, res) => {
    res.render('about');
  });
  app.get('/add_post', (req, res) => {
    res.render('add_post');
  });

  // ana sayfada posta tıklandığında single post gösterecek post.ejs sayfasını çağırır.
  app.get('/post', async (req, res) => {
  //  const post = await Post.find( {}) veritabanından single post çek
    res.render('post');
  });


  //get data from user POST method
  app.post('/posts', async (req, res) => {
     //gelen verileri veritabanına işlemesi için Post modeline gönder. 
     //await ile veiler veritabanına işlenene kadar bekle
     await Post.create(req.body)
     //veri yükleme işlemi bitince yönlendir.
     res.redirect('/')
  });


const port =5000;

app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı`)
})