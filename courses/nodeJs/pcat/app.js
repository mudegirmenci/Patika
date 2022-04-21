import express from 'express';
import mongoose from 'mongoose';
import ejs from 'ejs';
import Photo  from './models/Photo.js';


const app = new express();

//connect  DB
mongoose.connect('mongodb://localhost/pcat-db', {
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
  //veritabanından fotoğrafları çek
  const photos = await Photo.find( {}) 
  //çekilen fotoları template engine gönder
  res.render('index', { photos });
});

app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add', (req, res) => {
  res.render('add');
});
//Post olarak gönderilen form verilerini  yakala ve model yardımıyla veritabanına gönder
app.post('/photos', async (req, res) => {
 //gelen verileri veritabanına işlemesi için Photo modeline gönder. 
 //await ile fotoğraf veritabanına işlenene kadar bekle
  await Photo.create(req.body)
  //fotoğraf yükleme işlemi bitince yönlendir.
 res.redirect('/')
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı`);
});
