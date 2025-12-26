// Dars 13: Massiv

console.log("=== MASSIVLAR ASOSLARI ===");

let fruits = ["olma", "banan", "apelsin"];
console.log("Fruits:", fruits);
console.log("Length:", fruits.length);

console.log("\n=== MASSIV METODLARI ===");

let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);

let evens = numbers.filter(n => n % 2 === 0);
console.log("Evens:", evens);

let sum = numbers.reduce((a, b) => a + b, 0);
console.log("Sum:", sum);

console.log("\n=== MASSIV ITERATSIYASI ===");

for (let fruit of fruits) {
    console.log(fruit);
}

console.log("\n=== MASSIV MANIPULYATSIYASI ===");

let arr = [1, 2, 3];
arr.push(4);
console.log("After push:", arr);

let last = arr.pop();
console.log("Popped:", last);

console.log("\n=== AMALIY MISOL ===");

let users = [
    { name: "Ali", age: 25 },
    { name: "Vali", age: 30 }
];

let names = users.map(u => u.name);
console.log("User names:", names);

