// Advanced Destructuring - Murakkab misollar

// Rest va Spread operatorlar
let user = {
    id: 1,
    name: "Matnazar",
    email: "matnazar@example.com",
    role: "developer"
};

let { id, ...userInfo } = user;
console.log(id);
console.log(userInfo);

// Nested object va array
let data = {
    users: [
        { name: "John", age: 25 },
        { name: "Jane", age: 30 }
    ],
    settings: {
        theme: "dark",
        language: "uz"
    }
};

let {
    users: [firstUser, secondUser],
    settings: { theme }
} = data;

console.log(firstUser);
console.log(theme);

// Function parametrlarida default
function createUser({
    name = "Guest",
    age = 18,
    city = "Unknown"
} = {}) {
    return { name, age, city };
}

console.log(createUser());
console.log(createUser({ name: "John" }));

// Destructuring bilan return
function processData(input) {
    let { a, b } = input;
    return {
        sum: a + b,
        product: a * b
    };
}

let result = processData({ a: 5, b: 3 });
console.log(result);

// Array metodlarida destructuring
let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];

users.forEach(({ name, age }) => {
    console.log(`${name} - ${age} yosh`);
});

let names = users.map(({ name }) => name);
console.log(names);

// Computed property destructuring
function getProperty(obj, key) {
    let { [key]: value } = obj;
    return value;
}

console.log(getProperty(person, "name"));

// Destructuring bilan shartli
let config = {
    apiUrl: "https://api.example.com",
    timeout: 5000
};

let {
    apiUrl,
    timeout,
    retries = 3
} = config;

console.log(apiUrl, timeout, retries);

// Real-world misol: API response
let apiResponse = {
    status: "success",
    data: {
        user: {
            id: 1,
            name: "Matnazar",
            profile: {
                email: "test@example.com",
                phone: "123456789"
            }
        }
    }
};

let {
    status,
    data: {
        user: {
            name: userName,
            profile: { email }
        }
    }
} = apiResponse;

console.log(status, userName, email);

