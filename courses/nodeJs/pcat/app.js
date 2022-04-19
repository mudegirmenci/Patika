import express from 'express';

const app = new express();


// index sayfasına yapılan get isteği varsa, response olarak Merhaba gönder
app.get('/', (req,res) => {
    
    const photo = {
        id : 1,
        name: "Photo Name",
        description: "Photo Description"
    }
    res.send(photo)
    //res.send("Merhaba")
} )

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı`);
});
