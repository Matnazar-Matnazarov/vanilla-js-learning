# Dars 12: Callback va Object destruktizatsiya

**Davomiyligi:** 21:29

## 📋 Dars mazmuni

Bu darsda JavaScript'ning muhim tushunchalarini o'rganamiz:
- **Callback funksiyalar** - Funksiyalarni parametr sifatida uzatish
- **Object destructuring** - Object'ni qismlarga ajratish
- **Array destructuring** - Array'ni qismlarga ajratish
- **Advanced destructuring** - Murakkab misollar

## 🎯 O'rganiladigan mavzular

### Callback Functions
- Callback tushunchasi
- Funksiyalarni parametr sifatida uzatish
- Array metodlarida callback (forEach, map, filter)
- setTimeout va setInterval
- Event listener callback'lar
- Callback hell muammosi

### Object Destructuring
- Oddiy object destructuring
- O'zgaruvchi nomini o'zgartirish
- Default qiymatlar
- Nested object destructuring
- Function parametrlarida destructuring
- Rest operator bilan destructuring
- Computed property names

### Array Destructuring
- Oddiy array destructuring
- O'tkazib yuborish
- Default qiymatlar
- Rest operator
- Nested array destructuring
- Function parametrlarida
- O'zgaruvchilarni almashtirish

### Advanced Destructuring
- Rest va Spread operatorlar
- Nested object va array
- Function parametrlarida default
- Real-world misollar
- API response destructuring

## 📁 Fayl strukturası

```
12-callback-va-object-destruktizatsiya/
├── index.html                    # Interaktiv HTML
├── script.js                      # Asosiy script
├── callback-functions.js         # Callback misollari
├── object-destructuring.js       # Object destructuring
├── array-destructuring.js        # Array destructuring
├── advanced-destructuring.js     # Murakkab misollar
└── README.md                     # Bu fayl
```

## 🚀 Qanday ishlatish

1. `index.html` faylini browser'da oching
2. Browser konsolni oching (F12)
3. Har bir mavzu uchun tugmalarni bosing
4. Konsolda natijani ko'ring
5. Alohida fayllarni o'qib, kodlarni tushunishga harakat qiling

## 📝 Vazifalar

### ✅ Callback Functions
- [ ] Callback funksiyalar yaratish
- [ ] Array metodlarida callback ishlatish
- [ ] setTimeout va setInterval bilan ishlash
- [ ] Event listener callback'lar

### ✅ Object Destructuring
- [ ] Oddiy object destructuring
- [ ] Nested object destructuring
- [ ] Function parametrlarida ishlatish
- [ ] Rest operator bilan ishlash

### ✅ Array Destructuring
- [ ] Oddiy array destructuring
- [ ] Nested array destructuring
- [ ] O'zgaruvchilarni almashtirish
- [ ] Rest operator bilan ishlash

### ✅ Advanced
- [ ] Murakkab nested destructuring
- [ ] Real-world misollar
- [ ] API response destructuring
- [ ] Function parametrlarida default

## 💡 Maslahatlar

- Har bir misolni alohida sinab ko'ring
- Konsolda natijani kuzating
- Kodlarni o'zgartirib, natijani ko'ring
- Real loyihalarda qo'llashga harakat qiling

## 📚 Kod misollari

### Callback Function
```javascript
function process(callback, value) {
    return callback(value);
}
```

### Object Destructuring
```javascript
let { name, age } = person;
```

### Array Destructuring
```javascript
let [first, second] = items;
```

### Nested Destructuring
```javascript
let { address: { city } } = company;
```

## 🎓 O'rganilgan narsalar

- Callback funksiyalar tushunchasi
- Object va Array destructuring
- Rest va Spread operatorlar
- Nested destructuring
- Real-world qo'llanilishi

