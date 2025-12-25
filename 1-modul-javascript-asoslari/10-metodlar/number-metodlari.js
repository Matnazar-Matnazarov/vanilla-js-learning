
// NUMBER METODLARI


/**
 * Number metodlari - raqamlar bilan ishlash uchun ishlatiladi
 * Number obyekti va primitive number'lar uchun metodlar mavjud
 */


// 1. Number() - String'ni number'ga aylantirish

let str1 = "123";
let num1 = Number(str1);
console.log("Number('123'):", num1); // 123
console.log("Number('abc'):", Number("abc")); // NaN


// 2. parseInt() va parseFloat()

let str2 = "123.45";
console.log("parseInt('123.45'):", parseInt(str2)); // 123
console.log("parseFloat('123.45'):", parseFloat(str2)); // 123.45

let str3 = "123px";
console.log("parseInt('123px'):", parseInt(str3)); // 123


// 3. toFixed() - Kasr sonlarni formatlash

let num2 = 3.14159;
console.log("toFixed(2):", num2.toFixed(2)); // "3.14"
console.log("toFixed(4):", num2.toFixed(4)); // "3.1416"

let price = 19.9;
console.log("Narx:", price.toFixed(2) + " so'm"); // "19.90 so'm"


// 4. toPrecision() - Aniqlik bilan formatlash

let num3 = 123.456;
console.log("toPrecision(4):", num3.toPrecision(4)); // "123.5"
console.log("toPrecision(2):", num3.toPrecision(2)); // "1.2e+2"


// 5. toString() - Number'ni string'ga aylantirish

let num4 = 123;
console.log("toString():", num4.toString()); // "123"
console.log("toString(2):", num4.toString(2)); // "1111011" (binary)
console.log("toString(16):", num4.toString(16)); // "7b" (hexadecimal)


// 6. isNaN() - NaN tekshirish

console.log("isNaN(123):", isNaN(123)); // false
console.log("isNaN('abc'):", isNaN("abc")); // true
console.log("isNaN(NaN):", isNaN(NaN)); // true


// 7. isFinite() - Chekli son tekshirish

console.log("isFinite(123):", isFinite(123)); // true
console.log("isFinite(Infinity):", isFinite(Infinity)); // false
console.log("isFinite('123'):", isFinite("123")); // true


// 8. Math metodlari


// Math.abs() - Mutlaq qiymat
console.log("Math.abs(-5):", Math.abs(-5)); // 5

// Math.round() - Yaxlitlash
console.log("Math.round(4.7):", Math.round(4.7)); // 5
console.log("Math.round(4.3):", Math.round(4.3)); // 4

// Math.ceil() - Yuqoriga yaxlitlash
console.log("Math.ceil(4.1):", Math.ceil(4.1)); // 5

// Math.floor() - Pastga yaxlitlash
console.log("Math.floor(4.9):", Math.floor(4.9)); // 4

// Math.max() va Math.min()
console.log("Math.max(1, 2, 3):", Math.max(1, 2, 3)); // 3
console.log("Math.min(1, 2, 3):", Math.min(1, 2, 3)); // 1

// Math.pow() - Daraja
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // 8
console.log("2 ** 3:", 2 ** 3); // 8 (ES6)

// Math.sqrt() - Kvadrat ildiz
console.log("Math.sqrt(16):", Math.sqrt(16)); // 4

// Math.random() - Tasodifiy son (0 va 1 orasida)
console.log("Math.random():", Math.random());
console.log("1-10 orasida:", Math.floor(Math.random() * 10) + 1);


// 9. Number.MAX_VALUE va Number.MIN_VALUE

console.log("Max qiymat:", Number.MAX_VALUE);
console.log("Min qiymat:", Number.MIN_VALUE);
console.log("Max xavfsiz integer:", Number.MAX_SAFE_INTEGER);
console.log("Min xavfsiz integer:", Number.MIN_SAFE_INTEGER);


// 10. Number.isInteger() va Number.isNaN()

console.log("Number.isInteger(5):", Number.isInteger(5)); // true
console.log("Number.isInteger(5.5):", Number.isInteger(5.5)); // false
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true
console.log("Number.isNaN('abc'):", Number.isNaN("abc")); // false


// 11. Amaliy misollar


// Narxni formatlash
function formatPrice(price) {
  return price.toFixed(2) + " so'm";
}
console.log("Formatlangan narx:", formatPrice(19.9)); // "19.90 so'm"

// Tasodifiy son generatsiya qilish
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("1-100 orasida:", randomNumber(1, 100));

// Sonni tekshirish
function isValidNumber(value) {
  return !isNaN(value) && isFinite(value);
}
console.log("123 - to'g'ri:", isValidNumber(123)); // true
console.log("'abc' - noto'g'ri:", isValidNumber("abc")); // false

