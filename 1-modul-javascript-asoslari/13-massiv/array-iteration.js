// Massiv iteratsiyasi

let items = ["olma", "banan", "apelsin", "uzum"];

// for loop
for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
}

// for...of loop
for (let item of items) {
    console.log(item);
}

// forEach
items.forEach(function(item, index) {
    console.log(`${index}: ${item}`);
});

// for...in (massiv uchun tavsiya etilmaydi)
for (let index in items) {
    console.log(items[index]);
}

// while loop
let i = 0;
while (i < items.length) {
    console.log(items[i]);
    i++;
}

// do...while
let j = 0;
do {
    console.log(items[j]);
    j++;
} while (j < items.length);

// break va continue
for (let item of items) {
    if (item === "banan") {
        continue;
    }
    if (item === "uzum") {
        break;
    }
    console.log(item);
}

// Nested loops
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let row of matrix) {
    for (let cell of row) {
        console.log(cell);
    }
}

// entries() - index va qiymat
for (let [index, value] of items.entries()) {
    console.log(`${index}: ${value}`);
}

// keys() - faqat indexlar
for (let index of items.keys()) {
    console.log(index);
}

// values() - faqat qiymatlar
for (let value of items.values()) {
    console.log(value);
}

