import express from 'express';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import path from 'path';
import fs from 'fs';
import ejs from 'ejs';
import methodOverride from 'method-override';
import { Photo } from './models/Photo.js';
import * as photoController from './controllers/photoControllers.js';
import * as pageController from './controllers/pageControllers.js';

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
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

//ROUTE
//Photo Controllers
app.get('/photos/:id', photoController.getPhoto); // Tekil sayfa yönlendirmesi
app.get('/', photoController.getPhotos);
app.post('/photos', photoController.createPhoto); //Post olarak gönderilen form verilerini  yakala ve model yardımıyla veritabanına gönder
app.put('/photos/:id', photoController.updatePhoto);
app.delete('/photos/:id', photoController.deletePhoto);

//Page Controllers
app.get('/photos/edit/:id', pageController.getEditPage);
app.get('/about', pageController.getAboutPage);
app.get('/add', pageController.getAddPage);

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı`);
});
