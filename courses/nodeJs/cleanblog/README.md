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
- [x] Get Request içerisinde `blog` object gönderildi.
```
app.get('/', (req,res) => {
    const blog = {id:1, title: "Blog Title", description: "Blog Description"}

    res.send(blog)
})

```
- [x] `.gitignore` dosyası oluşturuldu ve repoya gönderildi.

### 2- 