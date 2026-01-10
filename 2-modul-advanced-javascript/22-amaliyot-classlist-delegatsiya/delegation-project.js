// Event Delegation Amaliy Loyihasi
// Bu fayl event delegation prinsiplarini real-world loyihalarda qo'llashni ko'rsatadi

console.log('🔄 Event Delegation Amaliy Loyihasi\n');

const demoContainer = document.getElementById('demo-container');
demoContainer.innerHTML = '';

// Loyiha 1: Dynamic Todo List
console.log('💡 Loyiha 1: Dynamic Todo List\n');

const todoContainer = document.createElement('div');
todoContainer.style.padding = '30px';
todoContainer.style.borderRadius = '12px';
todoContainer.style.backgroundColor = '#fff';
todoContainer.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
todoContainer.style.marginBottom = '30px';

const todoTitle = document.createElement('h2');
todoTitle.textContent = 'Todo List (Event Delegation)';
todoTitle.style.marginBottom = '20px';
todoTitle.style.color = '#333';
todoContainer.appendChild(todoTitle);

const todoList = document.createElement('ul');
todoList.id = 'todo-list';
todoList.style.listStyle = 'none';
todoList.style.padding = '0';
todoList.style.margin = '0 0 20px 0';

// Event Delegation: Parent elementda listener
todoList.addEventListener('click', function(event) {
    const target = event.target;
    
    if (target.classList.contains('delete-btn')) {
        const todoItem = target.closest('li');
        console.log('🗑️ Todo o\'chirildi:', todoItem.querySelector('span').textContent);
        todoItem.remove();
    } else if (target.closest('li')) {
        const todoItem = target.closest('li');
        todoItem.classList.toggle('completed');
        const isCompleted = todoItem.classList.contains('completed');
        console.log('✅ Todo holati:', isCompleted ? 'Bajarildi' : 'Bajarilmadi');
    }
});

function addTodo(text) {
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.innerHTML = `
        <span>${text}</span>
        <button class="delete-btn">Delete</button>
    `;
    li.style.cssText = 'padding: 12px; margin: 8px 0; background: #f8f9fa; border-radius: 5px; display: flex; justify-content: space-between; align-items: center; cursor: pointer;';
    todoList.appendChild(li);
    return li;
}

addTodo('Event delegation o\'rganish');
addTodo('Dynamic elementlar bilan ishlash');
addTodo('Performance optimizatsiyasi');

const todoInput = document.createElement('input');
todoInput.type = 'text';
todoInput.placeholder = 'Yangi todo kiriting...';
todoInput.style.cssText = 'padding: 10px; margin-right: 10px; border: 1px solid #ddd; border-radius: 5px; flex: 1;';

const addBtn = document.createElement('button');
addBtn.textContent = 'Qo\'shish';
addBtn.style.cssText = 'padding: 10px 20px; background: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer;';

addBtn.addEventListener('click', () => {
    const text = todoInput.value.trim();
    if (text) {
        addTodo(text);
        todoInput.value = '';
        console.log('➕ Yangi todo qo\'shildi:', text);
    }
});

todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addBtn.click();
});

const inputWrapper = document.createElement('div');
inputWrapper.style.display = 'flex';
inputWrapper.appendChild(todoInput);
inputWrapper.appendChild(addBtn);

todoContainer.appendChild(todoList);
todoContainer.appendChild(inputWrapper);
demoContainer.appendChild(todoContainer);

// CSS
const style = document.createElement('style');
style.textContent = `
    .todo-item.completed span { text-decoration: line-through; opacity: 0.6; }
    .delete-btn { padding: 5px 10px; background: #dc3545; color: white; border: none; border-radius: 3px; cursor: pointer; }
`;
document.head.appendChild(style);

console.log('✅ Todo List yaratildi! Event delegation orqali boshqariladi.\n');

// Loyiha 2: Dynamic Product List
console.log('💡 Loyiha 2: Dynamic Product List\n');

const productContainer = document.createElement('div');
productContainer.style.padding = '30px';
productContainer.style.borderRadius = '12px';
productContainer.style.backgroundColor = '#fff';
productContainer.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';

const productTitle = document.createElement('h2');
productTitle.textContent = 'Product List (Event Delegation)';
productTitle.style.marginBottom = '20px';
productTitle.style.color = '#333';
productContainer.appendChild(productTitle);

const productGrid = document.createElement('div');
productGrid.id = 'product-grid';
productGrid.style.display = 'grid';
productGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))';
productGrid.style.gap = '15px';
productGrid.style.marginBottom = '20px';

// Event Delegation: Product actions
productGrid.addEventListener('click', function(event) {
    const target = event.target;
    const productCard = target.closest('.product-card');
    
    if (!productCard) return;
    
    if (target.classList.contains('add-cart')) {
        console.log('🛒 Mahsulot savatga qo\'shildi:', productCard.dataset.id);
        target.textContent = 'Savatda';
        target.style.background = '#28a745';
    } else if (target.classList.contains('like-btn')) {
        productCard.classList.toggle('liked');
        const isLiked = productCard.classList.contains('liked');
        target.textContent = isLiked ? '❤️' : '🤍';
        console.log('❤️ Like holati:', isLiked ? 'Yoqildi' : 'O\'chirildi');
    } else if (target.classList.contains('product-card')) {
        console.log('📦 Mahsulot tanlandi:', productCard.dataset.id);
    }
});

function addProduct(id, name, price) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.id = id;
    card.innerHTML = `
        <h3>${name}</h3>
        <p style="font-size: 18px; font-weight: bold; color: #667eea; margin: 10px 0;">$${price}</p>
        <button class="add-cart">Savatga</button>
        <button class="like-btn" style="margin-top: 5px;">🤍</button>
    `;
    card.style.cssText = 'padding: 15px; border: 1px solid #ddd; border-radius: 8px; text-align: center; cursor: pointer;';
    productGrid.appendChild(card);
    return card;
}

addProduct('1', 'Laptop', 999);
addProduct('2', 'Phone', 699);
addProduct('3', 'Tablet', 399);

productContainer.appendChild(productGrid);
demoContainer.appendChild(productContainer);

console.log('✅ Product List yaratildi! Event delegation orqali boshqariladi.\n');

// Loyiha 3: Dynamic Comment System
console.log('💡 Loyiha 3: Dynamic Comment System\n');

const commentContainer = document.createElement('div');
commentContainer.style.padding = '30px';
commentContainer.style.borderRadius = '12px';
commentContainer.style.backgroundColor = '#fff';
commentContainer.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';

const commentTitle = document.createElement('h2');
commentTitle.textContent = 'Comment System (Event Delegation)';
commentTitle.style.marginBottom = '20px';
commentTitle.style.color = '#333';
commentContainer.appendChild(commentTitle);

const commentsList = document.createElement('div');
commentsList.id = 'comments-list';
commentsList.style.marginBottom = '20px';

// Event Delegation: Comment actions
commentsList.addEventListener('click', function(event) {
    const target = event.target;
    const comment = target.closest('.comment-item');
    
    if (!comment) return;
    
    if (target.classList.contains('reply-btn')) {
        console.log('💬 Reply bosildi:', comment.dataset.id);
        const replyInput = document.createElement('input');
        replyInput.type = 'text';
        replyInput.placeholder = 'Javob yozing...';
        replyInput.style.cssText = 'padding: 8px; width: 100%; margin-top: 10px; border: 1px solid #ddd; border-radius: 5px;';
        comment.appendChild(replyInput);
        replyInput.focus();
    } else if (target.classList.contains('like-comment')) {
        comment.classList.toggle('liked');
        const isLiked = comment.classList.contains('liked');
        target.textContent = isLiked ? '❤️ Liked' : '🤍 Like';
        console.log('❤️ Comment like:', isLiked ? 'Yoqildi' : 'O\'chirildi');
    }
});

function addComment(id, author, text) {
    const comment = document.createElement('div');
    comment.className = 'comment-item';
    comment.dataset.id = id;
    comment.innerHTML = `
        <strong>${author}</strong>
        <p style="margin: 8px 0;">${text}</p>
        <button class="reply-btn" style="padding: 5px 10px; margin-right: 5px; background: #667eea; color: white; border: none; border-radius: 3px; cursor: pointer;">Reply</button>
        <button class="like-comment" style="padding: 5px 10px; background: transparent; border: 1px solid #ddd; border-radius: 3px; cursor: pointer;">🤍 Like</button>
    `;
    comment.style.cssText = 'padding: 15px; margin: 10px 0; background: #f8f9fa; border-radius: 8px; border-left: 3px solid #667eea;';
    commentsList.appendChild(comment);
    return comment;
}

addComment('1', 'User1', 'Ajoyib loyiha! Event delegation juda qulay.');
addComment('2', 'User2', 'Dynamic elementlar bilan ishlash oson.');

const commentInput = document.createElement('textarea');
commentInput.placeholder = 'Izoh yozing...';
commentInput.style.cssText = 'width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ddd; border-radius: 5px; min-height: 80px;';

const submitBtn = document.createElement('button');
submitBtn.textContent = 'Izoh qo\'shish';
submitBtn.style.cssText = 'padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 5px; cursor: pointer;';

let commentId = 3;
submitBtn.addEventListener('click', () => {
    const text = commentInput.value.trim();
    if (text) {
        addComment(commentId++, 'You', text);
        commentInput.value = '';
        console.log('➕ Yangi izoh qo\'shildi');
    }
});

commentContainer.appendChild(commentsList);
commentContainer.appendChild(commentInput);
commentContainer.appendChild(submitBtn);
demoContainer.appendChild(commentContainer);

console.log('✅ Comment System yaratildi! Event delegation orqali boshqariladi.\n');

// Xulosa
console.log('📊 Event Delegation afzalliklari:');
console.log('   ✅ Faqat bitta listener (parent elementda)');
console.log('   ✅ Dynamic elementlar avtomatik ishlaydi');
console.log('   ✅ Memory samarador');
console.log('   ✅ Performance optimizatsiyasi');
console.log('');

console.log('✅ Event Delegation Amaliy Loyihasi tugadi!\n');
