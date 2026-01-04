# Dars 19: Hodisalar bilan ishlash

**Davomiyligi:** 32:07

## 📋 Dars mazmuni

- Event listeners
- Event types
- Event handling
- Event delegation

## 🎯 O'rganiladigan mavzular

- addEventListener
- Event types (click, input, submit, etc.)
- Event object
- Event propagation
- Event delegation

## 📁 Fayl struktura

```
19-hodisalar-bilan-ishlash/
├── README.md              # Dars haqida ma'lumot
├── index.html             # Interaktiv HTML interfeys
├── script.js              # Asosiy integratsiya script
├── event-listeners.js      # Event listeners misollari
├── event-types.js          # Turli event turlari
├── event-object.js         # Event object xususiyatlari
└── event-delegation.js     # Event delegation misollari
```

## 🚀 Qanday ishlatish

1. `index.html` faylini brauzerda oching
2. Browser konsolni oching (F12)
3. Har bir mavzu uchun tugmalarni bosing
4. Konsolda natijani ko'ring
5. Alohida fayllarni o'qib, kodlarni tushunishga harakat qiling

## 📝 Vazifalar

- [x] Event listener qo'shish
- [x] Turli xil event turlari bilan ishlash
- [x] Event object bilan ishlash
- [x] Event delegation

## 🎓 O'rganilgan tushunchalar

### 1. Event Listeners
- `addEventListener()` - event listener qo'shish
- `removeEventListener()` - event listener ni olib tashlash
- Event listener options (once, capture, passive)
- Named vs anonymous functions

### 2. Event Types
- Mouse events (click, dblclick, mousedown, mouseup, mouseenter, mouseleave, mousemove)
- Keyboard events (keydown, keyup, keypress)
- Input events (input, change, focus, blur)
- Form events (submit, reset)
- Window events (resize, scroll, load)
- Touch events (touchstart, touchend, touchmove)
- Drag events (dragstart, dragend, dragover, drop)

### 3. Event Object
- Event xususiyatlari (type, target, currentTarget, timeStamp)
- Event metodlari (preventDefault, stopPropagation, stopImmediatePropagation)
- Keyboard event xususiyatlari (key, code, keyCode, ctrlKey, shiftKey, altKey)
- Mouse event xususiyatlari (clientX, clientY, pageX, pageY, button, buttons)
- Event phase (CAPTURING, AT_TARGET, BUBBLING)

### 4. Event Delegation
- Parent elementda event listener qo'yish
- Dinamik elementlar bilan ishlash
- Memory samaradorligi
- Real-world misollar

## 💻 Kod xususiyatlari

- **Clean Code** - o'qish oson, tushunarli kod
- **Professional Comments** - har bir qism uchun aniq izohlar
- **Amaliy Misollar** - real vaziyatlarda qo'llash
- **Event Handling** - to'g'ri event boshqaruvi
- **Performance** - samarali event delegation

## 🔍 Asosiy prinsiplar

1. **Event Listeners:**
   - addEventListener yordamida event listener qo'shish
   - removeEventListener yordamida olib tashlash
   - Options bilan ishlash (once, capture, passive)

2. **Event Types:**
   - Turli xil event turlari va ularning ishlatilishi
   - Har bir event turining o'ziga xos xususiyatlari
   - Real-world vaziyatlarda qo'llash

3. **Event Object:**
   - Event object xususiyatlari va metodlari
   - preventDefault va stopPropagation ishlatish
   - Event target vs currentTarget farqi

4. **Event Delegation:**
   - Parent elementda listener qo'yish
   - Dinamik elementlar bilan ishlash
   - Memory va performance afzalliklari

## 📚 Keyingi dars

**Dars 20:** Amaliyot. Hodisalar - Praktik mashqlar, Event-driven loyihalar