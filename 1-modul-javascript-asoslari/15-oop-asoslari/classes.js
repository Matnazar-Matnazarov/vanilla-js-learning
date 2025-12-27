/**
 * CLASSES - ES6 Class sintaksisi
 * 
 * Class - bu object yaratish uchun template (shablon)
 * Class'dan new keyword yordamida instance (nusxa) yaratiladi
 */

// ============================================
// 1. Oddiy Class yaratish
// ============================================

class Person {
    // Constructor - class instance yaratilganda ishlaydi
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    // Instance metod - har bir instance'da mavjud
    greet() {
        return `Salom, mening ismim ${this.name}, yoshim ${this.age} da`;
    }
    
    // Yana bir instance metod
    getInfo() {
        return {
            name: this.name,
            age: this.age
        };
    }
}

// Class'dan instance yaratish
const person1 = new Person("Matnazar", 25);
console.log("Greet:", person1.greet());
console.log("Info:", person1.getInfo());

// ============================================
// 2. Method Chaining - Metodlarni zanjirlash
// ============================================

class Calculator {
    constructor() {
        this.result = 0;
    }
    
    // this qaytarish orqali metodlarni zanjirlash mumkin
    add(num) {
        this.result += num;
        return this; // Zanjirlash uchun this qaytaramiz
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

// Method chaining misoli
const calc = new Calculator();
const finalResult = calc.add(10).multiply(2).subtract(5).getResult();
console.log("Calculator result:", finalResult);

// ============================================
// 3. Static Metodlar va Properties
// ============================================

class MathHelper {
    // Static metod - class'ga tegishli, instance'ga emas
    static add(a, b) {
        return a + b;
    }
    
    static multiply(a, b) {
        return a * b;
    }
    
    // Static property (ES2022)
    static PI = 3.14159;
    
    static getCircleArea(radius) {
        return this.PI * radius * radius;
    }
}

// Static metodlarni class nomi orqali chaqiramiz
console.log("Static add:", MathHelper.add(5, 3));
console.log("Static PI:", MathHelper.PI);
console.log("Circle area:", MathHelper.getCircleArea(5));

// ============================================
// 4. Getter va Setter
// ============================================

class Temperature {
    constructor(celsius) {
        // Private convention (_ bilan boshlash)
        this._celsius = celsius;
    }
    
    // Getter - qiymatni olish
    get celsius() {
        return this._celsius;
    }
    
    // Setter - qiymatni o'rnatish (validation bilan)
    set celsius(value) {
        if (value < -273.15) {
            throw new Error("Temperature too low (absolute zero)");
        }
        this._celsius = value;
    }
    
    // Computed getter - hisoblangan qiymat
    get fahrenheit() {
        return this._celsius * 9/5 + 32;
    }
    
    get kelvin() {
        return this._celsius + 273.15;
    }
}

const temp = new Temperature(25);
console.log("Celsius:", temp.celsius);
console.log("Fahrenheit:", temp.fahrenheit);
console.log("Kelvin:", temp.kelvin);

// Setter ishlatish
temp.celsius = 30;
console.log("New Celsius:", temp.celsius);

// ============================================
// 5. Private Fields (ES2022)
// ============================================

class BankAccount {
    // Private field - # bilan belgilanadi
    #balance = 0;
    #transactionHistory = [];
    
    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }
    
    // Public metod - private field'ga kirish
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            this.#recordTransaction("deposit", amount);
            return this.#balance;
        }
        throw new Error("Amount must be positive");
    }
    
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            this.#recordTransaction("withdraw", amount);
            return this.#balance;
        }
        throw new Error("Insufficient balance or invalid amount");
    }
    
    getBalance() {
        return this.#balance;
    }
    
    // Private metod - faqat class ichida chaqiriladi
    #recordTransaction(type, amount) {
        this.#transactionHistory.push({
            type,
            amount,
            timestamp: new Date()
        });
    }
    
    getHistory() {
        return [...this.#transactionHistory]; // Nusxa qaytarish
    }
}

const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log("Balance:", account.getBalance());
console.log("History:", account.getHistory());
