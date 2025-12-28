/**
 * DOM MANIPULYATSIYASI
 * 
 * DOM manipulyatsiyasi - bu elementlarni yaratish, o'zgartirish va o'chirish
 * 
 * Asosiy metodlar:
 * - createElement() - yangi element yaratish
 * - appendChild() - elementga child qo'shish
 * - removeChild() - child elementni o'chirish
 * - insertBefore() - elementni ma'lum joyga qo'yish
 * - replaceChild() - elementni almashtirish
 * - cloneNode() - elementni nusxalash
 */

console.log("============================================");
console.log("DOM MANIPULYATSIYASI");
console.log("============================================\n");

// ============================================
// 1. createElement - Yangi element yaratish
// ============================================
console.log("=== 1. createElement ===");
console.log("Yangi HTML element yaratish\n");

// Yangi div element yaratish
const newDiv = document.createElement('div');
console.log("✅ Yangi div elementi yaratildi:", newDiv.tagName);

// Yangi paragraph element yaratish
const newParagraph = document.createElement('p');
console.log("✅ Yangi paragraph elementi yaratildi:", newParagraph.tagName);

// Yangi button element yaratish
const newButton = document.createElement('button');
console.log("✅ Yangi button elementi yaratildi:", newButton.tagName);

// Yangi span element yaratish
const newSpan = document.createElement('span');
console.log("✅ Yangi span elementi yaratildi:", newSpan.tagName);

console.log("");

// ============================================
// 2. appendChild - Elementga child qo'shish
// ============================================
console.log("=== 2. appendChild ===");
console.log("Elementga child element qo'shish\n");

// Demo container'ni topish
const demoContainer = document.getElementById('demo-container');
if (demoContainer) {
    // Yangi div yaratish va qo'shish
    const appendedDiv = document.createElement('div');
    appendedDiv.textContent = 'appendChild orqali qo\'shilgan div';
    appendedDiv.style.padding = '10px';
    appendedDiv.style.margin = '5px';
    appendedDiv.style.backgroundColor = '#e3f2fd';
    appendedDiv.style.borderRadius = '5px';
    
    demoContainer.appendChild(appendedDiv);
    console.log("✅ Yangi div demo-container'ga qo'shildi");
    
    // Yana bir element qo'shish
    const appendedParagraph = document.createElement('p');
    appendedParagraph.textContent = 'Bu paragraph appendChild orqali qo\'shildi';
    appendedParagraph.style.color = '#667eea';
    appendedParagraph.style.fontWeight = 'bold';
    
    demoContainer.appendChild(appendedParagraph);
    console.log("✅ Yangi paragraph demo-container'ga qo'shildi");
} else {
    console.log("❌ Demo container topilmadi");
}

console.log("");

// ============================================
// 3. removeChild - Child elementni o'chirish
// ============================================
console.log("=== 3. removeChild ===");
console.log("Child elementni o'chirish\n");

if (demoContainer && demoContainer.children.length > 0) {
    // Birinchi child elementni o'chirish
    const firstChild = demoContainer.firstElementChild;
    if (firstChild && firstChild.id !== 'demo-text' && firstChild.id !== 'demo-button') {
        demoContainer.removeChild(firstChild);
        console.log("✅ Birinchi child element o'chirildi");
    } else {
        console.log("ℹ️ Demo elementlar saqlanib qoldi");
    }
}

// Yoki remove() metodini ham ishlatish mumkin (zamonaviy usul)
// element.remove() - bu elementni o'z-o'zidan o'chirish

console.log("");

// ============================================
// 4. insertBefore - Elementni ma'lum joyga qo'yish
// ============================================
console.log("=== 4. insertBefore ===");
console.log("Elementni ma'lum child oldiga qo'yish\n");

if (demoContainer) {
    const newElement = document.createElement('div');
    newElement.textContent = 'insertBefore orqali qo\'shilgan element';
    newElement.style.padding = '10px';
    newElement.style.backgroundColor = '#fff3e0';
    newElement.style.borderRadius = '5px';
    newElement.style.margin = '5px';
    
    // Birinchi child oldiga qo'shish
    if (demoContainer.firstElementChild) {
        demoContainer.insertBefore(newElement, demoContainer.firstElementChild);
        console.log("✅ Element birinchi child oldiga qo'shildi");
    }
}

console.log("");

// ============================================
// 5. replaceChild - Elementni almashtirish
// ============================================
console.log("=== 5. replaceChild ===");
console.log("Child elementni boshqa element bilan almashtirish\n");

if (demoContainer) {
    // Almashtirish uchun yangi element yaratish
    const replacementElement = document.createElement('div');
    replacementElement.textContent = 'Bu almashtirilgan element';
    replacementElement.style.padding = '10px';
    replacementElement.style.backgroundColor = '#f3e5f5';
    replacementElement.style.borderRadius = '5px';
    replacementElement.style.margin = '5px';
    
    // Agar birinchi child demo elementlardan biri bo'lmasa, almashtirish
    const firstChild = demoContainer.firstElementChild;
    if (firstChild && firstChild.id !== 'demo-text' && firstChild.id !== 'demo-button') {
        demoContainer.replaceChild(replacementElement, firstChild);
        console.log("✅ Element almashtirildi");
    } else {
        console.log("ℹ️ Demo elementlar saqlanib qoldi");
    }
}

console.log("");

// ============================================
// 6. cloneNode - Elementni nusxalash
// ============================================
console.log("=== 6. cloneNode ===");
console.log("Elementni nusxalash\n");

const demoText = document.getElementById('demo-text');
if (demoText) {
    // Shallow clone (faqat element o'zi, child'lar yo'q)
    const shallowClone = demoText.cloneNode(false);
    console.log("✅ Shallow clone yaratildi:", shallowClone.textContent);
    
    // Deep clone (element va barcha child'lar)
    const deepClone = demoText.cloneNode(true);
    deepClone.id = 'cloned-demo-text';
    deepClone.style.color = '#4caf50';
    deepClone.textContent = 'Bu nusxalangan matn';
    
    if (demoContainer) {
        demoContainer.appendChild(deepClone);
        console.log("✅ Deep clone demo-container'ga qo'shildi");
    }
}

console.log("");

// ============================================
// 7. AMALIY MISOL - Dinamik ro'yxat yaratish
// ============================================
console.log("=== 7. Amaliy misol - Dinamik ro'yxat ===");
console.log("");

if (demoContainer) {
    // Ro'yxat elementini yaratish
    const listContainer = document.createElement('div');
    listContainer.style.marginTop = '15px';
    listContainer.style.padding = '15px';
    listContainer.style.backgroundColor = '#f5f5f5';
    listContainer.style.borderRadius = '8px';
    
    const listTitle = document.createElement('h4');
    listTitle.textContent = 'Dinamik ro\'yxat:';
    listTitle.style.marginBottom = '10px';
    listTitle.style.color = '#667eea';
    
    const list = document.createElement('ul');
    list.style.listStyle = 'none';
    list.style.padding = '0';
    
    // Ro'yxat elementlarini yaratish
    const items = ['Birinchisi', 'Ikkinchisi', 'Uchinchisi'];
    items.forEach((itemText, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${itemText}`;
        listItem.style.padding = '8px';
        listItem.style.margin = '5px 0';
        listItem.style.backgroundColor = 'white';
        listItem.style.borderRadius = '4px';
        listItem.style.borderLeft = '3px solid #667eea';
        
        list.appendChild(listItem);
    });
    
    // Barcha elementlarni birlashtirish
    listContainer.appendChild(listTitle);
    listContainer.appendChild(list);
    demoContainer.appendChild(listContainer);
    
    console.log("✅ Dinamik ro'yxat yaratildi va qo'shildi");
    console.log(`   - ${items.length} ta element qo'shildi`);
}

console.log("");

// ============================================
// 8. METODLAR ORASIDAGI FARQLAR
// ============================================
console.log("=== 8. Metodlar orasidagi farqlar ===");
console.log("");

console.log("appendChild():");
console.log("  - Elementni oxiriga qo'shadi");
console.log("  - Agar element allaqachon DOM'da bo'lsa, ko'chiriladi");
console.log("");

console.log("insertBefore():");
console.log("  - Elementni ma'lum joyga qo'yadi");
console.log("  - Ikki parametr: (yangiElement, referenceElement)");
console.log("");

console.log("replaceChild():");
console.log("  - Eski elementni yangisi bilan almashtiradi");
console.log("  - Ikki parametr: (yangiElement, eskiElement)");
console.log("");

console.log("removeChild():");
console.log("  - Child elementni o'chiradi");
console.log("  - Zamonaviy usul: element.remove()");
console.log("");

console.log("cloneNode():");
console.log("  - Elementni nusxalaydi");
console.log("  - false - shallow clone (faqat element)");
console.log("  - true - deep clone (element + child'lar)");
console.log("");

console.log("\n============================================");
console.log("DOM manipulyatsiyasi mavzusi tugadi!");
console.log("============================================");
