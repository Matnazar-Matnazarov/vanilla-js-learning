/**
 * CARD GENERATOR - Dinamik kartalar yaratish
 * 
 * Bu loyiha DOM manipulyatsiyasi yordamida dinamik kartalar yaratishni ko'rsatadi
 */

console.log("CARD GENERATOR - Dinamik kartalar yaratish\n");

const demoContainer = document.getElementById('demo-container');
if (!demoContainer) {
    console.log("❌ Demo container topilmadi");
    return;
}

// Kartalar ma'lumotlari
let cards = [
    { id: 1, title: "JavaScript", description: "Dasturlash tili", color: "#667eea" },
    { id: 2, title: "DOM", description: "Document Object Model", color: "#764ba2" },
    { id: 3, title: "CSS", description: "Stil berish tili", color: "#f093fb" }
];

let nextId = 4;

// Karta elementini yaratish
function createCardElement(card) {
    const cardElement = document.createElement('div');
    cardElement.className = 'card-item';
    cardElement.style.cssText = `
        background: white;
        border-radius: 12px;
        padding: 20px;
        margin: 10px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        border-top: 4px solid ${card.color};
        transition: transform 0.3s, box-shadow 0.3s;
        cursor: pointer;
        min-width: 200px;
    `;
    cardElement.dataset.id = card.id;

    cardElement.addEventListener('mouseenter', () => {
        cardElement.style.transform = 'translateY(-5px)';
        cardElement.style.boxShadow = '0 8px 12px rgba(0,0,0,0.2)';
    });

    cardElement.addEventListener('mouseleave', () => {
        cardElement.style.transform = 'translateY(0)';
        cardElement.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    });

    // Sarlavha
    const title = document.createElement('h3');
    title.textContent = card.title;
    title.style.cssText = `
        color: ${card.color};
        margin-bottom: 10px;
        font-size: 1.3em;
    `;

    // Tavsif
    const description = document.createElement('p');
    description.textContent = card.description;
    description.style.cssText = `
        color: #666;
        margin-bottom: 15px;
        line-height: 1.6;
    `;

    // O'chirish tugmasi
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'O\'chirish';
    deleteBtn.style.cssText = `
        background: #f44336;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 6px;
        cursor: pointer;
        width: 100%;
    `;
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        deleteCard(card.id);
    });

    cardElement.appendChild(title);
    cardElement.appendChild(description);
    cardElement.appendChild(deleteBtn);

    return cardElement;
}

// Kartalarni ko'rsatish
function renderCards() {
    const cardContainer = document.createElement('div');
    cardContainer.id = 'card-container';
    cardContainer.style.cssText = `
        max-width: 900px;
        margin: 0 auto;
        padding: 20px;
    `;

    // Sarlavha
    const title = document.createElement('h3');
    title.textContent = '🃏 Karta Generator';
    title.style.cssText = 'color: #667eea; margin-bottom: 20px; text-align: center;';
    cardContainer.appendChild(title);

    // Form
    const form = document.createElement('div');
    form.style.cssText = 'background: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;';

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.placeholder = 'Karta sarlavhasi';
    titleInput.style.cssText = `
        width: 100%;
        padding: 12px;
        margin-bottom: 10px;
        border: 2px solid #667eea;
        border-radius: 8px;
        font-size: 16px;
        box-sizing: border-box;
    `;

    const descInput = document.createElement('input');
    descInput.type = 'text';
    descInput.placeholder = 'Karta tavsifi';
    descInput.style.cssText = `
        width: 100%;
        padding: 12px;
        margin-bottom: 10px;
        border: 2px solid #667eea;
        border-radius: 8px;
        font-size: 16px;
        box-sizing: border-box;
    `;

    const colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.value = '#667eea';
    colorInput.style.cssText = `
        width: 100%;
        padding: 8px;
        margin-bottom: 10px;
        border: 2px solid #667eea;
        border-radius: 8px;
        cursor: pointer;
    `;

    const addBtn = document.createElement('button');
    addBtn.textContent = '➕ Karta qo\'shish';
    addBtn.style.cssText = `
        width: 100%;
        padding: 12px;
        background: #667eea;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 16px;
    `;
    addBtn.addEventListener('click', () => {
        if (titleInput.value.trim() && descInput.value.trim()) {
            addCard(titleInput.value.trim(), descInput.value.trim(), colorInput.value);
            titleInput.value = '';
            descInput.value = '';
            colorInput.value = '#667eea';
        }
    });

    form.appendChild(titleInput);
    form.appendChild(descInput);
    form.appendChild(colorInput);
    form.appendChild(addBtn);
    cardContainer.appendChild(form);

    // Kartalar ro'yxati
    const cardsGrid = document.createElement('div');
    cardsGrid.style.cssText = `
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 15px;
    `;

    cards.forEach(card => {
        cardsGrid.appendChild(createCardElement(card));
    });

    cardContainer.appendChild(cardsGrid);

    // Statistikalar
    const stats = document.createElement('div');
    stats.style.cssText = `
        margin-top: 20px;
        padding: 15px;
        background: #f5f5f5;
        border-radius: 8px;
        text-align: center;
    `;
    stats.textContent = `Jami kartalar: ${cards.length}`;
    cardContainer.appendChild(stats);

    // Eski container'ni tozalash va yangisini qo'shish
    const oldContainer = document.getElementById('card-container');
    if (oldContainer) {
        oldContainer.remove();
    }
    demoContainer.appendChild(cardContainer);
}

// Karta qo'shish
function addCard(title, description, color) {
    const newCard = {
        id: nextId++,
        title: title,
        description: description,
        color: color
    };
    cards.push(newCard);
    renderCards();
    console.log(`✅ Karta qo'shildi: ${title}`);
}

// Karta o'chirish
function deleteCard(id) {
    const card = cards.find(c => c.id === id);
    if (card) {
        cards = cards.filter(c => c.id !== id);
        renderCards();
        console.log(`✅ Karta o'chirildi: ${card.title}`);
    }
}

// Dastlabki render
renderCards();
console.log("✅ Karta generator yaratildi va ko'rsatildi");
