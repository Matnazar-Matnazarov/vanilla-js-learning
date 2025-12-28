/**
 * ATTRIBUTLAR VA CLASSLAR BILAN ISHLASH
 * 
 * Elementlarning atributlarini va classlarini boshqarish:
 * - classList - classlar bilan ishlash (add, remove, toggle, contains)
 * - attributes - barcha atributlarni o'qish
 * - setAttribute / getAttribute - atributlarni o'zgartirish
 * - removeAttribute - atributni o'chirish
 * - hasAttribute - atribut mavjudligini tekshirish
 */

console.log("ATTRIBUTLAR VA CLASSLAR\n");

// 1. classList - Classlar bilan ishlash
console.log("=== 1. classList ===");
console.log("Element classlarini boshqarish\n");

const demoButton = document.getElementById('demo-button');
if (demoButton) {
    // Hozirgi classlar
    console.log("Hozirgi classlar:", demoButton.className);
    console.log("classList:", demoButton.classList);
    console.log("");
    
    // add() - class qo'shish
    demoButton.classList.add('active');
    demoButton.classList.add('highlight');
    console.log("✅ 'active' va 'highlight' classlari qo'shildi");
    console.log("Yangi classlar:", demoButton.className);
    console.log("");
    
    // remove() - class o'chirish
    demoButton.classList.remove('highlight');
    console.log("✅ 'highlight' class o'chirildi");
    console.log("Yangi classlar:", demoButton.className);
    console.log("");
    
    // toggle() - class mavjud bo'lsa o'chirish, yo'q bo'lsa qo'shish
    demoButton.classList.toggle('active');
    console.log("✅ 'active' class toggle qilindi (o'chirildi)");
    console.log("Yangi classlar:", demoButton.className);
    
    demoButton.classList.toggle('active');
    console.log("✅ 'active' class toggle qilindi (qo'shildi)");
    console.log("Yangi classlar:", demoButton.className);
    console.log("");
    
    // contains() - class mavjudligini tekshirish
    const hasActive = demoButton.classList.contains('active');
    console.log("'active' class mavjudmi?", hasActive);
    
    const hasHighlight = demoButton.classList.contains('highlight');
    console.log("'highlight' class mavjudmi?", hasHighlight);
    console.log("");
    
    // replace() - classni almashtirish
    demoButton.classList.replace('active', 'inactive');
    console.log("✅ 'active' class 'inactive' bilan almashtirildi");
    console.log("Yangi classlar:", demoButton.className);
    console.log("");
    
    // forEach() - barcha classlar bo'yicha iteratsiya
    console.log("Barcha classlar:");
    demoButton.classList.forEach((className, index) => {
        console.log(`  ${index + 1}. ${className}`);
    });
}

console.log("");

// 2. setAttribute / getAttribute
console.log("=== 2. setAttribute / getAttribute ===");
console.log("Atributlarni o'zgartirish va o'qish\n");

if (demoButton) {
    // getAttribute() - atributni o'qish
    const buttonId = demoButton.getAttribute('id');
    const buttonClass = demoButton.getAttribute('class');
    console.log("Button ID:", buttonId);
    console.log("Button class:", buttonClass);
    console.log("");
    
    // setAttribute() - atributni yozish
    demoButton.setAttribute('data-custom', 'custom-value');
    demoButton.setAttribute('aria-label', 'Demo tugmasi');
    demoButton.setAttribute('title', 'Bu demo tugmasi');
    console.log("✅ Yangi atributlar qo'shildi:");
    console.log("  - data-custom:", demoButton.getAttribute('data-custom'));
    console.log("  - aria-label:", demoButton.getAttribute('aria-label'));
    console.log("  - title:", demoButton.getAttribute('title'));
    console.log("");
    
    // Atributni o'zgartirish
    demoButton.setAttribute('data-custom', 'updated-value');
    console.log("✅ data-custom atributi yangilandi:", demoButton.getAttribute('data-custom'));
}

console.log("");

// 3. removeAttribute
console.log("=== 3. removeAttribute ===");
console.log("Atributni o'chirish\n");

if (demoButton) {
    // removeAttribute() - atributni o'chirish
    demoButton.removeAttribute('title');
    console.log("✅ 'title' atributi o'chirildi");
    console.log("title mavjudmi?", demoButton.hasAttribute('title'));
}

console.log("");

// 4. hasAttribute
console.log("=== 4. hasAttribute ===");
console.log("Atribut mavjudligini tekshirish\n");

if (demoButton) {
    console.log("id mavjudmi?", demoButton.hasAttribute('id'));
    console.log("class mavjudmi?", demoButton.hasAttribute('class'));
    console.log("data-custom mavjudmi?", demoButton.hasAttribute('data-custom'));
    console.log("title mavjudmi?", demoButton.hasAttribute('title'));
    console.log("disabled mavjudmi?", demoButton.hasAttribute('disabled'));
}

console.log("");

// 5. attributes - Barcha atributlarni o'qish
console.log("=== 5. attributes ===");
console.log("Barcha atributlarni o'qish\n");

if (demoButton) {
    // attributes - NamedNodeMap (barcha atributlar)
    console.log("Barcha atributlar:");
    Array.from(demoButton.attributes).forEach((attr, index) => {
        console.log(`  ${index + 1}. ${attr.name} = "${attr.value}"`);
    });
    console.log("");
    
    // Atributlar soni
    console.log("Jami atributlar soni:", demoButton.attributes.length);
}

console.log("");

// 6. AMALIY MISOL - Dinamik stil o'zgartirish
console.log("=== 6. Amaliy misol - Dinamik stil ===");
console.log("");

const demoContainer = document.getElementById('demo-container');
if (demoContainer) {
    // Yangi element yaratish
    const styledDiv = document.createElement('div');
    styledDiv.textContent = 'Dinamik stil bilan element';
    styledDiv.style.padding = '15px';
    styledDiv.style.margin = '10px';
    styledDiv.style.borderRadius = '8px';
    styledDiv.style.transition = 'all 0.3s';
    
    // Class qo'shish
    styledDiv.classList.add('demo-element');
    styledDiv.classList.add('initial-state');
    
    // Data atributlar qo'shish
    styledDiv.setAttribute('data-state', 'initial');
    styledDiv.setAttribute('data-index', '1');
    
    demoContainer.appendChild(styledDiv);
    console.log("✅ Styled element yaratildi va qo'shildi");
    console.log("Classlar:", styledDiv.className);
    console.log("Data atributlar:", {
        state: styledDiv.getAttribute('data-state'),
        index: styledDiv.getAttribute('data-index')
    });
    
    // Class toggle misoli
    setTimeout(() => {
        styledDiv.classList.remove('initial-state');
        styledDiv.classList.add('active-state');
        styledDiv.setAttribute('data-state', 'active');
        styledDiv.style.backgroundColor = '#e8f5e9';
        styledDiv.style.borderLeft = '4px solid #4caf50';
        console.log("\n✅ Element holati o'zgartirildi");
        console.log("Yangi classlar:", styledDiv.className);
        console.log("Yangi data-state:", styledDiv.getAttribute('data-state'));
    }, 2000);
}

console.log("");

// 7. className vs classList
console.log("=== 7. className vs classList ===");
console.log("");

const testElement = document.createElement('div');

// className - barcha classlarni string sifatida
testElement.className = 'class1 class2 class3';
console.log("className yordamida:", testElement.className);

// classList - classlarni boshqarish uchun metodlar
testElement.classList.add('class4');
testElement.classList.remove('class2');
console.log("classList yordamida:", testElement.className);
console.log("");

console.log("Farqlar:");
console.log("className:");
console.log("  - String sifatida barcha classlar");
console.log("  - To'liq o'zgartirish kerak");
console.log("  - Qo'shish/olib tashlash qiyin");
console.log("");

console.log("classList:");
console.log("  - Classlarni boshqarish uchun metodlar");
console.log("  - add(), remove(), toggle(), contains()");
console.log("  - Qulay va moslashuvchan");
console.log("  - Zamonaviy va tavsiya etiladi");
console.log("");

// 8. DATA ATTRIBUTLAR
console.log("=== 8. Data atributlar ===");
console.log("");

const dataElement = document.createElement('div');
dataElement.setAttribute('data-user-id', '12345');
dataElement.setAttribute('data-user-name', 'Matnazar');
dataElement.setAttribute('data-is-active', 'true');

console.log("Data atributlar:");
console.log("  data-user-id:", dataElement.getAttribute('data-user-id'));
console.log("  data-user-name:", dataElement.getAttribute('data-user-name'));
console.log("  data-is-active:", dataElement.getAttribute('data-is-active'));
console.log("");

// dataset - data atributlariga oson kirish
// data-user-id -> dataset.userId (camelCase)
console.log("dataset yordamida:");
console.log("  dataset.userId:", dataElement.dataset.userId);
console.log("  dataset.userName:", dataElement.dataset.userName);
console.log("  dataset.isActive:", dataElement.dataset.isActive);
console.log("");

// dataset orqali o'zgartirish
dataElement.dataset.userId = '67890';
dataElement.dataset.newAttribute = 'new-value';
console.log("✅ dataset orqali o'zgartirildi");
console.log("Yangi userId:", dataElement.dataset.userId);
console.log("Yangi newAttribute:", dataElement.dataset.newAttribute);

console.log("");

// 9. TAVSIYALAR
console.log("=== 9. Tavsiyalar ===");
console.log("");

console.log("1. Classlar bilan ishlash:");
console.log("   ✅ classList.add/remove/toggle ishlatish");
console.log("   ❌ className ga to'g'ridan-to'g'ri yozmaslik");
console.log("");

console.log("2. Atributlar bilan ishlash:");
console.log("   ✅ setAttribute/getAttribute ishlatish");
console.log("   ✅ hasAttribute bilan tekshirish");
console.log("   ✅ data atributlar uchun dataset ishlatish");
console.log("");

console.log("3. Xavfsizlik:");
console.log("   ✅ Foydalanuvchi kiritgan ma'lumotlarni sanitize qilish");
console.log("   ✅ innerHTML o'rniga textContent ishlatish");
console.log("");

console.log("\nAtributlar va classlar mavzusi tugadi!");
