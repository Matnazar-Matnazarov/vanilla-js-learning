// Inheritance - Meros olish

// Class inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        return `${this.name} ovoz chiqaradi`;
    }
    
    eat() {
        return `${this.name} ovqatlanmoqda`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    
    speak() {
        return `${this.name} vov-vov qiladi`;
    }
    
    fetch() {
        return `${this.name} tayoqni olib kelmoqda`;
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    
    speak() {
        return `${this.name} miyavlaydi`;
    }
}

let dog = new Dog("Rex", "Labrador");
console.log("Dog speak:", dog.speak());
console.log("Dog eat:", dog.eat());
console.log("Dog fetch:", dog.fetch());

let cat = new Cat("Whiskers");
console.log("Cat speak:", cat.speak());
console.log("Cat eat:", cat.eat());

// Multi-level inheritance
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
    
    start() {
        return `${this.brand} ishga tushdi`;
    }
}

class Car extends Vehicle {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }
    
    drive() {
        return `${this.brand} ${this.model} yurmoqda`;
    }
}

class ElectricCar extends Car {
    constructor(brand, model, battery) {
        super(brand, model);
        this.battery = battery;
    }
    
    charge() {
        return `${this.brand} ${this.model} zaryadlanmoqda`;
    }
}

let tesla = new ElectricCar("Tesla", "Model 3", "100%");
console.log("Start:", tesla.start());
console.log("Drive:", tesla.drive());
console.log("Charge:", tesla.charge());

// Method overriding
class Shape {
    constructor(name) {
        this.name = name;
    }
    
    getArea() {
        return "Area hisoblanmoqda";
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super("Rectangle");
        this.width = width;
        this.height = height;
    }
    
    getArea() {
        return this.width * this.height;
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
}

let rect = new Rectangle(5, 10);
let circle = new Circle(5);
console.log("Rectangle area:", rect.getArea());
console.log("Circle area:", circle.getArea());

// instanceof operator
console.log("dog instanceof Dog:", dog instanceof Dog);
console.log("dog instanceof Animal:", dog instanceof Animal);
console.log("tesla instanceof ElectricCar:", tesla instanceof ElectricCar);
console.log("tesla instanceof Car:", tesla instanceof Car);
console.log("tesla instanceof Vehicle:", tesla instanceof Vehicle);

