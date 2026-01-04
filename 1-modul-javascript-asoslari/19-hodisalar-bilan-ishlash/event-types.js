/**
 * EVENT TYPES
 * 
 * Turli xil event turlari va ularning ishlatilishi
 */

console.log("EVENT TYPES\n");

const demoContainer = document.getElementById('demo-container');
const demoInput = document.getElementById('demo-input');

if (!demoContainer || !demoInput) {
    console.log("❌ Demo elementlar topilmadi");
    return;
}

// 1. Mouse Events
console.log("1. Mouse Events\n");

const mouseBtn = document.createElement('button');
mouseBtn.textContent = 'Mouse Events';
mouseBtn.style.cssText = 'padding: 10px 20px; margin: 5px; background: #667eea; color: white; border: none; border-radius: 6px; cursor: pointer;';

mouseBtn.addEventListener('click', () => console.log("✅ Click event"));
mouseBtn.addEventListener('dblclick', () => console.log("✅ Double click event"));
mouseBtn.addEventListener('mousedown', () => console.log("✅ Mouse down event"));
mouseBtn.addEventListener('mouseup', () => console.log("✅ Mouse up event"));
mouseBtn.addEventListener('mouseenter', () => console.log("✅ Mouse enter event"));
mouseBtn.addEventListener('mouseleave', () => console.log("✅ Mouse leave event"));
mouseBtn.addEventListener('mousemove', () => console.log("✅ Mouse move event"));

demoContainer.appendChild(mouseBtn);
console.log("✅ Mouse events button yaratildi");

// 2. Keyboard Events
console.log("\n2. Keyboard Events\n");

const keyboardInput = document.createElement('input');
keyboardInput.type = 'text';
keyboardInput.placeholder = 'Klaviatura eventlarini sinab ko\'ring...';
keyboardInput.style.cssText = 'padding: 10px; margin: 5px; width: 300px; border: 2px solid #667eea; border-radius: 6px;';

keyboardInput.addEventListener('keydown', (e) => {
    console.log(`✅ Key down: ${e.key} (Code: ${e.code})`);
});

keyboardInput.addEventListener('keyup', (e) => {
    console.log(`✅ Key up: ${e.key}`);
});

keyboardInput.addEventListener('keypress', (e) => {
    console.log(`✅ Key press: ${e.key}`);
});

demoContainer.appendChild(keyboardInput);
console.log("✅ Keyboard events input yaratildi");

// 3. Input Events
console.log("\n3. Input Events\n");

demoInput.addEventListener('input', (e) => {
    console.log(`✅ Input event: ${e.target.value}`);
});

demoInput.addEventListener('change', (e) => {
    console.log(`✅ Change event: ${e.target.value}`);
});

demoInput.addEventListener('focus', () => {
    console.log("✅ Input focus oldi");
});

demoInput.addEventListener('blur', () => {
    console.log("✅ Input focus yo'qoldi");
});

console.log("✅ Input events listenerlar qo'shildi");

// 4. Form Events
console.log("\n4. Form Events\n");

const form = document.createElement('form');
form.style.cssText = 'margin: 10px 0; padding: 15px; background: #f5f5f5; border-radius: 8px;';

const formInput = document.createElement('input');
formInput.type = 'text';
formInput.placeholder = 'Form input';
formInput.style.cssText = 'padding: 8px; margin: 5px; width: 200px; border: 2px solid #667eea; border-radius: 6px;';

const submitBtn = document.createElement('button');
submitBtn.type = 'submit';
submitBtn.textContent = 'Yuborish';
submitBtn.style.cssText = 'padding: 8px 16px; margin: 5px; background: #4caf50; color: white; border: none; border-radius: 6px; cursor: pointer;';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("✅ Form submit event");
    console.log(`Form ma'lumoti: ${formInput.value}`);
});

form.appendChild(formInput);
form.appendChild(submitBtn);
demoContainer.appendChild(form);
console.log("✅ Form events yaratildi");

// 5. Window Events
console.log("\n5. Window Events\n");

window.addEventListener('resize', () => {
    console.log(`✅ Window resize: ${window.innerWidth}x${window.innerHeight}`);
});

window.addEventListener('scroll', () => {
    console.log("✅ Window scroll event");
});

window.addEventListener('load', () => {
    console.log("✅ Window load event");
});

console.log("✅ Window events listenerlar qo'shildi");

// 6. Touch Events (mobile)
console.log("\n6. Touch Events (mobile)\n");

const touchBtn = document.createElement('button');
touchBtn.textContent = 'Touch Events (mobile)';
touchBtn.style.cssText = 'padding: 10px 20px; margin: 5px; background: #ff9800; color: white; border: none; border-radius: 6px; cursor: pointer;';

touchBtn.addEventListener('touchstart', () => {
    console.log("✅ Touch start event");
});

touchBtn.addEventListener('touchend', () => {
    console.log("✅ Touch end event");
});

touchBtn.addEventListener('touchmove', () => {
    console.log("✅ Touch move event");
});

demoContainer.appendChild(touchBtn);
console.log("✅ Touch events button yaratildi");

// 7. Drag Events
console.log("\n7. Drag Events\n");

const dragElement = document.createElement('div');
dragElement.textContent = 'Drag me';
dragElement.draggable = true;
dragElement.style.cssText = `
    padding: 20px;
    margin: 10px;
    background: #9c27b0;
    color: white;
    border-radius: 8px;
    cursor: move;
    display: inline-block;
`;

dragElement.addEventListener('dragstart', (e) => {
    console.log("✅ Drag start event");
    e.dataTransfer.setData('text/plain', 'Dragged element');
});

dragElement.addEventListener('dragend', () => {
    console.log("✅ Drag end event");
});

const dropZone = document.createElement('div');
dropZone.textContent = 'Drop zone';
dropZone.style.cssText = `
    padding: 40px;
    margin: 10px;
    background: #e0e0e0;
    border: 2px dashed #9c27b0;
    border-radius: 8px;
    text-align: center;
`;

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    console.log("✅ Drag over event");
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    console.log("✅ Drop event");
    const data = e.dataTransfer.getData('text/plain');
    console.log(`Dropped data: ${data}`);
});

demoContainer.appendChild(dragElement);
demoContainer.appendChild(dropZone);
console.log("✅ Drag events elementlar yaratildi");

console.log("\nEvent types mavzusi tugadi!");
