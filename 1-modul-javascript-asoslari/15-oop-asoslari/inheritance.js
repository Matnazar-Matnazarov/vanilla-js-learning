/**
 * INHERITANCE - Meros olish
 * 
 * Inheritance - bir class boshqa class'dan xususiyat va metodlarni meros qilib olishi
 * extends keyword yordamida amalga oshiriladi
 */

// ============================================
// 1. Oddiy Inheritance
// ============================================

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    
    speak() {
        return `${this.name} ovoz chiqaradi`;
    }
    
    eat() {
        return `${this.name} ovqatlanmoqda`;
    }
    
    sleep() {
        return `${this.name} uxlamoqda`;
    }
}

// Dog class Animal'dan meros oladi
class Dog extends Animal {
    constructor(name, breed) {
        super(name, "Dog"); // Parent class constructor'ini chaqiramiz
        this.breed = breed;
    }
    
    // Method overriding - parent metodini o'zgartirish
    speak() {
        return `${this.name} vov-vov qiladi`;
    }
    
    // Yangi metod - faqat Dog class'ida
    fetch() {
        return `${this.name} tayoqni olib kelmoqda`;
    }
    
    getInfo() {
        return {
            name: this.name,
            species: this.species,
            breed: this.breed
        };
    }
}

// Cat class ham Animal'dan meros oladi
class Cat extends Animal {
    constructor(name, color) {
        super(name, "Cat");
        this.color = color;
    }
    
    speak() {
        return `${this.name} miyavlaydi`;
    }
    
    climb() {
        return `${this.name} daraxtga chiqmoqda`;
    }
}

const dog = new Dog("Rex", "Labrador");
console.log("Dog speak:", dog.speak());
console.log("Dog eat:", dog.eat()); // Parent metod
console.log("Dog fetch:", dog.fetch()); // O'z metodi
console.log("Dog info:", dog.getInfo());

const cat = new Cat("Whiskers", "Orange");
console.log("Cat speak:", cat.speak());
console.log("Cat climb:", cat.climb());

// ============================================
// 2. Multi-level Inheritance (Ko'p darajali)
// ============================================

class Vehicle {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
        this.isRunning = false;
    }
    
    start() {
        this.isRunning = true;
        return `${this.brand} ishga tushdi`;
    }
    
    stop() {
        this.isRunning = false;
        return `${this.brand} to'xtadi`;
    }
    
    getInfo() {
        return `${this.year} ${this.brand}`;
    }
}

class Car extends Vehicle {
    constructor(brand, model, year) {
        super(brand, year);
        this.model = model;
        this.doors = 4;
    }
    
    drive() {
        if (this.isRunning) {
            return `${this.brand} ${this.model} yurmoqda`;
        }
        return "Avval ishga tushirish kerak";
    }
    
    honk() {
        return "Beep beep!";
    }
}

class ElectricCar extends Car {
    constructor(brand, model, year, batteryCapacity) {
        super(brand, model, year);
        this.batteryCapacity = batteryCapacity;
        this.batteryLevel = 100;
    }
    
    charge() {
        this.batteryLevel = 100;
        return `${this.brand} ${this.model} to'liq zaryadlandi`;
    }
    
    getBatteryLevel() {
        return `${this.batteryLevel}%`;
    }
    
    // Parent metodini override qilish
    start() {
        if (this.batteryLevel > 0) {
            return super.start(); // Parent metodini chaqiramiz
        }
        return "Battery quyi, zaryadlash kerak";
    }
}

const tesla = new ElectricCar("Tesla", "Model 3", 2023, "75kWh");
console.log("Vehicle info:", tesla.getInfo());
console.log("Start:", tesla.start());
console.log("Drive:", tesla.drive());
console.log("Charge:", tesla.charge());
console.log("Battery:", tesla.getBatteryLevel());

// ============================================
// 3. Method Overriding - Metodni qayta yozish
// ============================================

class Shape {
    constructor(name) {
        this.name = name;
    }
    
    getArea() {
        return "Area hisoblanmoqda";
    }
    
    getPerimeter() {
        return "Perimeter hisoblanmoqda";
    }
    
    getInfo() {
        return {
            name: this.name,
            area: this.getArea(),
            perimeter: this.getPerimeter()
        };
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super("Rectangle");
        this.width = width;
        this.height = height;
    }
    
    // Parent metodini override qilish
    getArea() {
        return this.width * this.height;
    }
    
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}

class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }
    
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Triangle extends Shape {
    constructor(a, b, c) {
        super("Triangle");
        this.a = a;
        this.b = b;
        this.c = c;
    }
    
    getArea() {
        // Heron's formula
        const s = (this.a + this.b + this.c) / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
    
    getPerimeter() {
        return this.a + this.b + this.c;
    }
}

const rect = new Rectangle(5, 10);
const circle = new Circle(5);
const triangle = new Triangle(3, 4, 5);

console.log("Rectangle:", rect.getInfo());
console.log("Circle:", circle.getInfo());
console.log("Triangle:", triangle.getInfo());

// ============================================
// 4. instanceof Operator
// ============================================

// instanceof - object qaysi class'dan yaratilganini tekshiradi
console.log("dog instanceof Dog:", dog instanceof Dog); // true
console.log("dog instanceof Animal:", dog instanceof Animal); // true
console.log("dog instanceof Cat:", dog instanceof Cat); // false

console.log("tesla instanceof ElectricCar:", tesla instanceof ElectricCar); // true
console.log("tesla instanceof Car:", tesla instanceof Car); // true
console.log("tesla instanceof Vehicle:", tesla instanceof Vehicle); // true

// Type checking funksiyasi
function getType(obj) {
    if (obj instanceof ElectricCar) return "ElectricCar";
    if (obj instanceof Car) return "Car";
    if (obj instanceof Vehicle) return "Vehicle";
    if (obj instanceof Dog) return "Dog";
    if (obj instanceof Cat) return "Cat";
    if (obj instanceof Animal) return "Animal";
    return "Unknown";
}

console.log("Dog type:", getType(dog));
console.log("Tesla type:", getType(tesla));
