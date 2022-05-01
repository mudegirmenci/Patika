### 1-Smartedu Projesi
Bu bölümde Smartedu projemizi yapmaya başlayacağız. Bu projemizde Smartedu eğitim portali template kullanılmıştır. Bu projemizde üzerinde konuşulacak bazı konu başlıkları:

* Flash mesajlar
* Kullanıcı kontrolü ve doğrulama
* Kullanıcı girişi
* Özel Middleware
* Şifre gizleme
* Kategori oluşturma
* "Search" alanı
* Mail gönderimi
* Session kavramı
* Admin alanı
* Postman kullanımı
* Modeller arası ilişkiler
* Slugify

### 2- init

- [x] `npm init` ile prohemizin başlangıç ayarlarını yapalım.
- [x] `npm i express` ile express modülünü kuralım.
- [x] `npm i -D nodemon` ile nodemon modülünü kuralım. **package.json** da start bölümüne `nodemon app.js` yapalım.
- [x] **pcat** klasöründen **.prettier** dosyasını alalım.
- [x] **.gitignore** dosyamızı alalım.
- [x] `npm i ejs` ile template engine kuralım.
- [x] **public** ve **views** klasör içeriklerini ayarlayalım.
- [x] **partials** klasörümüzün içeriğini oluşturalım.
- [x] **views** klasöründeki dönüştürme işlemlerini ve **app.js** router işlemlerini yaptık.

### 3- Routing
- [x] **routes** klasörünü oluşturup **pageRoute** dosyasını yazalım.
- [x] Burada express routing işlemlerini kullanıyoruz: https://expressjs.com/en/guide/routing.html

### 4- Model
- [x] **mongoose** indir yapılandır.
### 5- Kursları Listeleme yapıldı
### 6- Tekil Kurs Sayfası ve Slugify
### 7- Kategoriler 
### 8- Register sayfası ve bcrypt
### 9- Login Sayfası
- [x] **autController** dosyasında ` const user =await  User.findOne({ email })` yapısını kullandık. Yoksa HEADER hatası veriyor.
### 10- Session
- [x] `npm i express-session`
### 11- Session Login
### 12- Session Logout
- [x] Sunucu restart edildiğinde oturumu kaybetmemek için **connect-mongo** paketi ile oturum bilgilerini veritabanında saklıyoruz.
### 13- Kişiye Özel İçerik
### 14- Özel Middleware

- [x] Duplicate query hatasını şu şekilde düzelttim:
```

export default async (req, res, next) => {
   await User.findById(req.session.UserID, (err, user) => {
   if (!err || user) {
       next()
   } else {
       throw err
   }
  
 }).clone().catch(function(err){ console.log(err)});
};

 ```

 ### 15- Kullanıcı Rolleri


