/**
 * KONTENT MANIPULYATSIYASI
 * 
 * Elementlarning kontentini o'zgartirish uchun turli xususiyatlar mavjud:
 * - innerHTML - HTML kodini o'qish/yozish
 * - textContent - faqat matnni o'qish/yozish
 * - innerText - ko'rinadigan matnni o'qish/yozish
 * - outerHTML - element o'zi bilan birga HTML kodini o'qish/yozish
 */

console.log("KONTENT MANIPULYATSIYASI\n");

// 1. innerHTML - HTML kodini o'zgartirish
console.log("=== 1. innerHTML ===");
console.log("Element ichidagi HTML kodini o'qish va yozish\n");

const demoContainer = document.getElementById('demo-container');
if (demoContainer) {
    // innerHTML ni o'qish
    console.log("Hozirgi innerHTML:");
    console.log(demoContainer.innerHTML.substring(0, 100) + "...");
    console.log("");
    
    // innerHTML ga yangi HTML kod yozish
    const newHTML = `
        <div style="padding: 10px; background: #e8f5e9; border-radius: 5px; margin: 5px;">
            <strong>innerHTML</strong> orqali qo'shilgan element
            <span style="color: #4caf50;">✓</span>
        </div>
    `;
    
    // innerHTML ga qo'shish (mavjud kontentni saqlab qolish)
    demoContainer.innerHTML += newHTML;
    console.log("✅ innerHTML ga yangi HTML kod qo'shildi");
    
    // Eslatma: innerHTML ga HTML kod yozilganda, barcha child elementlar o'chiriladi
    // va yangi HTML kod qo'shiladi. Shuning uchun ehtiyotkorlik bilan ishlatish kerak.
}

console.log("");

// 2. textContent - Faqat matnni o'zgartirish
console.log("=== 2. textContent ===");
console.log("Element ichidagi faqat matnni o'qish va yozish\n");

const demoText = document.getElementById('demo-text');
if (demoText) {
    // textContent ni o'qish
    console.log("Hozirgi textContent:", demoText.textContent);
    console.log("");
    
    // textContent ga yangi matn yozish
    const originalText = demoText.textContent;
    demoText.textContent = "textContent orqali o'zgartirilgan matn";
    console.log("✅ textContent o'zgartirildi");
    console.log("Eski matn:", originalText);
    console.log("Yangi matn:", demoText.textContent);
    console.log("");
    
    // textContent HTML taglarini matn sifatida ko'rsatadi
    demoText.textContent = "<strong>Bu HTML tag emas, matn</strong>";
    console.log("textContent HTML taglarni matn sifatida ko'rsatadi");
    console.log("Ko'rinishi:", demoText.textContent);
}

console.log("");

// 3. innerText - Ko'rinadigan matnni o'zgartirish
console.log("=== 3. innerText ===");
console.log("Element ichidagi ko'rinadigan matnni o'qish va yozish\n");

if (demoText) {
    // innerText ni o'qish
    console.log("Hozirgi innerText:", demoText.innerText);
    console.log("");
    
    // innerText ga yangi matn yozish
    demoText.innerText = "innerText orqali o'zgartirilgan matn";
    console.log("✅ innerText o'zgartirildi");
    console.log("Yangi innerText:", demoText.innerText);
}

// innerText va textContent orasidagi farq
const testElement = document.createElement('div');
testElement.innerHTML = `
    <p>Bu ko'rinadigan matn</p>
    <p style="display: none;">Bu yashirin matn</p>
    <script>console.log('Bu script')</script>
`;

console.log("\nTest element yaratildi:");
console.log("textContent:", testElement.textContent);
console.log("innerText:", testElement.innerText);
console.log("");

// 4. outerHTML - Element o'zi bilan birga HTML
console.log("=== 4. outerHTML ===");
console.log("Element o'zi bilan birga HTML kodini o'qish va yozish\n");

if (demoText) {
    // outerHTML ni o'qish
    console.log("Hozirgi outerHTML:");
    console.log(demoText.outerHTML);
    console.log("");
    
    // Eslatma: outerHTML ga yozilganda, element o'zi ham almashtiriladi
    // Bu juda xavfli, shuning uchun kamdan-kam ishlatiladi
    console.log("⚠️ outerHTML ga yozish elementni to'liq almashtiradi!");
}

console.log("");

// 5. FARQLAR: innerHTML vs textContent vs innerText
console.log("=== 5. Xususiyatlar orasidagi farqlar ===");
console.log("");

const comparisonElement = document.createElement('div');
comparisonElement.innerHTML = `
    <p>Bu <strong>qalin</strong> matn</p>
    <p style="display: none;">Bu yashirin matn</p>
    <script>alert('Xavfli!')</script>
`;

console.log("Test element yaratildi:");
console.log("");

console.log("innerHTML:");
console.log("  - HTML kodini qaytaradi/yozadi");
console.log("  - HTML taglarini tahlil qiladi va render qiladi");
console.log("  - Xavfli bo'lishi mumkin (XSS hujumlari)");
console.log("  - Natija:", comparisonElement.innerHTML.substring(0, 50) + "...");
console.log("");

console.log("textContent:");
console.log("  - Faqat matnni qaytaradi/yozadi");
console.log("  - HTML taglarini matn sifatida ko'rsatadi");
console.log("  - Xavfsiz (XSS hujumlaridan himoyalangan)");
console.log("  - Yashirin elementlarni ham qaytaradi");
console.log("  - Natija:", comparisonElement.textContent.substring(0, 50) + "...");
console.log("");

console.log("innerText:");
console.log("  - Faqat ko'rinadigan matnni qaytaradi/yozadi");
console.log("  - CSS'ga qarab ishlaydi (display: none elementlarni ko'rsatmaydi)");
console.log("  - HTML taglarini matn sifatida ko'rsatadi");
console.log("  - Performance jihatdan sekinroq");
console.log("  - Natija:", comparisonElement.innerText);
console.log("");

// 6. AMALIY MISOL - Dinamik kontent yaratish
console.log("=== 6. Amaliy misol - Dinamik kontent ===");
console.log("");

if (demoContainer) {
    // textContent yordamida xavfsiz matn qo'shish
    const safeTextDiv = document.createElement('div');
    safeTextDiv.textContent = "Xavfsiz matn: <script>alert('Bu ishlamaydi')</script>";
    safeTextDiv.style.padding = '10px';
    safeTextDiv.style.backgroundColor = '#fff3e0';
    safeTextDiv.style.borderRadius = '5px';
    safeTextDiv.style.margin = '5px';
    demoContainer.appendChild(safeTextDiv);
    console.log("✅ textContent yordamida xavfsiz matn qo'shildi");
    
    // innerHTML yordamida HTML kod qo'shish
    const htmlDiv = document.createElement('div');
    htmlDiv.innerHTML = `
        <div style="padding: 10px; background: #e1f5fe; border-radius: 5px; margin: 5px;">
            <strong>innerHTML</strong> yordamida <em>HTML kod</em> qo'shildi
            <span style="color: #0288d1;">✓</span>
        </div>
    `;
    demoContainer.appendChild(htmlDiv);
    console.log("✅ innerHTML yordamida HTML kod qo'shildi");
}

console.log("");

// 7. XAVFSIZLIK MASALALARI
console.log("=== 7. Xavfsizlik masalalari ===");
console.log("");

console.log("innerHTML xavfsizligi:");
console.log("  - Foydalanuvchi kiritgan ma'lumotlarni innerHTML ga yozish");
console.log("  - XSS (Cross-Site Scripting) hujumlariga olib kelishi mumkin");
console.log("  - Yechim: textContent yoki sanitization kutubxonalari ishlatish");
console.log("");

console.log("Masalan:");
console.log("  ❌ Yomon: element.innerHTML = userInput;");
console.log("  ✅ Yaxshi: element.textContent = userInput;");
console.log("  ✅ Yaxshi: element.innerHTML = sanitize(userInput);");
console.log("");

// 8. PERFORMANCE TAVSIYALARI
console.log("=== 8. Performance tavsiyalari ===");
console.log("");

console.log("1. Ko'p elementlar qo'shish:");
console.log("   - innerHTML += ... ko'p marta chaqirish sekin");
console.log("   - Yaxshiroq: barcha HTML kodni bir marta yozish");
console.log("   - Yoki DocumentFragment ishlatish");
console.log("");

console.log("2. Matn o'zgartirish:");
console.log("   - textContent innerText dan tezroq");
console.log("   - Agar faqat matn kerak bo'lsa, textContent ishlatish");
console.log("");

console.log("3. HTML kod qo'shish:");
console.log("   - createElement + appendChild innerHTML dan ba'zida tezroq");
console.log("   - Lekin innerHTML sodda va qulay");
console.log("");

console.log("\nKontent manipulyatsiyasi mavzusi tugadi!");
