## Clean Blog

### 1- Çalışma Ortamı Hazırlama
- [x] CleanBlog proje klasörü oluşturuldu.
- [x] `npm init` ile `package.json` dosyası oluşturuldu.
- [x] `Ctrl + Shift + P` ile Prettier ayarları yapıldı
```
{
  "tabWidth": 2,
  "useTabs": false,
  "semi" : true,
  "singleQuote": true,
  "trailingComma": "es5"
}
```
- [x] `npm i --save-dev nodemon` komutu ile Nodemon kuruldu.
- [x] `npm i express --save` komutu ile Express kuruldu.
- [x] Local git reposu oluşturuldu.
- [x] Get Request içerisinde **blog**`** object gönderildi.
```
app.get('/', (req,res) => {
    const blog = {id:1, title: "Blog Title", description: "Blog Description"}

    res.send(blog)
})

```
- [x] **.gitignore** dosyası oluşturuldu ve repoya gönderildi.

### 2- Template Engine
- [x] **Public** klasörü oluşturup statik dosyalarımızı içerisine yerleştiriyoruz.
- [x] İlgili middleware fonksiyonunu yazarak public klasörümüzü uygulamamıza kaydedelim.
```
//MIDDLEWARES
app.use(express.static('public'));
```
- [x] `npm i ejs ile ejs` template engine kuruyoruz.
- [x] Uygulamamızda EJS modülünü kullanacağımızı belirtelim.
```
import ejs from 'ejs';
.
.
app.set('view engine', 'ejs');

```
- [x] **Views** klasörü oluşturalım ve tüm ***.html*** dosyalarımız views klasörü içerisinde ***.ejs*** dosyalarına çevirelim.
- [x] **Partials** klasör yapısını oluşturalım. 
- [x] İlgili yönlendirmeleri ve **_navigation.ejs** dosyasındaki link düzenlemelerini yapalım.

### 3- Models - Mongoose
- [x] Mongoose **models** oluşturuldu ve gerekli kodlar yazıldı.
- [x] Yeni post eklenecek **view** birimi yazıldı.
- [x] Veritabanına kaydedilen postlar ana sayfada görüntülenecek şekilde düzenlemeler yapıldı.

### 4- Tekil sayfaları düzenle
- [x] **index.ejs** içinde tekil sayfa yönlendirme bağlantısı `<a href="/posts/<%= posts[i]._id %> ">` şeklinde düzenlendi.
- [x] **app.js** dosyasına **index.ejs** den gelen tekil post requestini alacak şekilde şu route kodları yazıldı:

```
  app.get('/posts/:id', async (req, res) => {
    const post = await Post.findById(req.params.id) 
    res.render('post', { post });
    
  });

```
Yukarıdaki kodun yaptığı işlem kısaca şöyle: /posts/id ile gelen istekteki id parametresini al 
ve veritabanında o id ile eşleşen kaydı bul. Bulduğun kaydı view ile işlenmek üzere post view'e gönder.

- [x] **partials** içerisindeki dosyaların linklerini tekil post sayfası css bozukluğunu düzeltmek için relative olarak düzelt (`/` ile). 
- [x] İşlem yapılan dosyalar:

```
	değiştirildi:         courses/nodeJs/cleanblog/README.md
	değiştirildi:         courses/nodeJs/cleanblog/app.js
	değiştirildi:         courses/nodeJs/cleanblog/views/index.ejs
	değiştirildi:         courses/nodeJs/cleanblog/views/partials/_header.ejs

```