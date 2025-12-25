
// DARS 10: METODLAR - ASOSIY SCRIPT

/**
 * Bu script barcha metod turlarini birlashtiradi
 * Har bir metod turi alohida faylda mavjud:
 * - string-metodlari.js
 * - number-metodlari.js
 * - array-metodlari.js
 * - object-metodlari.js
 */

console.log("DARS 10: METODLAR");

// Barcha fayllarni yuklash
console.log("📚 Metodlar turlari:");
console.log("1. String metodlari - matnlar bilan ishlash");
console.log("2. Number metodlari - raqamlar bilan ishlash");
console.log("3. Array metodlari - massivlar bilan ishlash");
console.log("4. Object metodlari - obyektlar bilan ishlash\n");

console.log("💡 Maslahat: index.html faylida har bir metod turini alohida yuklab ko'rishingiz mumkin!\n");

// Asosiy misollar
console.log("ASOSIY MISOLLAR");

// String misol
let name = "Matnazar";
console.log("String misol:");
console.log(`Ism: ${name}`);
console.log(`Uzunligi: ${name.length}`);
console.log(`Katta harflar: ${name.toUpperCase()}\n`);

// Number misol
let price = 19.99;
console.log("Number misol:");
console.log(`Narx: ${price}`);
console.log(`Formatlangan: ${price.toFixed(2)} so'm\n`);

// Array misol
let fruits = ["olma", "banan", "apelsin"];
console.log("Array misol:");
console.log(`Mevalar: ${fruits.join(", ")}`);
console.log(`Uzunligi: ${fruits.length}\n`);

// Object misol
let person = {
  name: "Matnazar",
  age: 25,
  city: "Toshkent"
};
console.log("Object misol:");
console.log(`Kalitlar: ${Object.keys(person).join(", ")}`);
console.log(`Qiymatlar: ${Object.values(person).join(", ")}\n`);

console.log("Batafsil ma'lumot uchun alohida fayllarni oching!");

