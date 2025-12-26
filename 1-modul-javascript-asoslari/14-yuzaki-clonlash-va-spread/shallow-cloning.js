// Shallow Cloning (Yuzaki Clonlash)

// Shallow cloning - faqat birinchi darajali xususiyatlarni nusxalaydi
// Ichki object'lar reference bo'lib qoladi

// Object shallow cloning

// 1. Object.assign()
let original = {
    name: "Matnazar",
    age: 25,
    address: {
        city: "Toshkent",
        street: "Main St"
    }
};

let copy1 = Object.assign({}, original);
console.log("Copy 1:", copy1);

// O'zgartirish
copy1.name = "Ali";
copy1.address.city = "Samarqand";

console.log("Original:", original);
console.log("Copy 1:", copy1);
// address ichki object reference bo'lib qoladi!

// 2. Spread operator
let copy2 = { ...original };
console.log("Copy 2:", copy2);

copy2.name = "Vali";
copy2.address.street = "New St";

console.log("Original:", original);
console.log("Copy 2:", copy2);
// address hali ham reference!

// Array shallow cloning

// 1. slice()
let arr1 = [1, 2, 3, [4, 5]];
let arrCopy1 = arr1.slice();
console.log("Array copy 1:", arrCopy1);

arrCopy1[0] = 10;
arrCopy1[3][0] = 40;

console.log("Original array:", arr1);
console.log("Copy array:", arrCopy1);
// Ichki array reference bo'lib qoladi!

// 2. Spread operator
let arr2 = [1, 2, 3, [4, 5]];
let arrCopy2 = [...arr2];
console.log("Array copy 2:", arrCopy2);

arrCopy2[0] = 20;
arrCopy2[3][1] = 50;

console.log("Original array:", arr2);
console.log("Copy array:", arrCopy2);

// 3. Array.from()
let arr3 = [1, 2, 3];
let arrCopy3 = Array.from(arr3);
console.log("Array copy 3:", arrCopy3);

// 4. concat()
let arr4 = [1, 2, 3];
let arrCopy4 = arr4.concat();
console.log("Array copy 4:", arrCopy4);

// Shallow cloning muammosi
let person = {
    name: "John",
    hobbies: ["reading", "coding"]
};

let personCopy = { ...person };
personCopy.hobbies.push("gaming");

console.log("Original hobbies:", person.hobbies);
console.log("Copy hobbies:", personCopy.hobbies);
// Ikkalasi ham o'zgardi!

// Shallow cloning qachon ishlaydi?
let simple = {
    a: 1,
    b: 2,
    c: 3
};

let simpleCopy = { ...simple };
simpleCopy.a = 10;

console.log("Original:", simple);
console.log("Copy:", simpleCopy);
// Bu yerda ishlaydi, chunki ichki object yo'q

