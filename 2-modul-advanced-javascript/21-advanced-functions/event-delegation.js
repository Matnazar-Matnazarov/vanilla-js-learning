// Event Delegation
// Bu fayl event delegation prinsiplari va qo'llashini ko'rsatadi

console.log('🔄 Event Delegation\n');

// Event Delegation nima?
console.log('📚 Event Delegation tushunchasi:');
console.log('Event delegation - bu parent elementda event listener qo\'yib,');
console.log('child elementlardagi hodisalarni boshqarish usuli.\n');

// 1. Oddiy usul (har bir elementga alohida listener)
console.log('1. Oddiy usul (har bir elementga alohida listener):');
console.log('   Muammo: Har bir elementga alohida listener qo\'yish');
console.log('   Muammo: Dynamic elementlar uchun ishlamaydi');
console.log('   Muammo: Memory isrof qiladi\n');

// 2. Event Delegation usuli
console.log('2. Event Delegation usuli:');
console.log('   Afzallik: Faqat parent elementda listener');
console.log('   Afzallik: Dynamic elementlar bilan ishlaydi');
console.log('   Afzallik: Memory samarador\n');

// Demo: Dynamic elementlar ro'yxati
const listContainer = document.createElement('div');
listContainer.id = 'delegation-list';
listContainer.style.padding = '20px';
listContainer.style.margin = '10px 0';
listContainer.style.border = '2px solid #667eea';
listContainer.style.borderRadius = '8px';
listContainer.style.backgroundColor = '#f9f9f9';

const listTitle = document.createElement('h4');
listTitle.textContent = 'Dynamic Elementlar Ro\'yxati (Event Delegation)';
listTitle.style.marginBottom = '15px';
listTitle.style.color = '#667eea';
listContainer.appendChild(listTitle);

const itemList = document.createElement('div');
itemList.id = 'item-list';
itemList.style.display = 'flex';
itemList.style.flexDirection = 'column';
itemList.style.gap = '10px';
listContainer.appendChild(itemList);

// Elementlar qo'shish funksiyasi
function addListItem(text) {
    const item = document.createElement('div');
    item.className = 'list-item';
    item.dataset.id = Date.now();
    item.textContent = text;
    item.style.padding = '12px';
    item.style.backgroundColor = '#fff';
    item.style.border = '1px solid #ddd';
    item.style.borderRadius = '5px';
    item.style.cursor = 'pointer';
    item.style.transition = 'all 0.3s';
    itemList.appendChild(item);
    return item;
}

// Dastlabki elementlar
addListItem('Element 1 - Bosing!');
addListItem('Element 2 - Bosing!');
addListItem('Element 3 - Bosing!');

document.getElementById('demo-container').appendChild(listContainer);

// Event Delegation: Parent elementda listener
console.log('💡 Event Delegation misoli:');
console.log('   Parent element (item-list) da listener qo\'yilmoqda...\n');

itemList.addEventListener('click', function(event) {
    // event.target - bosilgan element
    // event.currentTarget - listener qo'yilgan element (parent)
    
    const clickedElement = event.target;
    
    // Faqat .list-item elementlariga javob berish
    if (clickedElement.classList.contains('list-item')) {
        console.log('✅ Element bosildi:', clickedElement.textContent);
        console.log('   Dataset ID:', clickedElement.dataset.id);
        console.log('   Target:', clickedElement);
        console.log('   Current Target:', event.currentTarget);
        
        // Visual feedback
        clickedElement.style.backgroundColor = '#667eea';
        clickedElement.style.color = 'white';
        clickedElement.style.transform = 'scale(1.05)';
        
        setTimeout(() => {
            clickedElement.style.backgroundColor = '#fff';
            clickedElement.style.color = 'inherit';
            clickedElement.style.transform = 'scale(1)';
        }, 300);
    }
});

console.log('   ✅ Event delegation listener qo\'shildi!');
console.log('   Har qanday elementga bosing va natijani ko\'ring.\n');

// Dynamic elementlar qo'shish
const addButton = document.createElement('button');
addButton.textContent = '+ Yangi Element Qo\'shish';
addButton.style.padding = '10px 20px';
addButton.style.margin = '10px 0';
addButton.style.cursor = 'pointer';
addButton.style.border = 'none';
addButton.style.borderRadius = '5px';
addButton.style.backgroundColor = '#28a745';
addButton.style.color = 'white';

let itemCounter = 4;
addButton.addEventListener('click', () => {
    const newItem = addListItem(`Yangi Element ${itemCounter} - Bosing!`);
    console.log(`➕ Yangi element qo'shildi: ${newItem.textContent}`);
    console.log('   Eslatma: Bu yangi element ham event delegation orqali ishlaydi!\n');
    itemCounter++;
});

listContainer.appendChild(addButton);

// Event Delegation afzalliklari
console.log('📊 Event Delegation afzalliklari:');
console.log('   1. Performance: Faqat bitta listener');
console.log('   2. Memory: Kamroq memory ishlatadi');
console.log('   3. Dynamic: Yangi elementlar avtomatik ishlaydi');
console.log('   4. Maintainability: Kod oson boshqariladi\n');

// Real-world misol: Todo list
console.log('💼 Real-world misol: Todo list');
const todoContainer = document.createElement('div');
todoContainer.style.padding = '20px';
todoContainer.style.margin = '20px 0';
todoContainer.style.border = '2px solid #28a745';
todoContainer.style.borderRadius = '8px';
todoContainer.style.backgroundColor = '#f0f8f0';

const todoTitle = document.createElement('h4');
todoTitle.textContent = 'Todo List (Event Delegation)';
todoTitle.style.marginBottom = '15px';
todoTitle.style.color = '#28a745';
todoContainer.appendChild(todoTitle);

const todoList = document.createElement('ul');
todoList.id = 'todo-list';
todoList.style.listStyle = 'none';
todoList.style.padding = '0';
todoList.style.margin = '0';
todoContainer.appendChild(todoList);

// Todo qo'shish
function addTodo(text) {
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.dataset.id = Date.now();
    li.innerHTML = `
        <span>${text}</span>
        <button class="delete-btn" style="margin-left: 10px; padding: 5px 10px; background: #dc3545; color: white; border: none; border-radius: 3px; cursor: pointer;">Delete</button>
    `;
    li.style.padding = '10px';
    li.style.margin = '5px 0';
    li.style.backgroundColor = '#fff';
    li.style.border = '1px solid #ddd';
    li.style.borderRadius = '5px';
    li.style.display = 'flex';
    li.style.justifyContent = 'space-between';
    li.style.alignItems = 'center';
    todoList.appendChild(li);
    return li;
}

// Event Delegation: Todo list uchun
todoList.addEventListener('click', function(event) {
    const clickedElement = event.target;
    
    // Delete tugmasi bosilganda
    if (clickedElement.classList.contains('delete-btn')) {
        const todoItem = clickedElement.closest('.todo-item');
        console.log('🗑️ Todo o\'chirildi:', todoItem.querySelector('span').textContent);
        todoItem.remove();
    }
    
    // Todo item bosilganda (toggle)
    if (clickedElement.closest('.todo-item') && !clickedElement.classList.contains('delete-btn')) {
        const todoItem = clickedElement.closest('.todo-item');
        todoItem.classList.toggle('completed');
        const isCompleted = todoItem.classList.contains('completed');
        todoItem.style.textDecoration = isCompleted ? 'line-through' : 'none';
        todoItem.style.opacity = isCompleted ? '0.6' : '1';
        console.log('✅ Todo holati o\'zgardi:', todoItem.querySelector('span').textContent);
    }
});

// Dastlabki todolar
addTodo('Event delegation o\'rganish');
addTodo('classList metodlarini qo\'llash');
addTodo('Dynamic elementlar bilan ishlash');

const addTodoInput = document.createElement('input');
addTodoInput.type = 'text';
addTodoInput.placeholder = 'Yangi todo kiriting...';
addTodoInput.style.padding = '8px';
addTodoInput.style.margin = '10px 5px 10px 0';
addTodoInput.style.border = '1px solid #ddd';
addTodoInput.style.borderRadius = '5px';
addTodoInput.style.flex = '1';

const addTodoButton = document.createElement('button');
addTodoButton.textContent = 'Qo\'shish';
addTodoButton.style.padding = '8px 15px';
addTodoButton.style.cursor = 'pointer';
addTodoButton.style.border = 'none';
addTodoButton.style.borderRadius = '5px';
addTodoButton.style.backgroundColor = '#28a745';
addTodoButton.style.color = 'white';

const inputContainer = document.createElement('div');
inputContainer.style.display = 'flex';
inputContainer.appendChild(addTodoInput);
inputContainer.appendChild(addTodoButton);

addTodoButton.addEventListener('click', () => {
    const text = addTodoInput.value.trim();
    if (text) {
        addTodo(text);
        addTodoInput.value = '';
        console.log('➕ Yangi todo qo\'shildi:', text);
    }
});

addTodoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodoButton.click();
    }
});

todoContainer.appendChild(inputContainer);
document.getElementById('demo-container').appendChild(todoContainer);

console.log('   ✅ Todo list yaratildi!');
console.log('   Todo itemlarga bosing yoki Delete tugmasini bosing.\n');

// Event Delegation vs Oddiy usul taqqoslash
console.log('📈 Event Delegation vs Oddiy usul taqqoslash:');
console.log('');
console.log('Oddiy usul:');
console.log('  - 100 element = 100 listener');
console.log('  - Memory: ~100KB');
console.log('  - Dynamic elementlar: ❌');
console.log('');
console.log('Event Delegation:');
console.log('  - 100 element = 1 listener');
console.log('  - Memory: ~1KB');
console.log('  - Dynamic elementlar: ✅');
console.log('');

console.log('✅ Event Delegation mavzusi tugadi!\n');
