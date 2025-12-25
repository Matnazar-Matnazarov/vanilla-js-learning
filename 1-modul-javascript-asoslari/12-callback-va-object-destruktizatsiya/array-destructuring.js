// Array Destructuring

// Oddiy destructuring
let fruits = ["olma", "banan", "apelsin"];
let [first, second, third] = fruits;
console.log(first, second, third);

// Birinchi elementni olish
let [firstFruit] = fruits;
console.log(firstFruit);

// O'tkazib yuborish
let [, , thirdFruit] = fruits;
console.log(thirdFruit);

// Default qiymatlar
let colors = ["qizil"];
let [red, green = "yashil", blue = "ko'k"] = colors;
console.log(red, green, blue);

// Rest operator
let numbers = [1, 2, 3, 4, 5];
let [firstNum, secondNum, ...rest] = numbers;
console.log(firstNum, secondNum);
console.log(rest);

// Nested array destructuring
let nested = [1, [2, 3], 4];
let [a, [b, c], d] = nested;
console.log(a, b, c, d);

// Function parametrlarida
function sum([a, b, c]) {
    return a + b + c;
}
console.log(sum([1, 2, 3]));

// Return qiymatda
function getCoordinates() {
    return [10, 20];
}

let [x, y] = getCoordinates();
console.log(x, y);

// O'zgaruvchilarni almashtirish
let x1 = 5;
let y1 = 10;
[x1, y1] = [y1, x1];
console.log(x1, y1);

// String destructuring
let str = "ABC";
let [char1, char2, char3] = str;
console.log(char1, char2, char3);

// Object va array birgalikda
let data = {
    items: ["a", "b", "c"]
};
let { items: [item1, item2] } = data;
console.log(item1, item2);

