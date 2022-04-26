import express from "express";
import mongoose from 'mongoose';
import path from 'path';
import ejs from 'ejs';
import methodOverride from 'method-override';
import Post from "./models/Post.js";
import * as pageController from './controllers/pageControllers.js'
import * as postController from './controllers/postControllers.js'

const app = new express();

//connect  DB
mongoose.connect('mongodb+srv://mudegirmenci:SFEH17Saz5sesKxv@cluster0.pvhra.mongodb.net/cleanblog-db?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


//TEMPLATE ENGINE
app.set('view engine', 'ejs');


//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

//ROUTE
//Page Controllers
app.get('/',pageController.getRootPage );
app.get('/about', pageController.getAboutPage);
app.get('/add_post', pageController.getAddPage);
app.get('/post', pageController.getPostPage);  // ana sayfada posta tıklandığında single post gösterecek post.ejs sayfasını çağırır.
app.get('/posts/edit/:id', pageController.getEditPage)

//Post Controllers
app.get('/posts/:id', postController.getPost ); // tekil sayfa requestlerini karşıla
app.post('/posts', postController.createPost);  //get data from user POST method
app.put('/posts/:id', postController.updatePost);
app.delete('/posts/:id', postController.deletePost);

const port = process.env.PORT || 5000


app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı`)
})