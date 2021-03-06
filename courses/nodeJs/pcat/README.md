## PCAT fotoğraf & video yükleme uygulaması yapma adımları

### 1- Çalışma Ortamı Hazırlama

- [x] pcat adında Github repository oluştur.
- [x] Github repository init işlemlerini yap:


```
echo "## PCAT" >> README.md
git init
git add README.md 
git commit -m "Workspace oluşturuldu"
git branch -M main
git remote add origin https://github.com/.....
git push -u origin main

```

- [x] Kodumuzun formatını otomatik olarka ayarlamak için Prettier extension kurulumu yap.
- [x] ` npm init ` ile projemizi hazırlıyoruz. entry point olarak **app.js** yapıyoruz.
- [x] Pretter i kullanabilmemiz için bir npm modülü indirmemiz gerekiyor. ` npm i prettier -D --save-exact ` ile kurulumu yapıyoruz. 
- [x] ` ctrl + shift + P ` ile Prettier extension ilk ayarlamaları yap.(**.prettierrc** dosyasında)
- [x] **app.js** dosyamızı oluşturalım.
- [x] Oluşturacağımız sitenin template dosyasını **temp/** klasörü içerisine al.
- [x] Node için hazır **.gitignore** dosyası bul ve içine **temp/** klasörünü de ekle.
    

### 2- Express Nodemon Kurulumu

- [x] ` npm i express --save ` ile ` express ` modülünü indiriyoruz.
- [x] ***Express*** modülünü import et

```
import express from "express";

const app = new express();

```
- [x] ` express ` modülününü import edilmesi için **package.json** dosyasında ` "type": "module", ` satırı girilmelidir.
- [x] ` nodemon ` exension indir ve yapılanmasını yap. ` nodemon ` server durdur-başlat işlemini her değişiklikte otomatik olarak yapar.

```
npm i --save-dev nodemon

```
- [x] ` --save-dev ` olarak indirmemizin nedeni, biz bu eklentiyi sadece devoloper sürecinde kullanacağız dolayısı ile dependencies olarak asıl uygulamamızın çalışmasında değil sadece geliştirme yaparken olacak. **package.json** dosyasında 

```

  "devDependencies": {
    "nodemon": "^2.0.15",
    "prettier": "2.6.2"
  },

^2.0.15 ve üstü çünkü kurulumda --save-dev kullandık 
prettier için ise exact parametresini kullandığımız için, kullanacağımız sürüm sabit olacaktır.
```
olarak görünecek.

- [x] **package.json** dosyasına aşağıdaki satıları ekleyerek, uygulamamızı manuel değil ` nodemon ` tarafından başlatılmasını sağlıyoruz. Artık uygulamızı **node app.js** olarak değil, ` npm start ` komutu kullanarak oluşturuyoruz.

```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon app.js"
  },

```
```
[mustafa@fedora pcat]$ npm start

> pcat@1.0.0 start
> nodemon app.js

[nodemon] 2.0.15
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
Sunucu 3000 portunda başlatıldı
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Sunucu 3000 portunda başlatıldı
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
Sunucu 3000 portunda başlatıldı

  ```
- [x] **app.js** dosyasında yaptığımız her değişiklikten sonra, dosyamız otomatik olarak yeniden `node app.js` komutu verilmiş gibi olacak.

### 3- Statik Dosyalar - Middleware

- [x] `express` statik files rehberini incele. [Express statik files rehberi](https://expressjs.com/en/starter/static-files.html)
- [x] `app.use(express.static('public'))` şeklinde kullanım ile statik dosyalarımızın `public` klasörü içerisinde olduğunu belirtiyoruz. `express.static()` bir middleware işlev olarak çalışıyor.
- [x] **temp/** klasörü projemizin css, html gibi statik dosyalarını oluşturuyordu. Bu dosyanın ismini **public** olarak değiştirip, **.gitignore** dosyasına eklediğimiz **temp/** satırını da silelim.

### 4- Template Engine

- [x] `npm i ejs` ile ejs template engine kuruyoruz.
- [x] Template engine **views** klasörünü kullanacağı için, **temp** klasörümüzü **views** olarak değiştiriyoruz.
- [x] **views** klasörümüz içindeki bütün html dosyalarının uzantısını ***ejs*** olarak değiştiriyoruz.
- [x] **views** klasörü içinde, tekrar kodlarımızı koyacağımız **partials** klasörü oluşturuyoruz.
- [x] Tekrar eden, header, navigation ve footer kodlarımızı partial içinde `_` prefix ile yeni dosyalara alıyoruz.
- [x] Her sayfa için `app.get()` ile router kodlarımızı yazıyoruz.
- [x] Cannot Get hatasının çözümü için **_navigation** dosyasındaki linkler değiştirilir. Örneğin **about.html** dosyası **/about** şeklinde düzeltilerek render yapılması sağlanır.
- [x] **add.ejs**  dosyasında bir takım düzenlemeler yaparak fotoğraf ekleme sayfasına dönüştürüyoruz.

### 5- Veri Tabanı - MongoDB
- [x] MongoDB kurulum ve kullanım ayarları yapıldı.
- [x] Mongoose indir & kur yapıldı.
- [x] **add.ejs** dosyası düzenlendi.

### 6- Mongoose ile Veri Tabanı İşlemleri
- [x] **Post** request ile gelen bilgileri aşağıdaki gibi consola yazdırıyorduk. Bu bilgileri modeller yardımıyla veritabanına kaydedeceğiz.

```
app.post('/photos', (req, res) => {
 console.log(req.body)
 res.redirect('/')
});
```
- [x] **Root** klasör içerisinde **models** klasörü oluşturuyoruz. Ardından **models** içerisine ***Photo.js*** dosyasını oluşturuyoruz.
- [x] ***SyntaxError: The requested module './models/Photo.js' does not provide an export named 'default'*** hatasının çözümü için:
```
app.js dosyasında:
import Photo  from './models/Photo.js';
şeklinde import ediyoruz.

models/Photo.js dosyasında

module.exports = "Photo"
 
yerine

export  default Photo  

kullanıyoruz.
```

- [x] **app.js** dosyasını form verilerini alıp veritbanına kaydetmek üzere düzenle. Ardından veritabanından çektiğimiz verileri **index.ejs** ye render etmesi için gönder. **index.ejs** yi bu görev için düzenle.
### 7- Tekil Sayfa İşlemleri
- [x] Postlara tıkladığımızda açılacak post sayfalarını düzenleyeceğiz.
- [x] **index.ejs** dosyasında, tekil tıklama yönlendirmesini ***/photos/<%= photos[i]._id %>*** olarak değiştirdik. Bu şekilde veritabanındaki tekil post'un id değerini sunucudan istemiş oluyoruz. Sonraki adımda bu id değerini **app.js** dosyamızda yakalayıp işleyeceğiz.
- [x] **app.js** dosyasına 
```
app.get('/photos/:id', async (req, res) => {
  const photo = await Photo.findById(req.params.id) 
  res.render('photo', { photo });
  
});
```
yönlendirmesini ekledik.
- [x] **photo.js** dosyasının ilgili alanlarını `<%= photo.title %>` şeklinde gelen responseları karşılayacak şekilde düzenledik.
- [x] **partials** klasörümüzdeki statik dosyalarımızın yolunu relative olacak şekilde `/` ekleyerek belirledik.
- [x] işlem yapılan dosyalar:
```
	değiştirildi:         courses/nodeJs/pcat/README.md
	değiştirildi:         courses/nodeJs/pcat/app.js
	değiştirildi:         courses/nodeJs/pcat/views/index.ejs
	değiştirildi:         courses/nodeJs/pcat/views/partials/_footer.ejs
	değiştirildi:         courses/nodeJs/pcat/views/partials/_header.ejs
	değiştirildi:         courses/nodeJs/pcat/views/photo.ejs
```
### 8- Görsel Yükleme
- [x] **express-fileupload** eklentisi kullanarak fotoğrafları yükleyeceğiz. 
- [x] `npm i express-fileupload` ile eklentiyi yüklüyoruz.
- [x] Bu eklenti formlarda `type` ve `name` alanlarının olmasını şart koşar.
- [x] Eklentimiz bir middleware eklenti olduğu için **app.js** içerisinde `app.use(fileUpload())` kodu ile kaydetmeliyiz. 
- [x] `app.post()` router alanında dosya yükleme ile ilgili kodları oluşturuyoruz.
- [x] Fotoğraf yükleyebilmemiz için **add.ejs** ilgili form alanına `enctype="multipart/form-data` ifadesini ekliyoruz.
- [x] Eğer `app.post()`bölümünde ` console.log(req.files.image)` kodunu yazarsak, fotoğrafla ilgili bilgileri console ekranında görebiliriz.
- [x] **index.ejs** fotoğraf yol link düzenlendi.
- [x] **photo.ejs** dosyasındaki veritabanından tekil fotoğraf almak için `<%= photo.image %>` kodu eklendi.
- [x] İşlem yapılan dosyalar.
```
	değiştirildi:         courses/nodeJs/pcat/README.md
	değiştirildi:         courses/nodeJs/pcat/app.js
	değiştirildi:         courses/nodeJs/pcat/package-lock.json
	değiştirildi:         courses/nodeJs/pcat/package.json
	değiştirildi:         courses/nodeJs/pcat/views/add.ejs
	değiştirildi:         courses/nodeJs/pcat/views/index.ejs
	değiştirildi:         courses/nodeJs/pcat/views/photo.ejs

```
### 8- Görsel Güncelleme
- [x] Tekil bir fotoğrafa tıklayınca **edit.ejs** dosyasına gidip, orda yer alan form'a `get` methodu ile ilgili fotoğraf bilgileri yüklenir ve `post` ile bu bilgiler veritabanına kaydedilir.
- [x] **photo.ejs** dosyasındaki ***update details*** butonuna **edit.ejs** dosyasına gitmesini söylüyoruz.
- [x] Editlediğimiz fotoğraf bilgilerini post olarak gönderirken bunu put request olarak simule etmesi için ***method-override** eklentisini indiriyoruz.
- [x] Yapılan işlemler:
```
	değiştirildi:         courses/nodeJs/pcat/README.md
	değiştirildi:         courses/nodeJs/pcat/app.js
	değiştirildi:         courses/nodeJs/pcat/package-lock.json
	değiştirildi:         courses/nodeJs/pcat/package.json
	yeni dosya:           courses/nodeJs/pcat/views/edit.ejs
```

### 9- Görsel Silme

- [x] Görsel silme işlemlerini **photo** sayfamızda yapacağız.
- [x] Silme işlemini `DELETE` methodu ile gönderdiğimiz için, ***methodOverride*** midlleware kodumuzu, hem `POST` hem `GET` methodlarını yakalayıp dönüştürecek şekilde düzenliyoruz.
```
app.use(methodOverride('_method',{
  methods: ['POST','GET']
}))
```

### 9- Refactoring - MVC yapısını uygulamak

- [x] Root dizinde **controllers** klasörü oluşturup içine gerekli controller dosyalarımızı oluşturuyoruz.
- [x] Controller dostamıza **Photo.js** import ediyoruz fakat bunu yaparken süslü parantez kullanmalıyız. Aksi halde typeerror alıyoruz.
```
import { Photo } from './models/Photo.js'
```
- [x] İşlenen dosyalar:
```
(çalışma dizinindeki değişiklikleri atmak için "git restore <dosya>..." kullanın)
	değiştirildi:         courses/nodeJs/pcat/README.md
	değiştirildi:         courses/nodeJs/pcat/app.js
	değiştirildi:         courses/nodeJs/pcat/models/Photo.js
	silindi:              courses/nodeJs/pcat/public/uploads/post-sample-image.jpg

İzlenmeyen dosyalar:
  (işlenecekler arasına koymak için "git add <dosya>..." kullanın)
	courses/nodeJs/pcat/controllers/
	courses/nodeJs/pcat/public/uploads/contact-bg.jpg
	courses/nodeJs/pcat/public/uploads/post-bg.jpg
```

### 9- Pagination
- [x] **app.js** ve **index.ejs** dosyalarında gerekli değişiklikler yapıldı

### 10- MongoDB atlas ve Heroko
- [x] Cloud veritabanı için ***mongodb atlas** ve dosyarımızı host etmek için **heroku** kullancağız.
- [x] ***mongodb atlas** sitesinden hesap oluşturup bir veritabanı seçiyoruz ve **app.js** dosyamızda uzak veritabanı bağlantısını kuruyoruz
- [x] Heroku için **app.js** dosyamızda 
`const port = process.env.PORT || 5000` güncelemesini,
 **package.json** dosyamızda da
```
 "scripts": { 
     "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon app.js"
 },
 ```
satırlarını
```
 "scripts": {
    "start": "node app.js"
  },
```
şeklinde düzenliyoruz.
- [x] **public** klasörümüzü temizliyoruz.
- [x] Artık projemiz boş olarak **heroku** ortamına yüklenmeye hazır.
- [x] Bu haliyle git repomuzu güncelleyelim.git 

### 11- Cloud Veritabanı & Hosting

- [x] MongoDb atlas ve Heroku kullanılarak proje cloud ortama aktarıldı.
- [x] Çalışan link: https://pcat-appa.herokuapp.com/