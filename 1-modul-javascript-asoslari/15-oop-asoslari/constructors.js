// Constructor - Object yaratish

// Constructor funksiyasi (eski usul)
function Person(name, age) {
    this.name = name;
    this.age = age;
    
    this.greet = function() {
        return `Salom, ${this.name}`;
    };
}

let person1 = new Person("Ali", 25);
console.log("Person 1:", person1.greet());

// Constructor bilan prototype
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getInfo = function() {
    return `${this.brand} ${this.model}`;
};

Car.prototype.start = function() {
    return `${this.brand} ishga tushdi`;
};

let car1 = new Car("Toyota", "Camry");
console.log("Car info:", car1.getInfo());
console.log("Car start:", car1.start());

// Class constructor (yangi usul)
class Student {
    constructor(name, course) {
        this.name = name;
        this.course = course;
        this.grades = [];
    }
    
    addGrade(grade) {
        this.grades.push(grade);
    }
    
    getAverage() {
        if (this.grades.length === 0) return 0;
        let sum = this.grades.reduce((a, b) => a + b, 0);
        return sum / this.grades.length;
    }
}

let student1 = new Student("Matnazar", "JavaScript");
student1.addGrade(90);
student1.addGrade(85);
student1.addGrade(95);
console.log("Student:", student1.name);
console.log("Average:", student1.getAverage());

// Constructor ichida metodlar
function Product(name, price) {
    this.name = name;
    this.price = price;
    
    this.getPrice = function() {
        return this.price;
    };
    
    this.setPrice = function(newPrice) {
        if (newPrice > 0) {
            this.price = newPrice;
        }
    };
}

let product1 = new Product("Laptop", 1000);
console.log("Product:", product1.name);
console.log("Price:", product1.getPrice());
product1.setPrice(1200);
console.log("New price:", product1.getPrice());

// Constructor validation
function User(username, email) {
    if (!username || !email) {
        throw new Error("Username va email kerak");
    }
    
    this.username = username;
    this.email = email;
    this.createdAt = new Date();
}

try {
    let user1 = new User("matnazar", "matnazar@example.com");
    console.log("User created:", user1);
} catch (error) {
    console.log("Error:", error.message);
}

// Constructor bilan default qiymatlar
function Book(title, author = "Noma'lum", pages = 0) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

let book1 = new Book("JavaScript Guide");
let book2 = new Book("Python Basics", "John Doe", 300);
console.log("Book 1:", book1);
console.log("Book 2:", book2);

