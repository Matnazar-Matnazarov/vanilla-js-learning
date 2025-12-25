
// STRING METODLARI


/**
 * String metodlari - matnlar bilan ishlash uchun ishlatiladi
 * String'lar immutable (o'zgarmas), shuning uchun metodlar yangi string qaytaradi
 */


// 1. length - String uzunligi

let text = "JavaScript";
console.log("String uzunligi:", text.length); // 10


// 2. toUpperCase() va toLowerCase()

let name = "Matnazar";
console.log("Katta harflar:", name.toUpperCase()); // "MATNAZAR"
console.log("Kichik harflar:", name.toLowerCase()); // "matnazar"


// 3. charAt() va charCodeAt()

let str = "Hello";
console.log("3-indexdagi belgi:", str.charAt(3)); // "l"
console.log("3-indexdagi belgi kodi:", str.charCodeAt(3)); // 108


// 4. indexOf() va lastIndexOf()

let message = "JavaScript dasturlash tili";
console.log("'a' birinchi topilgan joyi:", message.indexOf("a")); // 1
console.log("'a' oxirgi topilgan joyi:", message.lastIndexOf("a")); // 9
console.log("Topilmasa:", message.indexOf("x")); // -1


// 5. includes(), startsWith(), endsWith()

let text2 = "JavaScript o'rganish";
console.log("'JavaScript' bor:", text2.includes("JavaScript")); // true
console.log("'JavaScript' bilan boshlanadi:", text2.startsWith("JavaScript")); // true
console.log("'o'rganish' bilan tugaydi:", text2.endsWith("o'rganish")); // true


// 6. slice(), substring(), substr()

let str2 = "JavaScript";
console.log("slice(0, 4):", str2.slice(0, 4)); // "Java"
console.log("slice(-6):", str2.slice(-6)); // "Script" (oxiridan)
console.log("substring(0, 4):", str2.substring(0, 4)); // "Java"
console.log("substr(4, 6):", str2.substr(4, 6)); // "Script"


// 7. replace() va replaceAll()

let text3 = "JavaScript JavaScript";
console.log("replace (birinchi):", text3.replace("JavaScript", "JS")); // "JS JavaScript"
console.log("replaceAll (barcha):", text3.replaceAll("JavaScript", "JS")); // "JS JS"

// Regex bilan replace
let text4 = "JavaScript 2024";
console.log("Regex replace:", text4.replace(/\d+/g, "2025")); // "JavaScript 2025"


// 8. split() - String'ni array'ga aylantirish

let fruits = "olma, banan, apelsin";
let fruitsArray = fruits.split(", ");
console.log("Split natijasi:", fruitsArray); // ["olma", "banan", "apelsin"]

let words = "JavaScript dasturlash";
let wordsArray = words.split(" ");
console.log("So'zlar:", wordsArray); // ["JavaScript", "dasturlash"]


// 9. trim(), trimStart(), trimEnd()

let text5 = "   JavaScript   ";
console.log("trim():", text5.trim()); // "JavaScript"
console.log("trimStart():", text5.trimStart()); // "JavaScript   "
console.log("trimEnd():", text5.trimEnd()); // "   JavaScript"


// 10. concat() - String'larni birlashtirish

let str3 = "JavaScript";
let str4 = " dasturlash";
let result = str3.concat(str4);
console.log("concat():", result); // "JavaScript dasturlash"

// + operator ham ishlaydi
console.log("+ operator:", str3 + str4); // "JavaScript dasturlash"


// 11. repeat() - String'ni takrorlash

let str5 = "Ha ";
console.log("repeat(3):", str5.repeat(3)); // "Ha Ha Ha "


// 12. padStart() va padEnd()

let number = "5";
console.log("padStart(3, '0'):", number.padStart(3, "0")); // "005"
console.log("padEnd(3, '0'):", number.padEnd(3, "0")); // "500"


// 13. Template Literals (ES6)

let firstName = "Matnazar";
let age = 25;
let greeting = `Salom, mening ismim ${firstName}, yoshim ${age} da`;
console.log("Template literal:", greeting);

// Ko'p qatorli matn
let multiLine = `
  Bu birinchi qator
  Bu ikkinchi qator
  Bu uchinchi qator
`;
console.log("Ko'p qatorli:", multiLine);

