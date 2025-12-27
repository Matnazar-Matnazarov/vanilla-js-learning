# Dars 15: OOP asoslari

**Davomiyligi:** 11:15

## 📋 Dars mazmuni

Bu darsda Object-Oriented Programming (OOP) asoslarini o'rganamiz:
- **Classes** - ES6 Class sintaksisi
- **Constructor** - Object yaratish
- **Inheritance** - Meros olish
- **Encapsulation** - Ma'lumotlarni yashirish

## 🎯 O'rganiladigan mavzular

### Classes
- Class yaratish va ishlatish
- Constructor metod
- Instance metodlar
- Static metodlar va properties
- Getter va Setter
- Private fields (ES2022)
- Method chaining

### Constructor
- Constructor funksiyasi (eski usul)
- Prototype metodlar
- Class constructor (yangi usul)
- Constructor validation
- Default parametrlar
- Constructor ichida metodlar

### Inheritance
- extends keyword
- super() metodi
- Method overriding
- Multi-level inheritance
- instanceof operator
- Prototype chain

### Encapsulation
- Private fields (#)
- Getter va Setter
- Closure bilan encapsulation
- Module pattern
- Ma'lumotlarni himoya qilish
- Access control

## 📁 Fayl strukturası

```
15-oop-asoslari/
├── index.html              # Interaktiv HTML
├── script.js               # Asosiy script
├── classes.js              # Classes
├── constructors.js         # Constructor
├── inheritance.js          # Inheritance
├── encapsulation.js        # Encapsulation
└── README.md               # Bu fayl
```

## 🚀 Qanday ishlatish

1. `index.html` faylini browser'da oching
2. Browser konsolni oching (F12)
3. Har bir mavzu uchun tugmalarni bosing
4. Konsolda natijani ko'ring
5. Alohida fayllarni o'qib, kodlarni tushunishga harakat qiling

## 📝 Vazifalar

### ✅ Classes
- [x] Class yaratish
- [x] Constructor metod
- [x] Instance metodlar
- [x] Static metodlar
- [x] Getter va Setter
- [x] Private fields

### ✅ Constructor
- [x] Constructor funksiyasi
- [x] Prototype metodlar
- [x] Class constructor
- [x] Validation va default qiymatlar

### ✅ Inheritance
- [x] extends keyword
- [x] super() metodi
- [x] Method overriding
- [x] Multi-level inheritance

### ✅ Encapsulation
- [x] Private fields
- [x] Getter va Setter
- [x] Closure pattern
- [x] Module pattern

## 💡 Maslahatlar

- Har bir misolni alohida sinab ko'ring
- Konsolda natijani kuzating
- Kodlarni o'zgartirib, natijani ko'ring
- Real loyihalarda qo'llashga harakat qiling
- OOP prinsiplarini tushunishga harakat qiling

## 📚 Kod misollari

### Class yaratish
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
```

### Inheritance
```javascript
class Student extends Person {
    constructor(name, age, course) {
        super(name, age);
        this.course = course;
    }
}
```

### Encapsulation
```javascript
class BankAccount {
    #balance = 0;
    deposit(amount) {
        this.#balance += amount;
    }
}
```

## 🎓 O'rganilgan narsalar

- ES6 Class sintaksisi
- Constructor funksiyalar
- Inheritance va meros olish
- Encapsulation va ma'lumotlarni yashirish
- OOP asosiy prinsiplari

