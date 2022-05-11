## PATİKA DEV SQL ÖDEV 8
### Aşağıdaki sorgu senaryolarını dvdrental örnek veri tabanı üzerinden gerçekleştiriniz.

- [x] test veritabanınızda employee isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.

```
CREATE TABLE employee (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50),
	birthday DATE,
	email VARCHAR(100)
);
```
- [x] Oluşturduğumuz employee tablosuna 'Mockaroo' servisini kullanarak 50 adet veri ekleyelim.

```
insert into employee (name, birthday, email) values ('Fiann', '1974-09-11', 'fcapon0@ezinearticles.com');
insert into employee (name, birthday, email) values ('Kimberlyn', '2000-07-01', 'ksparshutt1@answers.com');
insert into employee (name, birthday, email) values ('Urson', '1965-04-26', 'ukinker2@nih.gov');
insert into employee (name, birthday, email) values ('Amalle', '2006-09-02', 'abonanno3@uol.com.br');
insert into employee (name, birthday, email) values ('Abbie', '1999-09-18', 'asuggate4@narod.ru');
insert into employee (name, birthday, email) values ('Willie', '1995-05-31', 'wbollands5@bravesites.com');
insert into employee (name, birthday, email) values ('Peggi', '1992-05-19', 'pcleere6@sohu.com');
insert into employee (name, birthday, email) values ('Madelina', '2005-07-26', 'mcoronado7@nature.com');
insert into employee (name, birthday, email) values ('Grantham', '2014-11-15', 'gelmore8@senate.gov');
insert into employee (name, birthday, email) values ('Cyrillus', '2014-08-13', 'cluisetti9@eventbrite.com');
insert into employee (name, birthday, email) values ('Nicolea', '1974-12-11', 'ngorriea@domainmarket.com');
insert into employee (name, birthday, email) values ('Cole', '1989-08-07', 'cardenb@homestead.com');
insert into employee (name, birthday, email) values ('Devonna', '1972-06-05', 'dmashroc@nydailynews.com');
insert into employee (name, birthday, email) values ('Maurizio', '2013-01-12', 'mgroundwatord@technorati.com');
insert into employee (name, birthday, email) values ('Mikael', '1966-08-05', 'mspataroe@symantec.com');
insert into employee (name, birthday, email) values ('Alisha', '2009-09-21', 'arouncef@joomla.org');
insert into employee (name, birthday, email) values ('Alana', '1975-07-13', 'anaisbetg@foxnews.com');
insert into employee (name, birthday, email) values ('Ali', '2014-04-13', 'aclabburnh@craigslist.org');
insert into employee (name, birthday, email) values ('Kimberley', '2009-03-25', 'kfinklei@meetup.com');
insert into employee (name, birthday, email) values ('Audre', '1983-06-21', 'adriuttij@wiley.com');
insert into employee (name, birthday, email) values ('Mattias', '1971-06-08', 'mstrettlek@t.co');
insert into employee (name, birthday, email) values ('Aileen', '2007-05-05', 'aclimol@mac.com');
insert into employee (name, birthday, email) values ('Jesus', '1991-01-27', 'jmanjotm@gmpg.org');
insert into employee (name, birthday, email) values ('Vanya', '1967-01-30', 'vbrownsean@scribd.com');
insert into employee (name, birthday, email) values ('Philomena', '2020-07-24', 'pkinnerleyo@infoseek.co.jp');
insert into employee (name, birthday, email) values ('Dannel', '1962-03-05', 'dhalmp@google.pl');
insert into employee (name, birthday, email) values ('Raffaello', '2006-05-13', 'rmaywardq@theguardian.com');
insert into employee (name, birthday, email) values ('Thia', '1969-07-02', 'tmoaksonr@tiny.cc');
insert into employee (name, birthday, email) values ('Barry', '1956-09-30', 'bissits@fema.gov');
insert into employee (name, birthday, email) values ('Nichol', '1973-07-25', 'ncruickshankt@sbwire.com');
insert into employee (name, birthday, email) values ('Correy', '2000-08-13', 'clavallinu@redcross.org');
insert into employee (name, birthday, email) values ('Frannie', '2022-02-11', 'fpurverv@nsw.gov.au');
insert into employee (name, birthday, email) values ('Tessa', '2010-08-11', 'tripleyw@diigo.com');
insert into employee (name, birthday, email) values ('Miner', '2021-05-08', 'mlaudhamx@netlog.com');
insert into employee (name, birthday, email) values ('Sancho', '2004-04-07', 'sjancicy@house.gov');
insert into employee (name, birthday, email) values ('Tove', '2012-12-18', 'tdambrosioz@cbslocal.com');
insert into employee (name, birthday, email) values ('Lissi', '1992-07-17', 'lkibble10@kickstarter.com');
insert into employee (name, birthday, email) values ('Heinrik', '1993-12-03', 'hashbolt11@ox.ac.uk');
insert into employee (name, birthday, email) values ('Jone', '1953-02-08', 'jcordery12@wikia.com');
insert into employee (name, birthday, email) values ('Tirrell', '1966-01-11', 'tloftin13@un.org');
insert into employee (name, birthday, email) values ('Verine', '2005-07-28', 'vlaverock14@microsoft.com');
insert into employee (name, birthday, email) values ('Nappy', '1974-09-29', 'nhinnerk15@squidoo.com');
insert into employee (name, birthday, email) values ('Dorothea', '1999-05-21', 'dryle16@w3.org');
insert into employee (name, birthday, email) values ('Gunther', '1953-01-09', 'gpeace17@ucsd.edu');
insert into employee (name, birthday, email) values ('Weber', '1963-12-21', 'wpraton18@upenn.edu');
insert into employee (name, birthday, email) values ('Sybila', '1966-05-01', 'slammerding19@guardian.co.uk');
insert into employee (name, birthday, email) values ('Georgette', '2013-11-19', 'gmackintosh1a@tinypic.com');
insert into employee (name, birthday, email) values ('Dermot', '1975-07-01', 'dkemmis1b@bbc.co.uk');
insert into employee (name, birthday, email) values ('Laird', '2020-03-06', 'lcabrera1c@si.edu');
insert into employee (name, birthday, email) values ('Webb', '1981-07-19', 'wbyfford1d@gizmodo.com');

```

- [x]  Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.

```
UPDATE employee
SET
 name='Ahmet',
 email='',
 birthday='1982-12-05'
WHERE id=1
```


- [x]  Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.

`DELETE FROM employee WHERE id IN (6,7,8,9,10) RETURNING *;`
