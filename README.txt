
1- Her 3 saniyede bir api call yapıyoruz.
2- Her api callda response statusünü sorguluyoruz
3- Eğer internet bağlantısı varsa response.status = 200
4- Eğer status 200'e eşit yada büyükse let = isOnline variableını true yapıyoruz
5- try-catch bloğunda catch içinde isOnline'ı false yapıyoruz
6- isOnline'ın true yada false olma durumlarına göre fonksiyonlarımızı kodluyoruz