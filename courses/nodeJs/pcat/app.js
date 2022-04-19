import express from 'express';
import path from 'path';

const app = new express();

//express.static() bir middleware fonksiyondur.
app.use(express.static('public'));

// index sayfasına yapılan get isteği varsa, response olarak Merhaba gönder
app.get('/', (req, res) => {
  res.sendFile(path.resolve('temp/about.html'));
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı`);
});
