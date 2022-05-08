## PATİKA DEV SQL ÖDEV 4
### Aşağıdaki sorgu senaryolarını dvdrental örnek veri tabanı üzerinden gerçekleştiriniz.

- [x] film tablosunda bulunan replacement_cost sütununda bulunan birbirinden farklı değerleri sıralayınız.

`SELECT DISTINCT replacement_cost FROM film`


- [x] film tablosunda bulunan replacement_cost sütununda birbirinden farklı kaç tane veri vardır?

`SELECT COUNT(DISTINCT replacement_cost) FROM film`

- [x] film tablosunda bulunan film isimlerinde (title) kaç tanesini T karakteri ile başlar ve aynı zamanda rating 'G' ye eşittir?

`SELECT COUNT(*) FROM film WHERE title LIKE 'T%' AND rating='G'`


- [x] country tablosunda bulunan ülke isimlerinden (country) kaç tanesi 5 karakterden oluşmaktadır?


`SELECT COUNT(country) FROM country WHERE country LIKE '_____' `

- [x] city tablosundaki şehir isimlerinin kaç tanesi 'R' veya r karakteri ile biter?

`SELECT COUNT(city) FROM city WHERE city ILIKE '%R'`