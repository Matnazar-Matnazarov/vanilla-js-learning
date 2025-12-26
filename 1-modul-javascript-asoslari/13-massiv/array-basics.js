// Massivlar - Asosiy tushunchalar

// Massiv yaratish
let fruits = ["olma", "banan", "apelsin"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "text", true, null];

// Array constructor
let arr1 = new Array();
let arr2 = new Array(5);
let arr3 = new Array(1, 2, 3);

// Elementlarga kirish
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits.length);

// Elementlarni o'zgartirish
fruits[0] = "qovun";
console.log(fruits);

// Massivga element qo'shish
fruits.push("uzum");
fruits.unshift("shaftoli");
console.log(fruits);

// Elementlarni olib tashlash
fruits.pop();
fruits.shift();
console.log(fruits);

// Massivni tekshirish
console.log(Array.isArray(fruits));
console.log(fruits instanceof Array);

// Massivni string'ga aylantirish
let str = fruits.join(", ");
console.log(str);

// String'ni massivga aylantirish
let text = "olma, banan, apelsin";
let items = text.split(", ");
console.log(items);

// Massivni nusxalash
let copy1 = fruits.slice();
let copy2 = [...fruits];
console.log(copy1, copy2);

// Massivlarni birlashtirish
let arr4 = [1, 2];
let arr5 = [3, 4];
let combined = arr4.concat(arr5);
let combined2 = [...arr4, ...arr5];
console.log(combined, combined2);

// Massivni bo'sh qilish
let arr6 = [1, 2, 3];
arr6.length = 0;
console.log(arr6);

