/**
 * CONSTRUCTOR - Object yaratish usullari
 * 
 * Constructor - object yaratish uchun funksiya
 * new keyword bilan chaqiriladi
 */


// 1. Constructor Funksiyasi (Eski usul)


function Person(name, age) {
    // this yangi object'ni ko'rsatadi
    this.name = name;
    this.age = age;
    
    // Har bir instance'da alohida metod yaratiladi (xotira isrof)
    this.greet = function() {
        return `Salom, ${this.name}`;
    };
}

const person1 = new Person("Ali", 25);
console.log("Person 1:", person1.greet());


// 2. Prototype Metodlar (Optimallashtirilgan)


function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

// Prototype'ga metod qo'shish - barcha instance'lar uchun bitta metod
Car.prototype.getInfo = function() {
    return `${this.year} ${this.brand} ${this.model}`;
};

Car.prototype.start = function() {
    return `${this.brand} ${this.model} ishga tushdi`;
};

Car.prototype.getAge = function() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
};

const car1 = new Car("Toyota", "Camry", 2020);
console.log("Car info:", car1.getInfo());
console.log("Car start:", car1.start());
console.log("Car age:", car1.getAge(), "yil");


// 3. Class Constructor (Yangi usul - ES6)


class Student {
    constructor(name, course) {
        this.name = name;
        this.course = course;
        this.grades = [];
        this.createdAt = new Date();
    }
    
    // Metodlar avtomatik prototype'ga qo'shiladi
    addGrade(grade) {
        if (grade >= 0 && grade <= 100) {
            this.grades.push(grade);
            return true;
        }
        return false;
    }
    
    getAverage() {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((a, b) => a + b, 0);
        return (sum / this.grades.length).toFixed(2);
    }
    
    getHighestGrade() {
        return this.grades.length > 0 ? Math.max(...this.grades) : 0;
    }
    
    getLowestGrade() {
        return this.grades.length > 0 ? Math.min(...this.grades) : 0;
    }
}

const student1 = new Student("Matnazar", "JavaScript");
student1.addGrade(90);
student1.addGrade(85);
student1.addGrade(95);
student1.addGrade(88);

console.log("Student:", student1.name);
console.log("Average:", student1.getAverage());
console.log("Highest:", student1.getHighestGrade());
console.log("Lowest:", student1.getLowestGrade());


// 4. Constructor Validation


function User(username, email) {
    // Validation - ma'lumotlarni tekshirish
    if (!username || username.trim().length < 3) {
        throw new Error("Username kamida 3 belgi bo'lishi kerak");
    }
    
    if (!email || !email.includes("@")) {
        throw new Error("To'g'ri email kiriting");
    }
    
    this.username = username.trim();
    this.email = email.toLowerCase();
    this.createdAt = new Date();
    this.isActive = true;
}

try {
    const user1 = new User("matnazar", "matnazar@example.com");
    console.log("User created:", user1);
} catch (error) {
    console.error("Error:", error.message);
}


// 5. Default Parametrlar


function Book(title, author = "Noma'lum", pages = 0, isbn = null) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isbn = isbn;
    this.isAvailable = true;
}

const book1 = new Book("JavaScript Guide");
const book2 = new Book("Python Basics", "John Doe", 300, "978-1234567890");

console.log("Book 1:", book1);
console.log("Book 2:", book2);


// 6. Constructor Pattern - Real-world misol


function Product(name, price, category = "General") {
    // Validation
    if (!name || name.trim().length === 0) {
        throw new Error("Product name is required");
    }
    
    if (price < 0) {
        throw new Error("Price cannot be negative");
    }
    
    // Properties
    this.name = name.trim();
    this.price = price;
    this.category = category;
    this.discount = 0;
    
    // Methods
    this.applyDiscount = function(percent) {
        if (percent >= 0 && percent <= 100) {
            this.discount = percent;
        }
    };
    
    this.getFinalPrice = function() {
        return this.price * (1 - this.discount / 100);
    };
    
    this.getInfo = function() {
        return {
            name: this.name,
            originalPrice: this.price,
            discount: this.discount + "%",
            finalPrice: this.getFinalPrice()
        };
    };
}

const product1 = new Product("Laptop", 1000, "Electronics");
product1.applyDiscount(10);
console.log("Product info:", product1.getInfo());
