// Dars 14: Yuzaki Clonlash va Spread

console.log("=== SHALLOW CLONING ===");

let obj1 = { a: 1, b: { c: 2 } };
let copy1 = { ...obj1 };
copy1.b.c = 3;
console.log("Original:", obj1.b.c);
console.log("Copy:", copy1.b.c);
console.log("Muammo: ichki object reference bo'lib qoladi!");

console.log("\n=== SPREAD OPERATOR ===");

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log("Combined:", combined);

let obj2 = { x: 1, y: 2 };
let obj3 = { z: 3 };
let merged = { ...obj2, ...obj3 };
console.log("Merged:", merged);

console.log("\n=== DEEP CLONING ===");

let original = {
    name: "Test",
    data: { value: 10 }
};

let deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.data.value = 20;
console.log("Original:", original.data.value);
console.log("Deep copy:", deepCopy.data.value);
console.log("Endi to'liq alohida!");

