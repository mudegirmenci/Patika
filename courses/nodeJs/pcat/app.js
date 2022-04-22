import express from 'express';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import path from 'path';
import fs from 'fs';
import ejs from 'ejs';
import methodOverride from 'method-override';
import Photo from './models/Photo.js';
import { fstat } from 'fs';

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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(methodOverride('_method'))

//ROUTE
app.get('/', async (req, res) => {
  //veritabanından fotoğrafları çek
  const photos = await Photo.find({}).sort('-dateCreated');
  //çekilen fotoları template engine gönder
  res.render('index', { photos });
});

app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add', (req, res) => {
  res.render('add');
});

// Tekil sayfa yönlendirmesi
app.get('/photos/:id', async (req, res) => {
  const photo = await Photo.findById(req.params.id);
  //çekilen fotoları template engine gönder
  res.render('photo', { photo });
});

//Post olarak gönderilen form verilerini  yakala ve model yardımıyla veritabanına gönder
app.post('/photos', async (req, res) => {
  const uploadDir = 'public/uploads';

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }
  const __dirname = path.resolve();
  let uploadedImage = req.files.image; //yüklenecek fotoğraf
  let uploadPath = __dirname + '/public/uploads/' + uploadedImage.name; //fotoğrafların yükleneceği klasör yolu ve fotoğraf ismi

  //yüklenen fotoğrafı uploadPath dizinine taşı ve veritabanına diğer form bilgileri ile birlikte
  //üklediğimiz dosyanın path bilgisini string olarak ekle. Bu işlemleri asenkron yap.
  uploadedImage.mv(uploadPath, async () => {
    await Photo.create({
      ...req.body,
      image: '/uploads/' + uploadedImage.name,
    });
    res.redirect('/'); // sonrasında ana sayfaya yönlendir.
  });

  //gelen verileri veritabanına işlemesi için Photo modeline gönder.
  //await ile fotoğraf veritabanına işlenene kadar bekle
  //await Photo.create(req.body);
  //fotoğraf yükleme işlemi bitince yönlendir.
  //res.redirect('/');
});

app.get('/photos/edit/:id', async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  res.render('edit', { photo });
});

app.put('/photos/:id', async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  photo.title = req.body.title
  photo.description = req.body.description
  photo.save()
  res.redirect(`/photos/${req.params.id}`)
});



const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı`);
});
