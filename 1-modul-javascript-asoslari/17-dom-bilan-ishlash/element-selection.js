/**
 * ELEMENTLARNI TANLASH
 * 
 * DOM'da elementlarni tanlash uchun turli metodlar mavjud:
 * - getElementById - ID bo'yicha bitta element
 * - getElementsByClassName - Class bo'yicha elementlar ro'yxati
 * - getElementsByTagName - Tag nomi bo'yicha elementlar ro'yxati
 * - querySelector - CSS selector bo'yicha birinchi element
 * - querySelectorAll - CSS selector bo'yicha barcha elementlar
 */

console.log("============================================");
console.log("ELEMENTLARNI TANLASH");
console.log("============================================\n");

// ============================================
// 1. getElementById
// ============================================
console.log("=== 1. getElementById ===");
console.log("ID bo'yicha bitta elementni qaytaradi\n");

const outputElement = document.getElementById('output');
if (outputElement) {
    console.log("✅ Output elementi topildi:", outputElement.tagName);
    console.log("Element ID:", outputElement.id);
} else {
    console.log("❌ Output elementi topilmadi");
}

const demoContainer = document.getElementById('demo-container');
if (demoContainer) {
    console.log("✅ Demo container elementi topildi");
    console.log("Container class:", demoContainer.className);
}

// Agar element topilmasa, null qaytadi
const nonExistent = document.getElementById('non-existent-id');
console.log("Mavjud bo'lmagan element:", nonExistent); // null

console.log("");

// ============================================
// 2. getElementsByClassName
// ============================================
console.log("=== 2. getElementsByClassName ===");
console.log("Class nomi bo'yicha elementlar ro'yxatini qaytaradi\n");

const cards = document.getElementsByClassName('card');
console.log(`✅ ${cards.length} ta card elementi topildi`);

// HTMLCollection - bu live collection (jonli ro'yxat)
// Ya'ni DOM o'zgarganda avtomatik yangilanadi
for (let i = 0; i < cards.length; i++) {
    console.log(`Card ${i + 1}:`, cards[i].tagName);
}

console.log("");

// ============================================
// 3. getElementsByTagName
// ============================================
console.log("=== 3. getElementsByTagName ===");
console.log("Tag nomi bo'yicha elementlar ro'yxatini qaytaradi\n");

const buttons = document.getElementsByTagName('button');
console.log(`✅ ${buttons.length} ta button elementi topildi`);

const paragraphs = document.getElementsByTagName('p');
console.log(`✅ ${paragraphs.length} ta paragraph elementi topildi`);

console.log("");

// ============================================
// 4. querySelector
// ============================================
console.log("=== 4. querySelector ===");
console.log("CSS selector bo'yicha birinchi elementni qaytaradi\n");

// ID bo'yicha
const firstCard = document.querySelector('.card');
if (firstCard) {
    console.log("✅ Birinchi card elementi:", firstCard.querySelector('h2')?.textContent);
}

// Class bo'yicha
const demoText = document.querySelector('#demo-text');
if (demoText) {
    console.log("✅ Demo text elementi:", demoText.textContent);
}

// Nested selector
const cardTitle = document.querySelector('.card h2');
if (cardTitle) {
    console.log("✅ Card title:", cardTitle.textContent);
}

// Attribute selector
const demoButton = document.querySelector('#demo-button.btn-primary');
if (demoButton) {
    console.log("✅ Demo button elementi topildi");
}

console.log("");

// ============================================
// 5. querySelectorAll
// ============================================
console.log("=== 5. querySelectorAll ===");
console.log("CSS selector bo'yicha barcha elementlarni qaytaradi\n");

// Barcha card elementlari
const allCards = document.querySelectorAll('.card');
console.log(`✅ ${allCards.length} ta card elementi topildi`);

// NodeList - bu static collection (statik ro'yxat)
// forEach metodini qo'llab bo'ladi
allCards.forEach((card, index) => {
    const title = card.querySelector('h2');
    if (title) {
        console.log(`Card ${index + 1}: ${title.textContent}`);
    }
});

// Barcha button elementlari
const allButtons = document.querySelectorAll('button');
console.log(`✅ ${allButtons.length} ta button elementi topildi`);

// Complex selector
const cardButtons = document.querySelectorAll('.card button');
console.log(`✅ ${cardButtons.length} ta card ichidagi button elementi topildi`);

console.log("");

// ============================================
// 6. FARQLAR VA AFZALLIKLAR
// ============================================
console.log("=== 6. Metodlar orasidagi farqlar ===");
console.log("");

console.log("getElementById:");
console.log("  - Faqat ID bo'yicha");
console.log("  - Bitta element qaytaradi (yoki null)");
console.log("  - Eng tez ishlaydi");
console.log("");

console.log("querySelector:");
console.log("  - Har qanday CSS selector");
console.log("  - Bitta element qaytaradi (yoki null)");
console.log("  - Qulay va moslashuvchan");
console.log("");

console.log("querySelectorAll:");
console.log("  - Har qanday CSS selector");
console.log("  - NodeList qaytaradi (forEach ishlaydi)");
console.log("  - Eng moslashuvchan");
console.log("");

console.log("getElementsByClassName / getElementsByTagName:");
console.log("  - HTMLCollection qaytaradi (live collection)");
console.log("  - Array metodlari ishlamaydi");
console.log("  - Array.from() yoki spread operator bilan array'ga aylantirish mumkin");
console.log("");

// ============================================
// 7. AMALIY MISOL
// ============================================
console.log("=== 7. Amaliy misol ===");
console.log("");

// Barcha card elementlarini topish va ularning ma'lumotlarini chiqarish
const cardsInfo = document.querySelectorAll('.card');
console.log("Barcha card elementlari haqida ma'lumot:");
cardsInfo.forEach((card, index) => {
    const title = card.querySelector('h2')?.textContent || 'Noma\'lum';
    const description = card.querySelector('p')?.textContent || 'Tavsif yo\'q';
    const button = card.querySelector('button');
    
    console.log(`\nCard ${index + 1}:`);
    console.log(`  Sarlavha: ${title}`);
    console.log(`  Tavsif: ${description}`);
    console.log(`  Tugma mavjud: ${button ? 'Ha' : 'Yo\'q'}`);
});

console.log("\n============================================");
console.log("Elementlarni tanlash mavzusi tugadi!");
console.log("============================================");
