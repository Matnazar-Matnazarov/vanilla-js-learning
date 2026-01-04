/**
 * EVENT DELEGATION
 * 
 * Event delegation - parent elementda event listener qo'yish
 * va child elementlardagi eventlarni boshqarish
 */

console.log("EVENT DELEGATION\n");

const demoContainer = document.getElementById('demo-container');

if (!demoContainer) {
    console.log("❌ Demo container topilmadi");
    return;
}

// 1. Event delegation asoslari
console.log("1. Event delegation asoslari\n");

const listContainer = document.createElement('div');
listContainer.id = 'dynamic-list';
listContainer.style.cssText = 'padding: 20px; background: #f5f5f5; border-radius: 8px; margin: 10px;';

// Parent elementda event listener
listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        console.log(`✅ Button bosildi: ${e.target.textContent}`);
        e.target.style.backgroundColor = '#4caf50';
    }
});

// Dinamik elementlar qo'shish
for (let i = 1; i <= 5; i++) {
    const btn = document.createElement('button');
    btn.textContent = `Button ${i}`;
    btn.style.cssText = `
        padding: 10px 20px;
        margin: 5px;
        background: #667eea;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
    `;
    listContainer.appendChild(btn);
}

demoContainer.appendChild(listContainer);
console.log("✅ Event delegation misoli yaratildi - barcha buttonlar parent orqali boshqariladi");

// 2. Dinamik elementlar bilan ishlash
console.log("\n2. Dinamik elementlar bilan ishlash\n");

const dynamicContainer = document.createElement('div');
dynamicContainer.id = 'dynamic-container';
dynamicContainer.style.cssText = 'padding: 20px; background: #e3f2fd; border-radius: 8px; margin: 10px;';

const addBtn = document.createElement('button');
addBtn.textContent = 'Yangi element qo\'shish';
addBtn.style.cssText = `
    padding: 10px 20px;
    margin-bottom: 10px;
    background: #2196f3;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
`;

let itemCount = 0;

addBtn.addEventListener('click', () => {
    itemCount++;
    const item = document.createElement('div');
    item.className = 'dynamic-item';
    item.textContent = `Element ${itemCount}`;
    item.style.cssText = `
        padding: 10px;
        margin: 5px 0;
        background: white;
        border-radius: 6px;
        cursor: pointer;
    `;
    dynamicContainer.appendChild(item);
    console.log(`✅ Yangi element qo'shildi: Element ${itemCount}`);
});

// Event delegation - parent orqali barcha child elementlarni boshqarish
dynamicContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('dynamic-item')) {
        console.log(`✅ Element bosildi: ${e.target.textContent}`);
        e.target.style.backgroundColor = '#4caf50';
        e.target.style.color = 'white';
    }
});

dynamicContainer.appendChild(addBtn);
demoContainer.appendChild(dynamicContainer);
console.log("✅ Dinamik elementlar bilan event delegation misoli yaratildi");

// 3. Event delegation afzalliklari
console.log("\n3. Event delegation afzalliklari\n");

const performanceContainer = document.createElement('div');
performanceContainer.id = 'performance-demo';
performanceContainer.style.cssText = 'padding: 20px; background: #fff3e0; border-radius: 8px; margin: 10px;';

const title = document.createElement('h4');
title.textContent = 'Event Delegation Afzalliklari:';
title.style.cssText = 'margin-bottom: 10px; color: #ff9800;';
performanceContainer.appendChild(title);

const benefits = [
    '1. Kamroq memory ishlatadi - faqat bitta listener',
    '2. Dinamik elementlar bilan ishlaydi',
    '3. Kod soddalashtiriladi',
    '4. Performance yaxshilanadi'
];

benefits.forEach(benefit => {
    const p = document.createElement('p');
    p.textContent = benefit;
    p.style.cssText = 'margin: 5px 0; color: #666;';
    performanceContainer.appendChild(p);
});

demoContainer.appendChild(performanceContainer);
console.log("✅ Event delegation afzalliklari ko'rsatildi");

// 4. Amaliy misol - Todo list delegation
console.log("\n4. Amaliy misol - Todo list delegation\n");

const todoContainer = document.createElement('div');
todoContainer.style.cssText = 'padding: 20px; background: #e8f5e9; border-radius: 8px; margin: 10px;';

const todoInput = document.createElement('input');
todoInput.type = 'text';
todoInput.placeholder = 'Todo kiriting...';
todoInput.style.cssText = `
    padding: 10px;
    margin: 5px;
    width: 200px;
    border: 2px solid #4caf50;
    border-radius: 6px;
`;

const todoAddBtn = document.createElement('button');
todoAddBtn.textContent = 'Qo\'shish';
todoAddBtn.style.cssText = `
    padding: 10px 20px;
    margin: 5px;
    background: #4caf50;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
`;

const todoList = document.createElement('ul');
todoList.id = 'todo-list';
todoList.style.cssText = 'list-style: none; padding: 0; margin-top: 10px;';

let todoId = 0;

todoAddBtn.addEventListener('click', () => {
    if (todoInput.value.trim()) {
        todoId++;
        const li = document.createElement('li');
        li.dataset.id = todoId;
        li.innerHTML = `
            <span>${todoInput.value}</span>
            <button class="delete-btn">O'chirish</button>
        `;
        li.style.cssText = `
            padding: 10px;
            margin: 5px 0;
            background: white;
            border-radius: 6px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        `;
        
        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.style.cssText = `
            padding: 5px 10px;
            background: #f44336;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        `;
        
        todoList.appendChild(li);
        todoInput.value = '';
        console.log(`✅ Todo qo'shildi: ID ${todoId}`);
    }
});

// Event delegation - barcha delete buttonlar uchun bitta listener
todoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const li = e.target.closest('li');
        const todoId = li.dataset.id;
        li.remove();
        console.log(`✅ Todo o'chirildi: ID ${todoId}`);
    }
});

// Todo toggle delegation
todoList.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
        e.target.style.textDecoration = e.target.style.textDecoration === 'line-through' ? 'none' : 'line-through';
        console.log(`✅ Todo holati o'zgardi: ${e.target.textContent}`);
    }
});

todoContainer.appendChild(todoInput);
todoContainer.appendChild(todoAddBtn);
todoContainer.appendChild(todoList);
demoContainer.appendChild(todoContainer);
console.log("✅ Todo list delegation misoli yaratildi");

// 5. Event delegation vs individual listeners
console.log("\n5. Event delegation vs individual listeners\n");

const comparison = document.createElement('div');
comparison.style.cssText = 'padding: 20px; background: #f3e5f5; border-radius: 8px; margin: 10px;';

const comparisonTitle = document.createElement('h4');
comparisonTitle.textContent = 'Event Delegation vs Individual Listeners:';
comparisonTitle.style.cssText = 'margin-bottom: 10px; color: #9c27b0;';
comparison.appendChild(comparisonTitle);

const comparisonText = document.createElement('p');
comparisonText.innerHTML = `
    <strong>Event Delegation:</strong><br>
    - Bitta listener barcha elementlar uchun<br>
    - Dinamik elementlar bilan ishlaydi<br>
    - Kamroq memory<br><br>
    <strong>Individual Listeners:</strong><br>
    - Har bir element uchun alohida listener<br>
    - Dinamik elementlar bilan muammo<br>
    - Ko'proq memory
`;
comparisonText.style.cssText = 'color: #666; line-height: 1.8;';
comparison.appendChild(comparisonText);

demoContainer.appendChild(comparison);
console.log("✅ Event delegation taqqoslash ko'rsatildi");

console.log("\nEvent delegation mavzusi tugadi!");
