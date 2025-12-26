// Deep Cloning (Chuqur Clonlash)

// Deep cloning - barcha darajadagi xususiyatlarni nusxalaydi
// Ichki object'lar ham alohida nusxalanadi

// 1. JSON.parse(JSON.stringify()) - Oddiy usul
let original = {
    name: "Matnazar",
    age: 25,
    address: {
        city: "Toshkent",
        street: "Main St",
        coordinates: {
            lat: 41.3111,
            lng: 69.2797
        }
    },
    hobbies: ["reading", "coding"]
};

let deepCopy1 = JSON.parse(JSON.stringify(original));
console.log("Deep copy 1:", deepCopy1);

deepCopy1.name = "Ali";
deepCopy1.address.city = "Samarqand";
deepCopy1.hobbies.push("gaming");

console.log("Original:", original);
console.log("Deep copy 1:", deepCopy1);
// Endi to'liq alohida!

// JSON usulining cheklovlari
let objWithDate = {
    name: "Test",
    date: new Date(),
    func: function() { return "test"; },
    undefined: undefined,
    symbol: Symbol("test")
};

let jsonCopy = JSON.parse(JSON.stringify(objWithDate));
console.log("JSON copy:", jsonCopy);
// Date, function, undefined, Symbol yo'qoladi!

// 2. Recursive deep clone funksiyasi
function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }
    
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    
    if (obj instanceof Array) {
        return obj.map(item => deepClone(item));
    }
    
    if (typeof obj === "object") {
        let cloned = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                cloned[key] = deepClone(obj[key]);
            }
        }
        return cloned;
    }
}

let deepCopy2 = deepClone(original);
console.log("Deep copy 2:", deepCopy2);

deepCopy2.address.coordinates.lat = 39.6542;
console.log("Original coordinates:", original.address.coordinates);
console.log("Copy coordinates:", deepCopy2.address.coordinates);
// To'liq alohida!

// 3. StructuredClone() - Modern usul (ES2022)
// let deepCopy3 = structuredClone(original);
// console.log("Deep copy 3:", deepCopy3);

// Array deep cloning
let nestedArray = [
    [1, 2, 3],
    [4, 5, 6],
    { a: 1, b: 2 }
];

let deepArrayCopy = JSON.parse(JSON.stringify(nestedArray));
console.log("Deep array copy:", deepArrayCopy);

deepArrayCopy[0][0] = 10;
deepArrayCopy[2].a = 20;

console.log("Original array:", nestedArray);
console.log("Deep copy array:", deepArrayCopy);

// Deep clone funksiyasi - to'liq versiya
function completeDeepClone(obj, visited = new WeakMap()) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }
    
    if (visited.has(obj)) {
        return visited.get(obj);
    }
    
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    
    if (obj instanceof RegExp) {
        return new RegExp(obj);
    }
    
    if (obj instanceof Array) {
        let cloned = [];
        visited.set(obj, cloned);
        for (let i = 0; i < obj.length; i++) {
            cloned[i] = completeDeepClone(obj[i], visited);
        }
        return cloned;
    }
    
    if (typeof obj === "object") {
        let cloned = {};
        visited.set(obj, cloned);
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                cloned[key] = completeDeepClone(obj[key], visited);
            }
        }
        return cloned;
    }
}

let complex = {
    name: "Test",
    date: new Date(),
    regex: /test/g,
    nested: {
        arr: [1, 2, 3],
        obj: { a: 1 }
    }
};

let complexCopy = completeDeepClone(complex);
console.log("Complex copy:", complexCopy);

