/**
 * DARS 19: HODISALAR BILAN ISHLASH - ASOSIY SCRIPT
 * 
 * Bu script barcha event handling tushunchalarini birlashtiradi
 * va asosiy misollarni ko'rsatadi
 */

console.log("DARS 19: HODISALAR BILAN ISHLASH\n");

// Event handling asoslari
console.log("Event handling asoslari:");
console.log("  - addEventListener - event listener qo'shish");
console.log("  - Event types - turli xil event turlari");
console.log("  - Event object - event ma'lumotlari");
console.log("  - Event delegation - samarali event boshqaruvi");
console.log("");

// Demo elementlar
const demoButton = document.getElementById('demo-button');
const demoInput = document.getElementById('demo-input');

if (demoButton) {
    console.log("✅ Demo button elementi topildi");
}

if (demoInput) {
    console.log("✅ Demo input elementi topildi");
}

console.log("\nBatafsil ma'lumot uchun alohida fayllarni oching!");
