/**
 * TODO LIST - Dinamik todo ro'yxati
 * 
 * Bu loyiha DOM manipulyatsiyasi yordamida dinamik todo ro'yxati yaratishni ko'rsatadi
 */

console.log("TODO LIST - Dinamik todo ro'yxati\n");

const demoContainer = document.getElementById('demo-container');
if (!demoContainer) {
    console.log("❌ Demo container topilmadi");
    return;
}

// Todo ro'yxati ma'lumotlari
let todos = [
    { id: 1, text: "JavaScript o'rganish", completed: false },
    { id: 2, text: "DOM manipulyatsiyasi", completed: true },
    { id: 3, text: "Loyiha yaratish", completed: false }
];

let nextId = 4;

// Todo elementini yaratish
function createTodoElement(todo) {
    const todoItem = document.createElement('div');
    todoItem.className = 'todo-item';
    todoItem.style.cssText = `
        display: flex;
        align-items: center;
        padding: 12px;
        margin: 8px 0;
        background: ${todo.completed ? '#e8f5e9' : '#fff3e0'};
        border-radius: 8px;
        border-left: 4px solid ${todo.completed ? '#4caf50' : '#ff9800'};
        transition: all 0.3s;
    `;
    todoItem.dataset.id = todo.id;

    // Checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.style.marginRight = '12px';
    checkbox.style.cursor = 'pointer';
    checkbox.addEventListener('change', () => toggleTodo(todo.id));

    // Todo matni
    const text = document.createElement('span');
    text.textContent = todo.text;
    text.style.flex = '1';
    text.style.textDecoration = todo.completed ? 'line-through' : 'none';
    text.style.color = todo.completed ? '#666' : '#333';

    // O'chirish tugmasi
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.style.cssText = `
        background: #f44336;
        color: white;
        border: none;
        padding: 6px 12px;
        border-radius: 4px;
        cursor: pointer;
        margin-left: 8px;
    `;
    deleteBtn.addEventListener('click', () => deleteTodo(todo.id));

    todoItem.appendChild(checkbox);
    todoItem.appendChild(text);
    todoItem.appendChild(deleteBtn);

    return todoItem;
}

// Todo ro'yxatini ko'rsatish
function renderTodos() {
    const todoContainer = document.createElement('div');
    todoContainer.id = 'todo-container';
    todoContainer.style.cssText = `
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
    `;

    // Sarlavha
    const title = document.createElement('h3');
    title.textContent = '📝 Todo Ro\'yxati';
    title.style.cssText = 'color: #667eea; margin-bottom: 20px; text-align: center;';
    todoContainer.appendChild(title);

    // Input va qo'shish tugmasi
    const inputContainer = document.createElement('div');
    inputContainer.style.cssText = 'display: flex; gap: 10px; margin-bottom: 20px;';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Yangi todo kiriting...';
    input.style.cssText = `
        flex: 1;
        padding: 12px;
        border: 2px solid #667eea;
        border-radius: 8px;
        font-size: 16px;
    `;

    const addBtn = document.createElement('button');
    addBtn.textContent = '➕ Qo\'shish';
    addBtn.style.cssText = `
        padding: 12px 24px;
        background: #667eea;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 16px;
    `;
    addBtn.addEventListener('click', () => {
        if (input.value.trim()) {
            addTodo(input.value.trim());
            input.value = '';
        }
    });

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && input.value.trim()) {
            addTodo(input.value.trim());
            input.value = '';
        }
    });

    inputContainer.appendChild(input);
    inputContainer.appendChild(addBtn);
    todoContainer.appendChild(inputContainer);

    // Todo elementlari
    const listContainer = document.createElement('div');
    todos.forEach(todo => {
        listContainer.appendChild(createTodoElement(todo));
    });
    todoContainer.appendChild(listContainer);

    // Statistikalar
    const stats = document.createElement('div');
    stats.style.cssText = `
        margin-top: 20px;
        padding: 15px;
        background: #f5f5f5;
        border-radius: 8px;
        text-align: center;
    `;
    const completed = todos.filter(t => t.completed).length;
    stats.textContent = `Jami: ${todos.length} | Bajarilgan: ${completed} | Qolgan: ${todos.length - completed}`;
    todoContainer.appendChild(stats);

    // Eski container'ni tozalash va yangisini qo'shish
    const oldContainer = document.getElementById('todo-container');
    if (oldContainer) {
        oldContainer.remove();
    }
    demoContainer.appendChild(todoContainer);
}

// Todo qo'shish
function addTodo(text) {
    const newTodo = {
        id: nextId++,
        text: text,
        completed: false
    };
    todos.push(newTodo);
    renderTodos();
    console.log(`✅ Todo qo'shildi: ${text}`);
}

// Todo holatini o'zgartirish
function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        renderTodos();
        console.log(`✅ Todo holati o'zgardi: ${todo.text} - ${todo.completed ? 'Bajarildi' : 'Bajarilmadi'}`);
    }
}

// Todo o'chirish
function deleteTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todos = todos.filter(t => t.id !== id);
        renderTodos();
        console.log(`✅ Todo o'chirildi: ${todo.text}`);
    }
}

// Dastlabki render
renderTodos();
console.log("✅ Todo ro'yxati yaratildi va ko'rsatildi");
