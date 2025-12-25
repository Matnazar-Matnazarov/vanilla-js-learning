// ============================================
// DARS 11: AMALIYOT. FUNCTION VA METOD
// ============================================

/**
 * Bu darsda function va metodlarni birgalikda ishlatishni o'rganamiz
 * 8-darsdagi kodlarni function'larga o'tkazamiz
 * Uyga vazifalarni bajaramiz
 */

// ============================================
// SERIAL DATABASE OBJECT
// ============================================
const seriesDB = {
    count: 0,
    series: {},
    actors: {},
    genres: [],
    private: false,
};

// ============================================
// VAZIFA 1: ESKI KODLARNI FUNCTION'LARGA O'TKAZISH
// ============================================

/**
 * Serial sonini so'rash va database'ga saqlash
 * @returns {number} - Serial soni
 */
function askNumberOfSeries() {
    const numberOfSeries = +prompt("Serial sonini kiriting:", "0");
    seriesDB.count = numberOfSeries;
    return numberOfSeries;
}

/**
 * Serial ma'lumotlarini so'rash va database'ga saqlash
 * @param {number} numberOfSeries - Serial soni
 */
function askSeriesInfo(numberOfSeries) {
    for (let i = 0; i < numberOfSeries; i += 1) {
        const seriesName = prompt("Oxirgi ko'rgan serial nomini kiriting:", "");
        const seriesRating = prompt("Necha baho berishni xohlaysiz?", "");

        if (seriesName === null || seriesRating === null || seriesName === "" || seriesRating === "") {
            i -= 1;
            continue;
        } else {
            seriesDB.series[seriesName] = seriesRating;
            console.log("Done");
        }
    }
}

/**
 * Serial soniga qarab xabar ko'rsatish
 * @param {number} count - Serial soni
 */
function showSeriesMessage(count) {
    if (count < 5) {
        console.log("Siz kam serial ko'ripsiz");
    } else if (count >= 5 && count < 10) {
        console.log("Siz klassik tomoshabin ekansiz");
    } else {
        console.log("Siz serialchi zvezda ekansiz");
    }
}

/**
 * Asosiy funksiya - barcha serial ma'lumotlarini yig'ish
 */
function startSeriesCollection() {
    const numberOfSeries = askNumberOfSeries();
    askSeriesInfo(numberOfSeries);
    showSeriesMessage(seriesDB.count);
    console.log(seriesDB);
}

// ============================================
// VAZIFA 2: showDb FUNKSIYASI
// ============================================

/**
 * Database ma'lumotlarini ko'rsatish
 * private - false bo'lsa barcha ma'lumot ko'rsatiladi
 * private - true bo'lsa ma'lumot ko'rsatilmaydi
 */
function showDb() {
    if (seriesDB.private === false) {
        console.log("============================================");
        console.log("SERIAL DATABASE MA'LUMOTLARI");
        console.log("============================================");
        console.log("Serial soni:", seriesDB.count);
        console.log("Seriallar:", seriesDB.series);
        console.log("Aktyorlar:", seriesDB.actors);
        console.log("Janrlar:", seriesDB.genres);
        console.log("Private:", seriesDB.private);
        console.log("============================================");
    } else {
        console.log("Ma'lumotlar yashirin (private = true)");
    }
}

// ============================================
// VAZIFA 3: writeGenres FUNKSIYASI
// ============================================

/**
 * Foydalanuvchidan 3 marta janr so'rash va genres massiviga joylash
 */
function writeGenres() {
    seriesDB.genres = []; // Massivni tozalash
    
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Yaxshi ko'rgan janringiz ${i}:`, "");
        
        if (genre === null || genre === "") {
            console.log(`Janr ${i} kiritilmadi`);
            i -= 1; // Qayta so'rash
            continue;
        }
        
        seriesDB.genres.push(genre);
        console.log(`${i}-janr qo'shildi: ${genre}`);
    }
    
    console.log("Barcha janrlar:", seriesDB.genres);
}

// ============================================
// QO'SHIMCHA UTILITY FUNKSIYALAR
// ============================================

/**
 * Serial qo'shish
 * @param {string} name - Serial nomi
 * @param {string} rating - Serial bahosi
 */
function addSeries(name, rating) {
    if (name && rating) {
        seriesDB.series[name] = rating;
        seriesDB.count = Object.keys(seriesDB.series).length;
        console.log(`Serial qo'shildi: ${name} - ${rating}`);
    } else {
        console.log("Serial nomi yoki bahosi kiritilmadi!");
    }
}

/**
 * Serial o'chirish
 * @param {string} name - Serial nomi
 */
function deleteSeries(name) {
    if (seriesDB.series[name]) {
        delete seriesDB.series[name];
        seriesDB.count = Object.keys(seriesDB.series).length;
        console.log(`Serial o'chirildi: ${name}`);
    } else {
        console.log(`Serial topilmadi: ${name}`);
    }
}

/**
 * Serial bahosini o'zgartirish
 * @param {string} name - Serial nomi
 * @param {string} newRating - Yangi baho
 */
function updateSeriesRating(name, newRating) {
    if (seriesDB.series[name]) {
        seriesDB.series[name] = newRating;
        console.log(`Serial bahosi yangilandi: ${name} - ${newRating}`);
    } else {
        console.log(`Serial topilmadi: ${name}`);
    }
}

/**
 * Private holatini o'zgartirish
 * @param {boolean} isPrivate - Private holati
 */
function setPrivate(isPrivate) {
    seriesDB.private = isPrivate;
    console.log(`Private holati: ${isPrivate ? 'Yashirin' : 'Ochiq'}`);
}

/**
 * Database'ni tozalash
 */
function clearDatabase() {
    seriesDB.count = 0;
    seriesDB.series = {};
    seriesDB.actors = {};
    seriesDB.genres = [];
    seriesDB.private = false;
    console.log("Database tozalandi!");
}

// ============================================
// ASOSIY ISHGA TUSHRISH
// ============================================

console.log("============================================");
console.log("DARS 11: AMALIYOT. FUNCTION VA METOD");
console.log("============================================\n");

// Vazifa 1: Eski kodlarni function'larga o'tkazish
console.log("VAZIFA 1: Serial ma'lumotlarini yig'ish");
console.log("--------------------------------------------");
// startSeriesCollection(); // Comment qilingan - o'zingiz ochishingiz mumkin

// Vazifa 2: showDb funksiyasi
console.log("\nVAZIFA 2: Database ma'lumotlarini ko'rsatish");
console.log("--------------------------------------------");
showDb();

// Vazifa 3: writeGenres funksiyasi
console.log("\nVAZIFA 3: Janrlar yozish");
console.log("--------------------------------------------");
// writeGenres(); // Comment qilingan - o'zingiz ochishingiz mumkin

// Qo'shimcha funksiyalar misollari
console.log("\nQO'SHIMCHA FUNKSIYALAR MISOLI");
console.log("--------------------------------------------");

// Serial qo'shish
addSeries("Game of Thrones", "9.5");
addSeries("Breaking Bad", "9.8");
addSeries("Stranger Things", "8.8");

// Database'ni ko'rsatish
showDb();

// Private holatini o'zgartirish
console.log("\nPrivate holatini o'zgartirish:");
setPrivate(true);
showDb(); // Endi ko'rsatilmaydi

setPrivate(false);
showDb(); // Endi ko'rsatiladi

console.log("\n============================================");
console.log("Barcha funksiyalar tayyor!");
console.log("============================================");

