// Massiv manipulyatsiyasi

// Element qo'shish va o'chirish
let arr = [1, 2, 3];

// Push - oxiriga qo'shish
arr.push(4, 5);
console.log("After push:", arr);

// Pop - oxiridan olib tashlash
let last = arr.pop();
console.log("Popped:", last);
console.log("After pop:", arr);

// Unshift - boshiga qo'shish
arr.unshift(0);
console.log("After unshift:", arr);

// Shift - boshidan olib tashlash
let first = arr.shift();
console.log("Shifted:", first);
console.log("After shift:", arr);

// Splice - o'rtaga qo'shish/o'chirish
let arr2 = [1, 2, 3, 4, 5];
arr2.splice(2, 0, 2.5);
console.log("After splice insert:", arr2);

arr2.splice(3, 1);
console.log("After splice delete:", arr2);

// Concat - birlashtirish
let arr3 = [1, 2];
let arr4 = [3, 4];
let merged = arr3.concat(arr4);
console.log("Merged:", merged);

// Spread operator
let arr5 = [...arr3, ...arr4, 5, 6];
console.log("Spread:", arr5);

// Massivni nusxalash
let original = [1, 2, 3];
let copy1 = original.slice();
let copy2 = [...original];
let copy3 = Array.from(original);

console.log("Copies:", copy1, copy2, copy3);

// Duplikatlarni olib tashlash
let withDups = [1, 2, 2, 3, 3, 4];
let unique = [...new Set(withDups)];
console.log("Unique:", unique);

// Massivni tozalash
let arr6 = [1, 2, 3];
arr6.length = 0;
console.log("Cleared:", arr6);

// Massivni bo'lish
let arr7 = [1, 2, 3, 4, 5, 6];
let firstHalf = arr7.slice(0, 3);
let secondHalf = arr7.slice(3);
console.log("First half:", firstHalf);
console.log("Second half:", secondHalf);

// Massivlarni almashtirish
let arr8 = [1, 2, 3];
let arr9 = [4, 5, 6];
[arr8, arr9] = [arr9, arr8];
console.log("Swapped:", arr8, arr9);

// Massivni aylantirish
let arr10 = [1, 2, 3, 4, 5];
let rotated = [...arr10.slice(2), ...arr10.slice(0, 2)];
console.log("Rotated:", rotated);

// Elementlarni almashtirish
let arr11 = [1, 2, 3, 4, 5];
arr11.splice(2, 1, 10);
console.log("Replaced:", arr11);

// Massivni to'ldirish
let arr12 = new Array(5).fill(0);
console.log("Filled:", arr12);

let arr13 = [1, 2, 3];
arr13.fill(5, 1, 3);
console.log("Fill range:", arr13);

