// Spread Operator (...)

// Spread operator - elementlarni yoyib beradi

// Array'da spread
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log("Combined:", combined);

// Array'ni nusxalash
let original = [1, 2, 3];
let copy = [...original];
console.log("Copy:", copy);

// Array'ga element qo'shish
let numbers = [1, 2, 3];
let newNumbers = [0, ...numbers, 4, 5];
console.log("New numbers:", newNumbers);

// Array'ni birlashtirish
let part1 = [1, 2];
let part2 = [3, 4];
let part3 = [5, 6];
let all = [...part1, ...part2, ...part3];
console.log("All parts:", all);

// Object'da spread
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let merged = { ...obj1, ...obj2 };
console.log("Merged:", merged);

// Object'ni nusxalash
let person = { name: "John", age: 30 };
let personCopy = { ...person };
console.log("Person copy:", personCopy);

// Object'ga xususiyat qo'shish
let user = { name: "Ali" };
let userWithAge = { ...user, age: 25 };
console.log("User with age:", userWithAge);

// Xususiyatni o'zgartirish
let config = { theme: "light", lang: "uz" };
let newConfig = { ...config, theme: "dark" };
console.log("New config:", newConfig);

// Function parametrlarida
function sum(a, b, c) {
    return a + b + c;
}

let nums = [1, 2, 3];
console.log("Sum:", sum(...nums));

// Math metodlarida
let numbers2 = [5, 2, 8, 1, 9];
console.log("Max:", Math.max(...numbers2));
console.log("Min:", Math.min(...numbers2));

// String'da spread
let str = "Hello";
let chars = [...str];
console.log("Chars:", chars);

// Set va Map'da
let set = new Set([1, 2, 3]);
let arrFromSet = [...set];
console.log("Array from Set:", arrFromSet);

// Rest operator bilan
function collect(...args) {
    return args;
}

console.log("Collected:", collect(1, 2, 3, 4));

// Nested spread
let nested = [[1, 2], [3, 4]];
let flattened = [...nested[0], ...nested[1]];
console.log("Flattened:", flattened);

// Conditional spread
let condition = true;
let obj = {
    a: 1,
    ...(condition && { b: 2 })
};
console.log("Conditional:", obj);

// Object'ni birlashtirish (key conflict)
let defaults = { theme: "light", lang: "en" };
let userPrefs = { lang: "uz" };
let final = { ...defaults, ...userPrefs };
console.log("Final:", final);
// userPrefs defaults'ni override qiladi

