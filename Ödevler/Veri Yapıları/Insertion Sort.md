# Insertion Sort Projesi

## [22,27,16,2,18,6] -> Insertion Sort

### 1.  Yukarıda verilen dizinin insertion sort türüne göre aşamalarını yazınız.
` i=1 (dizinin ikinci elemanından) den i=5(dizinin son elemanına) ya kadar her adımda mevcut sayı önceki
sayılarla karşılaştırıp, önceki bütün elemanlardan en küçük olduğu yere yerleştir. `

```
Algoritmada, ikinci elemandan başlayarak elemanın kendinden önceki elemanlarla karşılaştırılması 
suretiyle büyük elemanlar dizide sağa doğru kaydırılır. Böylelikle açılan uygun 
pozisyona o anda sıralanmakta olan eleman yerleştirilir. 
Yani, algoritmanın küçükten büyüğe sıralama yaptığı düşünülürse, sayı dizisinin ikinci elemanını 
kendisine anahtar eleman olarak seçer.Bu anahtar eleman bir önceki elemandan başlayıp, 
kendinden önceki tüm sayılarla, anahtar olarak seçilen sayıyı kıyaslar. 
Kendinden büyük olan her sayıyla yerleri değiştirir. Kendinden küçük sayıyla karşılaştığında yer 
değiştirme işlemi biter.Ardından dizinin son elemanına kadar anahtar sayı seçimi ve devamındaki 
tüm işlemler devam eder. 

```
[kaynak](https://bidb.itu.edu.tr/seyir-defteri/blog/2013/09/08/insertion-sort-algoritmas%C4%B1)


` i=0 elemanı için dizinin sıralı olduğunu varsayıyoruz. `
 #### 1. i=1 için dizinin ikinci elemanı olan 27 elemanını önceki bütün elemanlardan küçük olduğu yere kadar taşı. 
     [22,27,16,2,18,6]
 #### 2. i=2 için dizinin üçüncü elemanı olan 16 elemanını önceki bütün elemanlardan küçük olduğu yere kadar taşı.
     [16,22,27,2,18,6]
 ####  3. i=3 için dizinin dördüncü elemanı olan 2 elemanını önceki bütün elemanlardan küçük olduğu yere kadar taşı.
     [2,16,22,27,18,6]
 #### 4. i=4 için dizinin beşinci elemanı olan 18 elemanını önceki bütün elemanlardan küçük olduğu yere kadar taşı.
     [2,16,18,22,27,6]
 #### 5. i=5 için dizinin altıncı elemanı olan 6 elemanını önceki bütün elemanlardan küçük olduğu yere kadar taşı.
	  [2,6,16,18,22,27]


### 2.  Big-O gösterimini yazınız.
   #### -  O(n^2)

### 3. Time Complexity:
     Average case: Aradığımız sayının ortada olması
     Worst case: Aradığımız sayının sonda olması
     Best case: Aradığımız sayının dizinin en başında olması.
     - Best Case: Dizi sıralı verilmiştir. Dizinin üzerinden n kadar geçeceği için best case n.
     - Average Case: n^2
     - Worst case: Dizi tersten verilmiştir. Bu durumda worst case n^2 olur.
### 4. Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.
     - Average Case

### 5. [7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.

#### [7,3,5,8,2,9,4,15,6]  sayılarının insertion sort algoritmasına göre ilk 4 adımı:

 #### 1- i=1 için dizinin ikinci elemanı olan 3 elemanını önceki bütün elemanlardan küçük olduğu yere kadar taşı. 
      [3,7,5,8,2,9,4,15,6]
 #### 2- i=2 için dizinin üçüncü elemanı olan 5 elemanını önceki bütün elemanlardan küçük olduğu yere kadar taşı. 
      [3,5,7,8,2,9,4,15,6]
 #### 3 -i=3 için dizinin dördüncü elemanı olan 8 elemanını önceki bütün elemanlardan küçük olduğu yere kadar taşı. 
      [3,5,7,8,2,9,4,15,6]
 #### 4- i=4 için dizinin beşinci elemanı olan 2 elemanını önceki bütün elemanlardan küçük olduğu yere kadar taşı. 
      [2,3,5,7,8,9,4,15,6]

