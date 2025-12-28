/**
 * DARS 15: OOP ASOSLARI - ASOSIY SCRIPT
 * 
 * Bu script barcha OOP tushunchalarini birlashtiradi
 */

console.log("DARS 15: OOP ASOSLARI\n");

// CLASSES
console.log("=== 1. CLASSES ===");

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Salom, ${this.name}`;
    }
}

const person = new Person("Matnazar", 25);
console.log("Person:", person.greet());

// INHERITANCE
console.log("\n=== 2. INHERITANCE ===");

class Student extends Person {
    constructor(name, age, course) {
        super(name, age);
        this.course = course;
    }
    
    study() {
        return `${this.name} ${this.course} o'rganmoqda`;
    }
}

const student = new Student("Ali", 20, "JavaScript");
console.log("Student greet:", student.greet());
console.log("Student study:", student.study());

// ENCAPSULATION
console.log("\n=== 3. ENCAPSULATION ===");

class BankAccount {
    #balance = 0;
    
    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }
    
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

const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log("Balance:", account.getBalance());

console.log("\nBatafsil ma'lumot uchun alohida fayllarni oching!");
