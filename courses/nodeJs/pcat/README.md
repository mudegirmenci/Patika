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
- [x] ` npm init ` ile projemizi hazırlıyoruz. entry point olarak ` app.js ` yapıyoruz.
- [x] Pretter i kullanabilmemiz için bir npm modülü indirmemiz gerekiyor. ` npm i prettier -D --save-exact ` ile kurulumu yapıyoruz. 
- [x] ` ctrl + shift + P ` ile Prettier extension ilk ayarlamaları yap.(.prettierrc dosyasında)
- [x] ` app.js ` dosyamızı oluşturalım.
- [x] Oluşturacağımız sitenin template dosyasını ` temp/ ` klasörü içerisine al.
- [x] Node için hazır .gitignore dosyası bul ve içine ` temp/ ` klasörünü de ekle.
    

### 1- Express Nodemon Kurulumu

- [x] ` npm i express --save ` ile ` express ` modülünü indiriyoruz.
- [x] ` Express ` modülünü import et

```
import express from "express";

const app = new express();

```
- [x] ` express ` modülününü import edilmesi için ` package.json ` dosyasında ` "type": "module", ` satırı girilmelidir.
- [x] ` nodemon ` exension indir ve yapılanmasını yap. ` nodemon ` server durdur-başlat işlemini her değişiklikte otomatik olarak yapar.

```
npm i --save-dev nodemon

```
- [x] ` --save-dev ` olarak indirmemizin nedeni, biz bu eklentiyi sadece devoloper sürecinde kullanacağız dolayısı ile dependencies olarak asıl uygulamamızın çalışmasında değil sadece geliştirme yaparken olacak. ` package.json ` dosyasında 

```

  "devDependencies": {
    "nodemon": "^2.0.15",
    "prettier": "2.6.2"
  },

^2.0.15 ve üstü çünkü kurulumda --save-dev kullandık 
prettier için ise exact parametresini kullandığımız için, kullanacağımız sürüm sabit olacaktır.
```
olarak görünecek.

- [x] ` package.json ` dosyasına aşağıdaki satıları ekleyerek, uygulamamızı manuel değil ` nodemon ` tarafından başlatılmasını sağlıyoruz. Artık uygulamızı ` node app.js ` olarak değil, ` npm start ` komutu kullanarak oluşturuyoruz.

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
- [x] `app.js` dosyasında yaptığımız her değişiklikten sonra, dosyamız otomatik olarak yeniden `node app.js` komutu verilmiş gibi olacak.