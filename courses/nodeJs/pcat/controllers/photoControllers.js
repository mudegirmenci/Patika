import fs from 'fs';
import path from 'path';
import { Photo } from '../models/Photo.js';

export const getPhoto = async (req, res) => {
  const photo = await Photo.findById(req.params.id);
  //çekilen fotoları template engine gönder
  res.render('photo', { photo });
};

export const getPhotos = async (req, res) => {
  //veritabanından fotoğrafları çek
  const photos = await Photo.find({}).sort('-dateCreated');
  //çekilen fotoları template engine gönder
  res.render('index', { photos });
};

export const updatePhoto = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  photo.title = req.body.title;
  photo.description = req.body.description;
  photo.save();
  res.redirect(`/photos/${req.params.id}`);
};

export const createPhoto = async (req, res) => {
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
};

export const deletePhoto = async (req, res) => {
  const __dirname = path.resolve();
  const photo = await Photo.findOne({ _id: req.params.id });
  let deletedImage = __dirname + '/public' + photo.image;
  fs.unlinkSync(deletedImage);
  await Photo.findByIdAndDelete(req.params.id);
  res.redirect('/');
};
