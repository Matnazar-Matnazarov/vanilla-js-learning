// Object Destructuring

// Oddiy destructuring
let person = {
    name: "Matnazar",
    age: 25,
    city: "Toshkent"
};

let { name, age, city } = person;
console.log(name, age, city);

// O'zgaruvchi nomini o'zgartirish
let { name: ism, age: yosh } = person;
console.log(ism, yosh);

// Default qiymatlar
let { name: userName = "Guest", country = "Uzbekistan" } = person;
console.log(userName, country);

// Nested destructuring
let company = {
    name: "Tech Corp",
    address: {
        street: "Main St",
        city: "Toshkent",
        zip: "100000"
    }
};

let { address: { street, city: cityName } } = company;
console.log(street, cityName);

// Function parametrlarida
function displayPerson({ name, age }) {
    console.log(`${name} - ${age} yosh`);
}

displayPerson(person);

// Return qiymatda
function getPerson() {
    return {
        firstName: "John",
        lastName: "Doe",
        age: 30
    };
}

let { firstName, lastName } = getPerson();
console.log(firstName, lastName);

// Rest operator bilan
let { name: personName, ...rest } = person;
console.log(personName);
console.log(rest);

// Mavjud o'zgaruvchiga destructuring
let a, b;
({ name: a, age: b } = person);
console.log(a, b);

// Computed property names
let prop = "name";
let { [prop]: value } = person;
console.log(value);

