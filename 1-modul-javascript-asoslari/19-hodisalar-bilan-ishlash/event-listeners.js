/**
 * EVENT LISTENERS
 * 
 * addEventListener - elementga event listener qo'shish
 * removeEventListener - event listener ni olib tashlash
 */

console.log("EVENT LISTENERS\n");

const demoButton = document.getElementById('demo-button');
const demoContainer = document.getElementById('demo-container');

if (!demoButton || !demoContainer) {
    console.log("❌ Demo elementlar topilmadi");
    return;
}

// 1. addEventListener - event listener qo'shish
console.log("1. addEventListener - event listener qo'shish\n");

function handleClick() {
    console.log("✅ Button bosildi!");
}

demoButton.addEventListener('click', handleClick);
console.log("✅ Click event listener qo'shildi");

// 2. Bir nechta event listener qo'shish
console.log("\n2. Bir nechta event listener qo'shish\n");

function handleMouseEnter() {
    console.log("✅ Mouse button ustiga keldi");
    demoButton.style.backgroundColor = '#5568d3';
}

function handleMouseLeave() {
    console.log("✅ Mouse button dan chiqdi");
    demoButton.style.backgroundColor = '#667eea';
}

demoButton.addEventListener('mouseenter', handleMouseEnter);
demoButton.addEventListener('mouseleave', handleMouseLeave);
console.log("✅ Mouse event listenerlar qo'shildi");

// 3. Anonymous function bilan ishlash
console.log("\n3. Anonymous function bilan ishlash\n");

demoButton.addEventListener('focus', function() {
    console.log("✅ Button focus oldi");
});

// 4. Arrow function bilan ishlash
console.log("\n4. Arrow function bilan ishlash\n");

demoButton.addEventListener('blur', () => {
    console.log("✅ Button focus yo'qoldi");
});

// 5. removeEventListener - event listener ni olib tashlash
console.log("\n5. removeEventListener - event listener ni olib tashlash\n");

function handleDoubleClick() {
    console.log("✅ Double click event");
}

demoButton.addEventListener('dblclick', handleDoubleClick);
console.log("✅ Double click listener qo'shildi");

// Keyin olib tashlash
setTimeout(() => {
    demoButton.removeEventListener('dblclick', handleDoubleClick);
    console.log("✅ Double click listener olib tashlandi");
}, 5000);

// 6. Event listener options
console.log("\n6. Event listener options\n");

function handleOnce() {
    console.log("✅ Bu event faqat bir marta ishlaydi");
}

demoButton.addEventListener('click', handleOnce, { once: true });
console.log("✅ Once option bilan listener qo'shildi");

// 7. Capture phase
console.log("\n7. Capture phase\n");

function handleCapture(event) {
    console.log("✅ Capture phase:", event.currentTarget.tagName);
}

demoContainer.addEventListener('click', handleCapture, { capture: true });
console.log("✅ Capture phase listener qo'shildi");

// 8. Passive option
console.log("\n8. Passive option\n");

function handlePassive(event) {
    console.log("✅ Passive event listener");
}

window.addEventListener('scroll', handlePassive, { passive: true });
console.log("✅ Passive scroll listener qo'shildi");

// 9. Amaliy misol - Counter
console.log("\n9. Amaliy misol - Counter\n");

let clickCount = 0;
const counterBtn = document.createElement('button');
counterBtn.textContent = `Bosilgan: ${clickCount}`;
counterBtn.style.cssText = `
    padding: 10px 20px;
    margin: 10px;
    background: #4caf50;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
`;

counterBtn.addEventListener('click', () => {
    clickCount++;
    counterBtn.textContent = `Bosilgan: ${clickCount}`;
    console.log(`✅ Counter: ${clickCount}`);
});

demoContainer.appendChild(counterBtn);
console.log("✅ Counter button yaratildi va qo'shildi");

console.log("\nEvent listeners mavzusi tugadi!");
