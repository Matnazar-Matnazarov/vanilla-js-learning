# Dars 16: Amaliyot. OOP

**Davomiyligi:** 19:17

## 📋 Dars mazmuni

Bu darsda OOP (Object-Oriented Programming) prinsiplarini real loyihalarda qo'llash o'rganiladi. 4 ta professional loyiha yaratiladi:

1. **TODO APP** - OOP prinsiplari bilan todo list
2. **LIBRARY SYSTEM** - Inheritance bilan kutubxona tizimi
3. **E-COMMERCE** - Encapsulation bilan onlayn do'kon
4. **GAME ENGINE** - Polymorphism bilan o'yin tizimi

## 🎯 O'rganiladigan mavzular

- Real loyihalarda OOP qo'llash
- Class va object yaratish
- Inheritance bilan ishlash
- Encapsulation prinsiplari
- Polymorphism qo'llash
- Professional kod yozish

## 📁 Fayl struktura

```
16-amaliyot-oop/
├── README.md              # Dars haqida ma'lumot
├── index.html             # Interaktiv HTML interfeys
├── script.js              # Asosiy integratsiya script
├── todo-app.js            # TODO APP loyihasi
├── library-system.js      # LIBRARY SYSTEM loyihasi
├── e-commerce.js          # E-COMMERCE loyihasi
└── game-engine.js         # GAME ENGINE loyihasi
```

## 🚀 Loyihalar

### 1. TODO APP (`todo-app.js`)

**OOP prinsiplari:** Class, Encapsulation, Method chaining

**Xususiyatlar:**
- `TodoItem` class - har bir todo uchun
- `TodoManager` class - todo'larni boshqarish
- Filter va statistikalar
- Priority tizimi (low, medium, high)
- Completion tracking

**Asosiy metodlar:**
- `addTodo()` - yangi todo qo'shish
- `deleteTodo()` - todo'ni o'chirish
- `getFilteredTodos()` - filtrlangan todo'lar
- `getStatistics()` - statistikalar

**Misol:**
```javascript
const todoManager = new TodoManager();
todoManager.addTodo("JavaScript o'rganish", "OOP mavzusini o'rganish", "high");
const todo = todoManager.getTodo(1);
todo.complete();
```

### 2. LIBRARY SYSTEM (`library-system.js`)

**OOP prinsiplari:** Inheritance, Method overriding, extends

**Xususiyatlar:**
- `LibraryItem` base class
- `Book`, `Magazine`, `DVD` - meros olgan class'lar
- `LibraryManager` - kutubxona boshqaruvi
- Ijara tizimi
- Type bo'yicha filtrlash

**Asosiy metodlar:**
- `borrow()` - item'ni ijaraga berish
- `returnItem()` - item'ni qaytarish
- `getItemsByType()` - type bo'yicha filtrlash
- `getStatistics()` - statistikalar

**Misol:**
```javascript
const library = new LibraryManager();
const book = new Book(0, "JavaScript Guide", "Author", 2024, "ISBN", 300);
library.addItem(book);
library.borrowItem(1, "Matnazar");
```

### 3. E-COMMERCE (`e-commerce.js`)

**OOP prinsiplari:** Encapsulation, Private fields, Getter/Setter

**Xususiyatlar:**
- `Product` class - private fields bilan
- `CartItem` class - savat item'i
- `ShoppingCart` class - savat boshqaruvi
- `Order` class - buyurtma tizimi
- Stock management
- Discount tizimi

**Asosiy metodlar:**
- `applyDiscount()` - chegirma qo'llash
- `addItem()` - savatga qo'shish
- `process()` - buyurtmani bajarish
- `getFinalPrice()` - final narx

**Misol:**
```javascript
const product = new Product(1, "Laptop", 1000, 10, "Electronics");
product.applyDiscount(10);
const cart = new ShoppingCart();
cart.addItem(product, 1);
```

### 4. GAME ENGINE (`game-engine.js`)

**OOP prinsiplari:** Polymorphism, Method overriding, Abstract methods

**Xususiyatlar:**
- `GameObject` base class
- `Player`, `Enemy`, `Collectible` - polymorphic class'lar
- `GameEngine` - o'yin boshqaruvi
- Collision detection
- Game state management

**Asosiy metodlar:**
- `update()` - object'ni yangilash (polymorphism)
- `render()` - object'ni ko'rsatish (polymorphism)
- `collidesWith()` - collision detection
- `getGameState()` - o'yin holati

**Misol:**
```javascript
const game = new GameEngine();
const player = game.addPlayer(100, 100, 50, 50);
const enemy = game.addEnemy(200, 200, 40, 40);
game.start();
```

## 📝 Vazifalar

- [x] Class yordamida loyiha yaratish
- [x] Inheritance bilan ishlash
- [x] Encapsulation qo'llash
- [x] Polymorphism qo'llash
- [x] Amaliy OOP loyihalar

## 🎓 O'rganilgan tushunchalar

1. **OOP Prinsiplari:**
   - Class va Object
   - Constructor
   - Inheritance
   - Encapsulation
   - Polymorphism

2. **Real-world Application:**
   - Todo list tizimi
   - Kutubxona tizimi
   - E-commerce tizimi
   - O'yin tizimi

3. **Professional Practices:**
   - Clean code
   - Code organization
   - Error handling
   - Validation

## 💻 Qanday ishlatish

1. `index.html` faylini brauzerda oching
2. Browser konsolni oching (F12)
3. Loyihalarni yuklash uchun tugmalarni bosing
4. Demo'larni ishga tushirish uchun "Demo" tugmalarini bosing
5. Konsolda natijani ko'ring

## 🔍 Kod tahlili

Har bir loyiha quyidagi prinsiplarga rioya qiladi:

- **Clean Code** - o'qish oson, tushunarli kod
- **DRY** - takrorlanmaslik
- **SOLID** - professional prinsiplar
- **Error Handling** - xatolarni to'g'ri boshqarish
- **Validation** - ma'lumotlarni tekshirish

## 📚 Keyingi dars

**Dars 17:** DOM bilan ishlash - Document Object Model, elementlarni tanlash, DOM manipulyatsiyasi
