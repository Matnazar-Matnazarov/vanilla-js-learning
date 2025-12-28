/**
 * DARS 17: DOM BILAN ISHLASH - ASOSIY SCRIPT
 * 
 * Bu script barcha DOM manipulyatsiya tushunchalarini birlashtiradi
 * va asosiy misollarni ko'rsatadi
 */

console.log("DARS 17: DOM BILAN ISHLASH\n");

// DOM NIMA?
console.log("=== DOM (Document Object Model) ===");
console.log("DOM - bu HTML hujjatining daraxt struktura ko'rinishi");
console.log("JavaScript orqali HTML elementlarini tanlash va o'zgartirish imkoniyati\n");

// DOCUMENT OBYEKTI
console.log("=== Document Ob'yekti ===");
console.log("document - bu butun HTML hujjatini ifodalaydi");
console.log("document.documentElement:", document.documentElement.tagName);
console.log("document.body:", document.body.tagName);
console.log("document.head:", document.head.tagName);
console.log("");

// ELEMENTLARNI TANLASH (ASOSIY MISOL)
console.log("=== Elementlarni tanlash (asosiy) ===");

// getElementById - ID bo'yicha element tanlash
const outputElement = document.getElementById('output');
if (outputElement) {
    console.log("✅ getElementById orqali output elementi topildi");
}

// querySelector - CSS selector bo'yicha birinchi elementni tanlash
const demoContainer = document.querySelector('#demo-container');
if (demoContainer) {
    console.log("✅ querySelector orqali demo-container elementi topildi");
}

// querySelectorAll - CSS selector bo'yicha barcha elementlarni tanlash
const buttons = document.querySelectorAll('button');
console.log(`✅ querySelectorAll orqali ${buttons.length} ta button elementi topildi`);

console.log("\nBatafsil ma'lumot uchun alohida fayllarni oching!");
