// Dars 12: Callback va Destruktizatsiya

console.log("=== CALLBACK FUNKSIYALAR ===");

// Oddiy callback
function process(callback, value) {
    return callback(value);
}

let double = process(function(x) {
    return x * 2;
}, 5);
console.log("Double:", double);

// Array metodlarida
let nums = [1, 2, 3, 4, 5];
let sum = nums.reduce(function(acc, num) {
    return acc + num;
}, 0);
console.log("Sum:", sum);

console.log("\n=== OBJECT DESTRUCTURING ===");

let student = {
    name: "Ali",
    age: 20,
    course: "JavaScript"
};

let { name, age } = student;
console.log(name, age);

// Function parametrlarida
function showStudent({ name, course }) {
    console.log(`${name} - ${course}`);
}
showStudent(student);

console.log("\n=== ARRAY DESTRUCTURING ===");

let items = ["book", "pen", "laptop"];
let [item1, item2] = items;
console.log(item1, item2);

// Rest operator
let [first, ...others] = items;
console.log(first, others);

console.log("\n=== NESTED DESTRUCTURING ===");

let company = {
    name: "Tech",
    employees: [
        { name: "John", position: "Developer" },
        { name: "Jane", position: "Designer" }
    ]
};

let {
    employees: [{ name: emp1 }]
} = company;
console.log("First employee:", emp1);

