// Shartli operatorlar

// if/else
let age = 18;
if (age >= 18) {
    console.log("Siz kattasiz");
} else {
    console.log("Siz hali yoshsiz");
}

// switch
let day = 1;
switch (day) {
    case 1:
        console.log("Dushanba");
        break;
    case 2:
        console.log("Seshanba");
        break;
    default:
        console.log("Boshqa kun");
}

// for tsikli
for (let i = 0; i < 5; i++) {
    console.log(`Iteratsiya: ${i}`);
}

// while tsikli
let count = 0;
while (count < 3) {
    console.log(`Count: ${count}`);
    count++;
}

// do-while tsikli
let num = 0;
do {
    console.log(`Number: ${num}`);
    num++;
} while (num < 3);

