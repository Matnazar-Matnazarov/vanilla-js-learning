/**
 * EVENT OBJECT
 * 
 * Event object xususiyatlari va metodlari
 */

console.log("EVENT OBJECT\n");

const demoContainer = document.getElementById('demo-container');
const demoButton = document.getElementById('demo-button');

if (!demoContainer || !demoButton) {
    console.log("❌ Demo elementlar topilmadi");
    return;
}

// 1. Event object asosiy xususiyatlari
console.log("1. Event object asosiy xususiyatlari\n");

function showEventInfo(event) {
    console.log("Event type:", event.type);
    console.log("Event target:", event.target);
    console.log("Event currentTarget:", event.currentTarget);
    console.log("Event timestamp:", event.timeStamp);
    console.log("Event bubbles:", event.bubbles);
    console.log("Event cancelable:", event.cancelable);
    console.log("Event defaultPrevented:", event.defaultPrevented);
}

demoButton.addEventListener('click', showEventInfo);
console.log("✅ Event info listener qo'shildi - button ni bosing");

// 2. Event target vs currentTarget
console.log("\n2. Event target vs currentTarget\n");

const wrapper = document.createElement('div');
wrapper.style.cssText = 'padding: 20px; background: #e3f2fd; border-radius: 8px; margin: 10px;';

const innerBtn = document.createElement('button');
innerBtn.textContent = 'Target vs CurrentTarget';
innerBtn.style.cssText = 'padding: 10px 20px; background: #2196f3; color: white; border: none; border-radius: 6px; cursor: pointer;';

wrapper.addEventListener('click', (e) => {
    console.log("Wrapper click event:");
    console.log("  target:", e.target.tagName);
    console.log("  currentTarget:", e.currentTarget.tagName);
});

innerBtn.addEventListener('click', (e) => {
    console.log("Button click event:");
    console.log("  target:", e.target.tagName);
    console.log("  currentTarget:", e.currentTarget.tagName);
});

wrapper.appendChild(innerBtn);
demoContainer.appendChild(wrapper);
console.log("✅ Target vs currentTarget misoli yaratildi");

// 3. preventDefault - default xatti-harakatni to'xtatish
console.log("\n3. preventDefault - default xatti-harakatni to'xtatish\n");

const link = document.createElement('a');
link.href = '#';
link.textContent = 'Link (preventDefault bilan)';
link.style.cssText = 'display: inline-block; padding: 10px 20px; margin: 5px; background: #ff5722; color: white; text-decoration: none; border-radius: 6px;';

link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("✅ Link bosildi, lekin default xatti-harakat to'xtatildi");
});

demoContainer.appendChild(link);
console.log("✅ preventDefault misoli yaratildi");

// 4. stopPropagation - event tarqalishini to'xtatish
console.log("\n4. stopPropagation - event tarqalishini to'xtatish\n");

const parentDiv = document.createElement('div');
parentDiv.style.cssText = 'padding: 20px; background: #fff3e0; border-radius: 8px; margin: 10px;';

const childBtn = document.createElement('button');
childBtn.textContent = 'Stop Propagation';
childBtn.style.cssText = 'padding: 10px 20px; background: #ff9800; color: white; border: none; border-radius: 6px; cursor: pointer;';

parentDiv.addEventListener('click', () => {
    console.log("✅ Parent div click event");
});

childBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log("✅ Child button click event (propagation to'xtatildi)");
});

parentDiv.appendChild(childBtn);
demoContainer.appendChild(parentDiv);
console.log("✅ stopPropagation misoli yaratildi");

// 5. stopImmediatePropagation - barcha listenerlarni to'xtatish
console.log("\n5. stopImmediatePropagation - barcha listenerlarni to'xtatish\n");

const immediateBtn = document.createElement('button');
immediateBtn.textContent = 'Stop Immediate Propagation';
immediateBtn.style.cssText = 'padding: 10px 20px; margin: 5px; background: #e91e63; color: white; border: none; border-radius: 6px; cursor: pointer;';

immediateBtn.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    console.log("✅ Birinchi listener (stopImmediatePropagation)");
});

immediateBtn.addEventListener('click', () => {
    console.log("❌ Bu listener ishlamaydi");
});

demoContainer.appendChild(immediateBtn);
console.log("✅ stopImmediatePropagation misoli yaratildi");

// 6. Keyboard event xususiyatlari
console.log("\n6. Keyboard event xususiyatlari\n");

const keyboardDemo = document.createElement('input');
keyboardDemo.type = 'text';
keyboardDemo.placeholder = 'Klaviatura eventlarini sinab ko\'ring...';
keyboardDemo.style.cssText = 'padding: 10px; margin: 5px; width: 300px; border: 2px solid #9c27b0; border-radius: 6px;';

keyboardDemo.addEventListener('keydown', (e) => {
    console.log("Keyboard event:");
    console.log("  key:", e.key);
    console.log("  code:", e.code);
    console.log("  keyCode:", e.keyCode);
    console.log("  ctrlKey:", e.ctrlKey);
    console.log("  shiftKey:", e.shiftKey);
    console.log("  altKey:", e.altKey);
    console.log("  metaKey:", e.metaKey);
});

demoContainer.appendChild(keyboardDemo);
console.log("✅ Keyboard event xususiyatlari misoli yaratildi");

// 7. Mouse event xususiyatlari
console.log("\n7. Mouse event xususiyatlari\n");

const mouseDemo = document.createElement('div');
mouseDemo.textContent = 'Mouse eventlarini sinab ko\'ring';
mouseDemo.style.cssText = `
    padding: 30px;
    margin: 10px;
    background: #4caf50;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
`;

mouseDemo.addEventListener('click', (e) => {
    console.log("Mouse event:");
    console.log("  clientX:", e.clientX);
    console.log("  clientY:", e.clientY);
    console.log("  pageX:", e.pageX);
    console.log("  pageY:", e.pageY);
    console.log("  screenX:", e.screenX);
    console.log("  screenY:", e.screenY);
    console.log("  button:", e.button);
    console.log("  buttons:", e.buttons);
});

demoContainer.appendChild(mouseDemo);
console.log("✅ Mouse event xususiyatlari misoli yaratildi");

// 8. Event phase
console.log("\n8. Event phase\n");

const phaseContainer = document.createElement('div');
phaseContainer.style.cssText = 'padding: 20px; background: #f5f5f5; border-radius: 8px; margin: 10px;';

const phaseBtn = document.createElement('button');
phaseBtn.textContent = 'Event Phase';
phaseBtn.style.cssText = 'padding: 10px 20px; background: #607d8b; color: white; border: none; border-radius: 6px; cursor: pointer;';

phaseContainer.addEventListener('click', (e) => {
    console.log(`Event phase: ${e.eventPhase} (${e.eventPhase === 1 ? 'CAPTURING' : e.eventPhase === 2 ? 'AT_TARGET' : 'BUBBLING'})`);
}, true);

phaseBtn.addEventListener('click', (e) => {
    console.log(`Event phase: ${e.eventPhase} (${e.eventPhase === 1 ? 'CAPTURING' : e.eventPhase === 2 ? 'AT_TARGET' : 'BUBBLING'})`);
});

phaseContainer.addEventListener('click', (e) => {
    console.log(`Event phase: ${e.eventPhase} (${e.eventPhase === 1 ? 'CAPTURING' : e.eventPhase === 2 ? 'AT_TARGET' : 'BUBBLING'})`);
});

phaseContainer.appendChild(phaseBtn);
demoContainer.appendChild(phaseContainer);
console.log("✅ Event phase misoli yaratildi");

console.log("\nEvent object mavzusi tugadi!");
