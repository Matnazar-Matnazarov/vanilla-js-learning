// Massiv metodlari

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forEach - har bir element uchun funksiya
numbers.forEach(function(item, index) {
    console.log(`Index ${index}: ${item}`);
});

// map - yangi massiv yaratish
let doubled = numbers.map(function(num) {
    return num * 2;
});
console.log("Doubled:", doubled);

// filter - shartga mos elementlar
let evens = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log("Evens:", evens);

// reduce - massivni bitta qiymatga qisqartirish
let sum = numbers.reduce(function(acc, num) {
    return acc + num;
}, 0);
console.log("Sum:", sum);

// find - shartga mos birinchi element
let found = numbers.find(function(num) {
    return num > 5;
});
console.log("Found:", found);

// findIndex - shartga mos birinchi element indexi
let index = numbers.findIndex(function(num) {
    return num > 5;
});
console.log("Index:", index);

// some - kamida bitta element shartga mos
let hasEven = numbers.some(function(num) {
    return num % 2 === 0;
});
console.log("Has even:", hasEven);

// every - barcha elementlar shartga mos
let allPositive = numbers.every(function(num) {
    return num > 0;
});
console.log("All positive:", allPositive);

// includes - element bor-yo'qligi
console.log(numbers.includes(5));
console.log(numbers.includes(15));

// indexOf va lastIndexOf
let arr = [1, 2, 3, 2, 4];
console.log(arr.indexOf(2));
console.log(arr.lastIndexOf(2));

// slice - massivning qismini olish
let part = numbers.slice(2, 5);
console.log("Slice:", part);

// splice - elementlarni o'chirish yoki qo'shish
let arr2 = [1, 2, 3, 4, 5];
arr2.splice(2, 1);
console.log("After splice:", arr2);

// sort - tartiblash
let arr3 = [3, 1, 4, 1, 5, 9];
arr3.sort(function(a, b) {
    return a - b;
});
console.log("Sorted:", arr3);

// reverse - teskari qilish
let arr4 = [1, 2, 3, 4, 5];
arr4.reverse();
console.log("Reversed:", arr4);

// Arrow function bilan
let squares = numbers.map(num => num * num);
let odds = numbers.filter(num => num % 2 !== 0);
let product = numbers.reduce((acc, num) => acc * num, 1);

console.log("Squares:", squares);
console.log("Odds:", odds);
console.log("Product:", product);

