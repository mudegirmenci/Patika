# Merge Sort Projesi

## [16,21,11,8,12,22] -> Merge Sort

*Ön bilgi*

 * Sıralanmamış halde verilen bir liste önce ikiye bölünür. Sonra her bir parçada tek eleman kalana
kadar ikiye bölmeler devam eder. Bu aşamaya Divede aşaması denir.
 * İkinci aşamada son iki sayılar yukarı doğru sıralanır.
 * Aşağıdaki örnekte tek eleman kalana kadar bütün dizi bölündü(7. adıma kadar). 
ardından sayılar yukarı doğru sıralandı. Örneğin 16-21 kendi arasında sıralanırken
11 kendi kendisiyle karşılaştırıp sıralandı ve bu üç sayı 16-21 ve 11 olarak iki
bölüm oluşturdu. Bu iki grup karşılaştırıldı ve nihai olarak 11,16,21 şeklinde 
sıralama oluşturuldu. 
 * n elemanlı bir dizi için logn kadar işlem yapıldı


### 1.  Yukarıda verilen dizinin merge sort türüne göre aşamalarını yazınız.

``` 
1-       [16,21,11,8,12,22]
2-         /          \
3-    [16,21,11]     [8,12,22]
4-       /   \        /     \
5-    [16,21] [11]  [8,12]  [22]
6-      / \    \     / \     \
7-    [16][21] [11] [8][12]  [22]
8-      \  /   /    \  /     /
9-    [16,21] [11]  [8,12]  [22]
10-     \     /      \      / 
11-   [11,16,21]     [12,18,22]
12-       \             / 
13-     [11,12,16,18,21,22]

```
### 2.  Big-O gösterimini yazınız.

 o(logn)
