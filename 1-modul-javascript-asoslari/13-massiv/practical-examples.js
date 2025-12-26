// Amaliy misollar

// 1. Foydalanuvchilar ro'yxati
let users = [
    { name: "Ali", age: 25, city: "Toshkent" },
    { name: "Vali", age: 30, city: "Samarqand" },
    { name: "Hasan", age: 28, city: "Toshkent" }
];

// Toshkentliklarni topish
let toshkentUsers = users.filter(user => user.city === "Toshkent");
console.log("Toshkent users:", toshkentUsers);

// Ismlarni olish
let names = users.map(user => user.name);
console.log("Names:", names);

// O'rtacha yosh
let avgAge = users.reduce((sum, user) => sum + user.age, 0) / users.length;
console.log("Average age:", avgAge);

// 2. Mahsulotlar ro'yxati
let products = [
    { name: "Laptop", price: 1000, category: "Electronics" },
    { name: "Phone", price: 500, category: "Electronics" },
    { name: "Book", price: 20, category: "Education" }
];

// Narxlar yig'indisi
let totalPrice = products.reduce((sum, product) => sum + product.price, 0);
console.log("Total price:", totalPrice);

// Electronics mahsulotlari
let electronics = products.filter(p => p.category === "Electronics");
console.log("Electronics:", electronics);

// 3. Test natijalari
let scores = [85, 92, 78, 96, 88, 90];

// Eng yuqori ball
let maxScore = Math.max(...scores);
console.log("Max score:", maxScore);

// O'rtacha ball
let avgScore = scores.reduce((a, b) => a + b, 0) / scores.length;
console.log("Average score:", avgScore);

// 80 dan yuqori ballar
let highScores = scores.filter(score => score > 80);
console.log("High scores:", highScores);

// 4. Vazifalar ro'yxati
let tasks = [
    { id: 1, title: "Dars o'rganish", completed: false },
    { id: 2, title: "Kod yozish", completed: true },
    { id: 3, title: "Test yechish", completed: false }
];

// Bajarilmagan vazifalar
let incomplete = tasks.filter(task => !task.completed);
console.log("Incomplete tasks:", incomplete);

// Bajarilgan vazifalar soni
let completedCount = tasks.filter(task => task.completed).length;
console.log("Completed:", completedCount);

// 5. So'zlar ro'yxati
let words = ["JavaScript", "dasturlash", "massiv", "metod"];

// Uzun so'zlar
let longWords = words.filter(word => word.length > 6);
console.log("Long words:", longWords);

// Katta harflar
let upperWords = words.map(word => word.toUpperCase());
console.log("Upper words:", upperWords);

// 6. Raqamlar bilan ishlash
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Juft sonlar yig'indisi
let evenSum = nums
    .filter(n => n % 2 === 0)
    .reduce((a, b) => a + b, 0);
console.log("Even sum:", evenSum);

// Sonlarni kvadratga oshirish
let squares = nums.map(n => n * n);
console.log("Squares:", squares);

// 7. Matnlar bilan ishlash
let texts = ["  hello  ", "  world  ", "  test  "];

// Bo'shliqlarni olib tashlash
let trimmed = texts.map(text => text.trim());
console.log("Trimmed:", trimmed);

// Katta harflar
let capitalized = texts.map(text => text.trim().toUpperCase());
console.log("Capitalized:", capitalized);

