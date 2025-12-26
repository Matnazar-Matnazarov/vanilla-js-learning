// Object va Array Cloning - Amaliy misollar

// Object cloning usullari

let user = {
    id: 1,
    name: "Matnazar",
    email: "matnazar@example.com",
    settings: {
        theme: "dark",
        notifications: true
    },
    tags: ["developer", "student"]
};

// 1. Shallow clone - Object.assign()
let userCopy1 = Object.assign({}, user);
userCopy1.name = "Ali";
userCopy1.settings.theme = "light";
console.log("Original:", user.settings.theme);
console.log("Copy 1:", userCopy1.settings.theme);
// settings reference bo'lib qoladi

// 2. Shallow clone - Spread
let userCopy2 = { ...user };
userCopy2.email = "ali@example.com";
userCopy2.tags.push("teacher");
console.log("Original tags:", user.tags);
console.log("Copy 2 tags:", userCopy2.tags);
// tags array reference bo'lib qoladi

// 3. Deep clone - JSON
let userCopy3 = JSON.parse(JSON.stringify(user));
userCopy3.settings.notifications = false;
userCopy3.tags.push("mentor");
console.log("Original settings:", user.settings.notifications);
console.log("Copy 3 settings:", userCopy3.settings.notifications);
// Endi to'liq alohida

// Array cloning usullari

let items = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    [1, 2, 3]
];

// 1. Shallow clone - slice()
let itemsCopy1 = items.slice();
itemsCopy1[0].name = "Tablet";
itemsCopy1[2][0] = 10;
console.log("Original:", items[0].name);
console.log("Copy 1:", itemsCopy1[0].name);
// Object reference bo'lib qoladi

// 2. Shallow clone - Spread
let itemsCopy2 = [...items];
itemsCopy2[1].name = "Watch";
console.log("Original:", items[1].name);
console.log("Copy 2:", itemsCopy2[1].name);

// 3. Deep clone - JSON
let itemsCopy3 = JSON.parse(JSON.stringify(items));
itemsCopy3[0].name = "Desktop";
itemsCopy3[2][1] = 20;
console.log("Original:", items[0].name);
console.log("Copy 3:", itemsCopy3[0].name);
// Endi to'liq alohida

// Nested object cloning
let company = {
    name: "Tech Corp",
    employees: [
        { name: "John", department: "IT" },
        { name: "Jane", department: "HR" }
    ],
    location: {
        city: "Toshkent",
        address: {
            street: "Main St",
            number: 123
        }
    }
};

// Shallow clone
let companyCopy1 = { ...company };
companyCopy1.employees[0].name = "Bob";
companyCopy1.location.address.street = "New St";
console.log("Original employee:", company.employees[0].name);
console.log("Copy employee:", companyCopy1.employees[0].name);
// Ikkalasi ham o'zgardi

// Deep clone
let companyCopy2 = JSON.parse(JSON.stringify(company));
companyCopy2.employees[1].name = "Alice";
companyCopy2.location.address.number = 456;
console.log("Original employee:", company.employees[1].name);
console.log("Copy employee:", companyCopy2.employees[1].name);
// Endi alohida

// Array of objects cloning
let products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 }
];

// Shallow clone
let productsCopy1 = [...products];
productsCopy1[0].price = 150;
console.log("Original price:", products[0].price);
console.log("Copy price:", productsCopy1[0].price);
// Ikkalasi ham o'zgardi

// Deep clone
let productsCopy2 = JSON.parse(JSON.stringify(products));
productsCopy2[1].price = 250;
console.log("Original price:", products[1].price);
console.log("Copy price:", productsCopy2[1].price);
// Endi alohida

// Cloning utility funksiyalar
function cloneObject(obj) {
    return { ...obj };
}

function cloneArray(arr) {
    return [...arr];
}

function deepCloneObject(obj) {
    return JSON.parse(JSON.stringify(obj));
}

let testObj = { a: 1, b: { c: 2 } };
let cloned = cloneObject(testObj);
cloned.b.c = 3;
console.log("Original:", testObj.b.c);
console.log("Cloned:", cloned.b.c);

