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

    - [x] Kodumuzun formatını otomatik olarka ayarlamak için Prettier extension kurulumu yap.
    - [x] ` npm init ` ile projemizi hazırlıyoruz. entry point olarak app.js yapıyoruz.
    - [x] Pretter i kullanabilmemiz için bir npm modülü indirmemiz gerekiyor. ` npm i prettier -D --save-exact ` ile kurulumu yapıyoruz. 
    - [x] ctrl + shift + P ile Prettier extension ilk ayarlamaları yap.(.prettierrc dosyasında)
    - [x] app.js dosyamızı oluşturalım.
    - [x] Oluşturacağımız sitenin template dosyasını temp/ klasörü içerisine al.
    - [x] Node için hazır .gitignore dosyası bul ve içine temp/ klasörünü de ekle.
    

    