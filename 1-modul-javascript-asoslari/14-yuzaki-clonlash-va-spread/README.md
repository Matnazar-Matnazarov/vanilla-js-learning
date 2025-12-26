# Dars 14: Yuzaki Clonlash va Spread

**Davomiyligi:** 17:28

## 📋 Dars mazmuni

Bu darsda JavaScript'da cloning va spread operator bilan ishlashni o'rganamiz:
- **Shallow cloning** - Yuzaki clonlash (faqat birinchi daraja)
- **Spread operator** - Elementlarni yoyish (...)
- **Deep cloning** - Chuqur clonlash (barcha darajalar)
- **Object va Array cloning** - Amaliy misollar

## 🎯 O'rganiladigan mavzular

### Shallow Cloning (Yuzaki Clonlash)
- Shallow cloning tushunchasi
- Object.assign() metodi
- Spread operator bilan cloning
- slice(), concat(), Array.from()
- Shallow cloning muammolari
- Ichki object'lar reference bo'lib qolishi
- Qachon ishlaydi va qachon ishlamaydi

### Spread Operator (...)
- Spread operator tushunchasi
- Array'da spread
- Object'da spread
- Function parametrlarida spread
- Math metodlarida spread
- String'da spread
- Set va Map'da spread
- Rest operator bilan farqi
- Nested spread
- Conditional spread
- Key conflict hal qilish

### Deep Cloning (Chuqur Clonlash)
- Deep cloning tushunchasi
- JSON.parse(JSON.stringify()) usuli
- JSON usulining cheklovlari
- Recursive deep clone funksiyasi
- structuredClone() metodi (ES2022)
- Date, RegExp, Function bilan ishlash
- Circular reference muammosi
- WeakMap bilan yechim

### Object va Array Cloning
- Object cloning usullari
- Array cloning usullari
- Nested object cloning
- Array of objects cloning
- Cloning utility funksiyalar
- Real-world misollar

## 📁 Fayl strukturası

```
14-yuzaki-clonlash-va-spread/
├── index.html                    # Interaktiv HTML
├── script.js                      # Asosiy script
├── shallow-cloning.js            # Shallow cloning
├── spread-operator.js           # Spread operator
├── deep-cloning.js               # Deep cloning
├── object-array-cloning.js       # Amaliy misollar
└── README.md                     # Bu fayl
```

## 🚀 Qanday ishlatish

1. `index.html` faylini browser'da oching
2. Browser konsolni oching (F12)
3. Har bir mavzu uchun tugmalarni bosing
4. Konsolda natijani ko'ring
5. Shallow va Deep cloning farqini tushunishga harakat qiling

## 📝 Vazifalar

### ✅ Shallow Cloning
- [x] Object.assign() bilan cloning
- [x] Spread operator bilan cloning
- [x] Array cloning usullari
- [x] Shallow cloning muammolarini tushunish

### ✅ Spread Operator
- [x] Array'da spread
- [x] Object'da spread
- [x] Function parametrlarida
- [x] Math metodlarida
- [x] Nested va conditional spread

### ✅ Deep Cloning
- [x] JSON usuli
- [x] Recursive funksiya
- [x] structuredClone() (agar mavjud bo'lsa)
- [x] Circular reference yechimi

### ✅ Object va Array Cloning
- [x] Object cloning usullari
- [x] Array cloning usullari
- [x] Nested cloning
- [x] Real-world misollar

## 💡 Maslahatlar

- Shallow va Deep cloning farqini tushunish muhim
- Spread operator ko'p joyda qo'llaniladi
- Deep cloning tez-tez kerak bo'ladi
- JSON usuli ko'p hollarda yetarli
- Circular reference muammosiga e'tibor bering

## ⚠️ Muhim Eslatmalar

### Shallow Cloning Muammosi:
```javascript
let obj = { a: 1, b: { c: 2 } };
let copy = { ...obj };
copy.b.c = 3;
// obj.b.c ham 3 bo'ladi! (reference)
```

### Deep Cloning Yechimi:
```javascript
let obj = { a: 1, b: { c: 2 } };
let copy = JSON.parse(JSON.stringify(obj));
copy.b.c = 3;
// obj.b.c hali ham 2 (alohida nusxa)
```

## 📚 Kod misollari

### Shallow Clone
```javascript
let copy = { ...original };
let arrCopy = [...array];
```

### Deep Clone
```javascript
let deepCopy = JSON.parse(JSON.stringify(original));
```

### Spread Operator
```javascript
let merged = { ...obj1, ...obj2 };
let combined = [...arr1, ...arr2];
```

## 🎓 O'rganilgan narsalar

- Shallow vs Deep cloning farqi
- Spread operator qo'llanilishi
- Cloning usullari va ularning afzalliklari
- Real-world cloning misollari
- Muammolar va yechimlar

