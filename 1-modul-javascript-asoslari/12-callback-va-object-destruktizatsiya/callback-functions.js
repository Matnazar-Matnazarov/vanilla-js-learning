// Callback Functions - Asosiy tushunchalar

// Callback - bu boshqa funksiyaga parametr sifatida uzatiladigan funksiya

function greet(name) {
    return `Salom, ${name}!`;
}

function processUser(callback, userName) {
    return callback(userName);
}

let result = processUser(greet, "Matnazar");
console.log(result);

// Oddiy callback misol
function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

console.log(calculate(5, 3, add));
console.log(calculate(5, 3, multiply));

// Array metodlarida callback
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(item) {
    console.log(item * 2);
});

let doubled = numbers.map(function(num) {
    return num * 2;
});
console.log(doubled);

let evens = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(evens);

// Arrow function callback
let squares = numbers.map(num => num * num);
console.log(squares);

// setTimeout va setInterval
setTimeout(function() {
    console.log("3 soniyadan keyin ishladi");
}, 3000);

// Event listener callback
document.addEventListener('click', function() {
    console.log("Click event");
});

// Nested callback
function getUserData(userId, callback) {
    setTimeout(function() {
        let user = { id: userId, name: "John" };
        callback(user);
    }, 1000);
}

getUserData(1, function(user) {
    console.log("User:", user);
});

// Callback hell muammosi
getUserData(1, function(user) {
    getUserData(2, function(user2) {
        getUserData(3, function(user3) {
            console.log("Barcha userlar:", user, user2, user3);
        });
    });
});

