// Dars 15: OOP asoslari

console.log("=== CLASSES ===");

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Salom, ${this.name}`;
    }
}

let person = new Person("Matnazar", 25);
console.log(person.greet());

console.log("\n=== INHERITANCE ===");

class Student extends Person {
    constructor(name, age, course) {
        super(name, age);
        this.course = course;
    }
}

let student = new Student("Ali", 20, "JavaScript");
console.log(student.greet());

console.log("\n=== ENCAPSULATION ===");

class BankAccount {
    #balance = 0;
    
    deposit(amount) {
        this.#balance += amount;
    }
    
    getBalance() {
        return this.#balance;
    }
}

let account = new BankAccount();
account.deposit(1000);
console.log("Balance:", account.getBalance());

