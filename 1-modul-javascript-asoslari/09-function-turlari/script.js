// Function Declaration
function greet(name) {
    return `Salom, ${name}!`;
}
console.log(greet("John"));

// Function Expression
const greetExpression = function(name) {
    return `Salom, ${name}!`;
};
console.log(greetExpression("Jane"));

// Arrow Function
const greetArrow = (name) => {
    return `Salom, ${name}!`;
};
console.log(greetArrow("Bob"));

// Arrow Function (qisqa sintaksis)
const greetShort = name => `Salom, ${name}!`;
console.log(greetShort("Alice"));

// Default parameters
function greetWithDefault(name = "Mehmon") {
    return `Salom, ${name}!`;
}
console.log(greetWithDefault());
console.log(greetWithDefault("John"));

// Multiple parameters
function add(a, b) {
    return a + b;
}
console.log(add(5, 3));

// Arrow function with multiple parameters
const multiply = (a, b) => a * b;
console.log(multiply(4, 5));

