# Dars 13: Massiv

**Davomiyligi:** 22:33

## 📋 Dars mazmuni

Bu darsda JavaScript massivlari bilan to'liq ishlashni o'rganamiz:
- **Massivlar bilan ishlash** - Yaratish, elementlarga kirish, o'zgartirish
- **Massiv metodlari** - map, filter, reduce, forEach va boshqalar
- **Massiv iteratsiyasi** - Ko'rib chiqish usullari
- **Massiv manipulyatsiyasi** - Qo'shish, o'chirish, o'zgartirish
- **Amaliy misollar** - Real-world loyihalar

## 🎯 O'rganiladigan mavzular

### Massivlar Asoslari
- Massiv yaratish (literal, constructor)
- Elementlarga kirish va o'zgartirish
- length xususiyati
- Array.isArray() tekshiruvi
- join() va split() metodlari
- Massivni nusxalash

### Massiv Metodlari
- **forEach** - Har bir element uchun funksiya
- **map** - Yangi massiv yaratish
- **filter** - Shartga mos elementlar
- **reduce** - Bitta qiymatga qisqartirish
- **find** va **findIndex** - Element qidirish
- **some** va **every** - Shart tekshirish
- **includes** - Element bor-yo'qligi
- **indexOf** va **lastIndexOf** - Index topish
- **slice** va **splice** - Qismlarni olish
- **sort** va **reverse** - Tartiblash

### Massiv Iteratsiyasi
- for loop
- for...of loop
- forEach metod
- while va do...while
- break va continue
- Nested loops
- entries(), keys(), values()

### Massiv Manipulyatsiyasi
- push() va pop() - Oxiriga qo'shish/olib tashlash
- unshift() va shift() - Boshiga qo'shish/olib tashlash
- splice() - O'rtaga qo'shish/o'chirish
- concat() - Birlashtirish
- Spread operator (...)
- Massivni nusxalash
- Duplikatlarni olib tashlash
- Massivni tozalash va bo'lish
- fill() - To'ldirish

### Amaliy Misollar
- Foydalanuvchilar ro'yxati bilan ishlash
- Mahsulotlar va narxlar
- Test natijalari
- Vazifalar ro'yxati
- So'zlar va matnlar
- Raqamlar bilan hisob-kitoblar

## 📁 Fayl strukturası

```
13-massiv/
├── index.html                # Interaktiv HTML
├── script.js                 # Asosiy script
├── array-basics.js          # Massiv asoslari
├── array-methods.js         # Massiv metodlari
├── array-iteration.js      # Iteratsiya usullari
├── array-manipulation.js    # Manipulyatsiya
├── practical-examples.js    # Amaliy misollar
└── README.md                # Bu fayl
```

## 🚀 Qanday ishlatish

1. `index.html` faylini browser'da oching
2. Browser konsolni oching (F12)
3. Har bir mavzu uchun tugmalarni bosing
4. Konsolda natijani ko'ring
5. Alohida fayllarni o'qib, kodlarni tushunishga harakat qiling

## 📝 Vazifalar

### ✅ Massivlar Asoslari
- [x] Massiv yaratish
- [x] Elementlarga kirish
- [x] Elementlarni o'zgartirish
- [x] Massivni nusxalash

### ✅ Massiv Metodlari
- [x] forEach, map, filter, reduce
- [x] find, findIndex, some, every
- [x] includes, indexOf, lastIndexOf
- [x] slice, splice, sort, reverse

### ✅ Massiv Iteratsiyasi
- [x] for, for...of, forEach
- [x] while, do...while
- [x] break va continue
- [x] Nested loops

### ✅ Massiv Manipulyatsiyasi
- [x] push, pop, unshift, shift
- [x] splice, concat
- [x] Spread operator
- [x] Duplikatlarni olib tashlash

### ✅ Amaliy Misollar
- [x] Real-world loyihalar
- [x] Foydalanuvchilar bilan ishlash
- [x] Mahsulotlar ro'yxati
- [x] Test natijalari

## 💡 Maslahatlar

- Har bir metodni alohida sinab ko'ring
- Konsolda natijani kuzating
- Kodlarni o'zgartirib, natijani ko'ring
- Amaliy loyihalarda qo'llashga harakat qiling
- Method chaining (zanjirlash) bilan ishlashni o'rganing

## 📚 Kod misollari

### Massiv yaratish
```javascript
let fruits = ["olma", "banan", "apelsin"];
```

### Map, Filter, Reduce
```javascript
let doubled = numbers.map(n => n * 2);
let evens = numbers.filter(n => n % 2 === 0);
let sum = numbers.reduce((a, b) => a + b, 0);
```

### Method Chaining
```javascript
let result = numbers
    .filter(n => n > 5)
    .map(n => n * 2)
    .reduce((a, b) => a + b, 0);
```

## 🎓 O'rganilgan narsalar

- Massivlar bilan to'liq ishlash
- Barcha muhim massiv metodlari
- Iteratsiya usullari
- Manipulyatsiya operatsiyalari
- Real-world qo'llanilishi
- Method chaining

