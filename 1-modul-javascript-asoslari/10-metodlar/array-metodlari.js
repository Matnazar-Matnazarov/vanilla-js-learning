
// ARRAY METODLARI


/**
 * Array metodlari - massivlar bilan ishlash uchun ishlatiladi
 * Array metodlari immutable (map, filter) va mutable (push, pop) bo'lishi mumkin
 */


// 1. length - Array uzunligi

let fruits = ["olma", "banan", "apelsin"];
console.log("Array uzunligi:", fruits.length); // 3


// 2. push() va pop() - Oxiriga qo'shish/olib tashlash

let arr1 = [1, 2, 3];
arr1.push(4);
console.log("push(4):", arr1); // [1, 2, 3, 4]

let last = arr1.pop();
console.log("pop():", last); // 4
console.log("Array:", arr1); // [1, 2, 3]


// 3. unshift() va shift() - Boshiga qo'shish/olib tashlash

let arr2 = [2, 3, 4];
arr2.unshift(1);
console.log("unshift(1):", arr2); // [1, 2, 3, 4]

let first = arr2.shift();
console.log("shift():", first); // 1
console.log("Array:", arr2); // [2, 3, 4]


// 4. indexOf() va lastIndexOf()

let arr3 = [1, 2, 3, 2, 4];
console.log("indexOf(2):", arr3.indexOf(2)); // 1
console.log("lastIndexOf(2):", arr3.lastIndexOf(2)); // 3
console.log("indexOf(5):", arr3.indexOf(5)); // -1 (topilmadi)


// 5. includes() - Element bor-yo'qligini tekshirish

let arr4 = [1, 2, 3, 4, 5];
console.log("includes(3):", arr4.includes(3)); // true
console.log("includes(6):", arr4.includes(6)); // false


// 6. slice() - Array'ning qismini olish (immutable)

let arr5 = [1, 2, 3, 4, 5];
console.log("slice(1, 4):", arr5.slice(1, 4)); // [2, 3, 4]
console.log("slice(2):", arr5.slice(2)); // [3, 4, 5]
console.log("slice(-2):", arr5.slice(-2)); // [4, 5]
console.log("Original:", arr5); // [1, 2, 3, 4, 5] (o'zgarmadi)


// 7. splice() - Array'ni o'zgartirish (mutable)

let arr6 = [1, 2, 3, 4, 5];
arr6.splice(2, 1); // 2-indexdan 1 ta element o'chirish
console.log("splice(2, 1):", arr6); // [1, 2, 4, 5]

let arr7 = [1, 2, 3];
arr7.splice(1, 0, 1.5); // 1-indexga 1.5 qo'shish
console.log("splice(1, 0, 1.5):", arr7); // [1, 1.5, 2, 3]


// 8. concat() - Array'larni birlashtirish

let arr8 = [1, 2];
let arr9 = [3, 4];
let arr10 = arr8.concat(arr9);
console.log("concat():", arr10); // [1, 2, 3, 4]

// Spread operator (ES6)
let arr11 = [...arr8, ...arr9];
console.log("Spread operator:", arr11); // [1, 2, 3, 4]


// 9. join() - Array'ni string'ga aylantirish

let arr12 = ["JavaScript", "dasturlash", "tili"];
console.log("join(' '):", arr12.join(" ")); // "JavaScript dasturlash tili"
console.log("join('-'):", arr12.join("-")); // "JavaScript-dasturlash-tili"
console.log("join():", arr12.join()); // "JavaScript,dasturlash,tili"


// 10. forEach() - Har bir element uchun funksiya bajarish

let arr13 = [1, 2, 3, 4, 5];
arr13.forEach((item, index) => {
  console.log(`Index ${index}: ${item}`);
});


// 11. map() - Har bir elementni o'zgartirish (immutable)

let arr14 = [1, 2, 3, 4, 5];
let doubled = arr14.map(item => item * 2);
console.log("map(x => x * 2):", doubled); // [2, 4, 6, 8, 10]
console.log("Original:", arr14); // [1, 2, 3, 4, 5] (o'zgarmadi)


// 12. filter() - Shartga mos elementlarni tanlash (immutable)

let arr15 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = arr15.filter(item => item % 2 === 0);
console.log("Juft sonlar:", even); // [2, 4, 6, 8, 10]

let greaterThan5 = arr15.filter(item => item > 5);
console.log("5 dan katta:", greaterThan5); // [6, 7, 8, 9, 10]


// 13. find() va findIndex() - Shartga mos birinchi element

let arr16 = [1, 2, 3, 4, 5];
let found = arr16.find(item => item > 3);
console.log("find(x => x > 3):", found); // 4

let foundIndex = arr16.findIndex(item => item > 3);
console.log("findIndex(x => x > 3):", foundIndex); // 3


// 14. some() va every() - Shart tekshirish

let arr17 = [1, 2, 3, 4, 5];
console.log("some(x => x > 4):", arr17.some(x => x > 4)); // true (kamida bitta)
console.log("every(x => x > 0):", arr17.every(x => x > 0)); // true (barchasi)
console.log("every(x => x > 3):", arr17.every(x => x > 3)); // false


// 15. reduce() - Array'ni bitta qiymatga qisqartirish

let arr18 = [1, 2, 3, 4, 5];
let sum = arr18.reduce((acc, item) => acc + item, 0);
console.log("reduce (yig'indi):", sum); // 15

let product = arr18.reduce((acc, item) => acc * item, 1);
console.log("reduce (ko'paytma):", product); // 120


// 16. sort() - Array'ni tartiblash (mutable)

let arr19 = [3, 1, 4, 1, 5, 9, 2, 6];
arr19.sort();
console.log("sort():", arr19); // [1, 1, 2, 3, 4, 5, 6, 9]

// Raqamlar uchun to'g'ri tartiblash
let arr20 = [10, 2, 5, 1, 9];
arr20.sort((a, b) => a - b); // O'sish tartibida
console.log("sort((a, b) => a - b):", arr20); // [1, 2, 5, 9, 10]

arr20.sort((a, b) => b - a); // Kamayish tartibida
console.log("sort((a, b) => b - a):", arr20); // [10, 9, 5, 2, 1]


// 17. reverse() - Array'ni teskari qilish (mutable)

let arr21 = [1, 2, 3, 4, 5];
arr21.reverse();
console.log("reverse():", arr21); // [5, 4, 3, 2, 1]


// 18. Amaliy misollar


// Array'dan duplikatlarni olib tashlash
let arr22 = [1, 2, 2, 3, 3, 4, 5];
let unique = [...new Set(arr22)];
console.log("Duplikatsiz:", unique); // [1, 2, 3, 4, 5]

// Array'ni bo'sh qilish
let arr23 = [1, 2, 3];
arr23.length = 0;
console.log("Bo'sh array:", arr23); // []

// Array'ni nusxalash
let original = [1, 2, 3];
let copy1 = original.slice();
let copy2 = [...original];
console.log("Nusxalar:", copy1, copy2);

