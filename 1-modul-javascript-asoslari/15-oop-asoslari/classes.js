// Classes - ES6 Class sintaksisi

// Class yaratish
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Salom, mening ismim ${this.name}, yoshim ${this.age} da`;
    }
    
    getInfo() {
        return {
            name: this.name,
            age: this.age
        };
    }
}

let person1 = new Person("Matnazar", 25);
console.log(person1.greet());
console.log(person1.getInfo());

// Class metodlari
class Calculator {
    constructor() {
        this.result = 0;
    }
    
    add(num) {
        this.result += num;
        return this;
    }
    
    subtract(num) {
        this.result -= num;
        return this;
    }
    
    multiply(num) {
        this.result *= num;
        return this;
    }
    
    getResult() {
        return this.result;
    }
    
    reset() {
        this.result = 0;
        return this;
    }
}

let calc = new Calculator();
calc.add(10).multiply(2).subtract(5);
console.log("Result:", calc.getResult());

// Static metodlar
class MathHelper {
    static add(a, b) {
        return a + b;
    }
    
    static multiply(a, b) {
        return a * b;
    }
    
    static PI = 3.14159;
}

console.log("Add:", MathHelper.add(5, 3));
console.log("PI:", MathHelper.PI);

// Getter va Setter
class Temperature {
    constructor(celsius) {
        this._celsius = celsius;
    }
    
    get celsius() {
        return this._celsius;
    }
    
    set celsius(value) {
        if (value < -273.15) {
            throw new Error("Temperature too low");
        }
        this._celsius = value;
    }
    
    get fahrenheit() {
        return this._celsius * 9/5 + 32;
    }
}

let temp = new Temperature(25);
console.log("Celsius:", temp.celsius);
console.log("Fahrenheit:", temp.fahrenheit);

// Private fields (ES2022)
class BankAccount {
    #balance = 0;
    
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }
    
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
        }
    }
    
    getBalance() {
        return this.#balance;
    }
}

let account = new BankAccount();
account.deposit(1000);
account.withdraw(300);
console.log("Balance:", account.getBalance());

