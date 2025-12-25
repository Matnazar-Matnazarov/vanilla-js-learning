// // Amaliyot: Shartli operator va tsikl

// // Vazifa 1: Foydalanuvchi yoshiga qarab xabar
// let userAge = parseInt(prompt("Yoshingizni kiriting:"));
// if (userAge >= 18) {
//     console.log("Siz kattasiz, barcha xizmatlardan foydalanishingiz mumkin");
// } else if (userAge >= 13) {
//     console.log("Siz o'smirsiz, ba'zi cheklovlar mavjud");
// } else {
//     console.log("Siz hali yoshsiz");
// }

// // Vazifa 2: Sonlarni yig'indisi
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum += i;
// }
// console.log(`1 dan 10 gacha sonlarning yig'indisi: ${sum}`);

// // Vazifa 3: Faktorial
// function factorial(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(`5! = ${factorial(5)}`);

// // Vazifa 4: Juft/toq tekshirish
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} - juft son`);
//     } else {
//         console.log(`${i} - toq son`);
//     }
// }


// Vazifa 5: Seriallar haqida ma'lumotlar

const numberOfSeries = +prompt("Serial sonini kiriting:", "0");

const seriesDB = {
    count: numberOfSeries,
    series: {},
    actors: {},
    genres: [],
    private: false,
};

for(let i=0; i < numberOfSeries; i+=1) {
    const a = prompt("Oxirgi ko'rgan serial nomini kiriting:", "");
    const b= prompt("Necha baho berishni xohlaysiz?", "");

    if(a === null || b === null || a === "" || b === "") {
        i -= 1;
        continue;
    }
    else {
        seriesDB.series[a] = b;
        console.log("Done");
    }
}

if(seriesDB.count<5) {
    console.log("Siz kam serial ko'ripsiz");
}
else if(seriesDB.count>=5 && seriesDB.count<10) {
    console.log("Siz klassik tomoshabin ekansiz");
}
else {
    console.log("Siz serialchi zvezda ekansiz");
}
console.log(seriesDB);