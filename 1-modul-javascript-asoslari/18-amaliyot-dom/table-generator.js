/**
 * TABLE GENERATOR - Dinamik jadval yaratish
 * 
 * Bu loyiha DOM manipulyatsiyasi yordamida dinamik jadval yaratishni ko'rsatadi
 */

console.log("TABLE GENERATOR - Dinamik jadval yaratish\n");

const demoContainer = document.getElementById('demo-container');
if (!demoContainer) {
    console.log("❌ Demo container topilmadi");
    return;
}

// Jadval ma'lumotlari
let tableData = [
    { id: 1, name: "Matnazar", age: 25, city: "Toshkent", email: "matnazar@example.com" },
    { id: 2, name: "Ali", age: 30, city: "Samarqand", email: "ali@example.com" },
    { id: 3, name: "Vali", age: 28, city: "Buxoro", email: "vali@example.com" }
];

let nextId = 4;
const columns = ['name', 'age', 'city', 'email'];
const columnLabels = {
    name: 'Ism',
    age: 'Yosh',
    city: 'Shahar',
    email: 'Email'
};

// Jadval qatorini yaratish
function createTableRow(data, isHeader = false) {
    const row = document.createElement('tr');
    row.style.cssText = isHeader ? 'background: #667eea; color: white;' : 'background: white;';

    if (isHeader) {
        columns.forEach(col => {
            const th = document.createElement('th');
            th.textContent = columnLabels[col];
            th.style.cssText = `
                padding: 12px;
                text-align: left;
                border-bottom: 2px solid #ddd;
            `;
            row.appendChild(th);
        });
        const actionTh = document.createElement('th');
        actionTh.textContent = 'Amallar';
        actionTh.style.cssText = `
            padding: 12px;
            text-align: left;
            border-bottom: 2px solid #ddd;
        `;
        row.appendChild(actionTh);
    } else {
        columns.forEach(col => {
            const td = document.createElement('td');
            td.textContent = data[col];
            td.style.cssText = `
                padding: 12px;
                border-bottom: 1px solid #ddd;
            `;
            row.appendChild(td);
        });

        const actionTd = document.createElement('td');
        actionTd.style.cssText = 'padding: 12px; border-bottom: 1px solid #ddd;';

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '🗑️ O\'chirish';
        deleteBtn.style.cssText = `
            background: #f44336;
            color: white;
            border: none;
            padding: 6px 12px;
            border-radius: 4px;
            cursor: pointer;
        `;
        deleteBtn.addEventListener('click', () => deleteRow(data.id));

        actionTd.appendChild(deleteBtn);
        row.appendChild(actionTd);
    }

    return row;
}

// Jadvalni ko'rsatish
function renderTable() {
    const tableContainer = document.createElement('div');
    tableContainer.id = 'table-container';
    tableContainer.style.cssText = `
        max-width: 900px;
        margin: 0 auto;
        padding: 20px;
    `;

    // Sarlavha
    const title = document.createElement('h3');
    title.textContent = '📊 Jadval Generator';
    title.style.cssText = 'color: #667eea; margin-bottom: 20px; text-align: center;';
    tableContainer.appendChild(title);

    // Form qo'shish
    const form = document.createElement('div');
    form.style.cssText = 'background: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Ism';
    nameInput.style.cssText = `
        width: calc(25% - 10px);
        padding: 10px;
        margin: 5px;
        border: 2px solid #667eea;
        border-radius: 6px;
        font-size: 14px;
        box-sizing: border-box;
    `;

    const ageInput = document.createElement('input');
    ageInput.type = 'number';
    ageInput.placeholder = 'Yosh';
    ageInput.style.cssText = `
        width: calc(25% - 10px);
        padding: 10px;
        margin: 5px;
        border: 2px solid #667eea;
        border-radius: 6px;
        font-size: 14px;
        box-sizing: border-box;
    `;

    const cityInput = document.createElement('input');
    cityInput.type = 'text';
    cityInput.placeholder = 'Shahar';
    cityInput.style.cssText = `
        width: calc(25% - 10px);
        padding: 10px;
        margin: 5px;
        border: 2px solid #667eea;
        border-radius: 6px;
        font-size: 14px;
        box-sizing: border-box;
    `;

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Email';
    emailInput.style.cssText = `
        width: calc(25% - 10px);
        padding: 10px;
        margin: 5px;
        border: 2px solid #667eea;
        border-radius: 6px;
        font-size: 14px;
        box-sizing: border-box;
    `;

    const addBtn = document.createElement('button');
    addBtn.textContent = '➕ Qator qo\'shish';
    addBtn.style.cssText = `
        width: 100%;
        padding: 12px;
        margin-top: 10px;
        background: #667eea;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 16px;
    `;
    addBtn.addEventListener('click', () => {
        if (nameInput.value.trim() && ageInput.value && cityInput.value.trim() && emailInput.value.trim()) {
            addRow(nameInput.value.trim(), parseInt(ageInput.value), cityInput.value.trim(), emailInput.value.trim());
            nameInput.value = '';
            ageInput.value = '';
            cityInput.value = '';
            emailInput.value = '';
        }
    });

    form.appendChild(nameInput);
    form.appendChild(ageInput);
    form.appendChild(cityInput);
    form.appendChild(emailInput);
    form.appendChild(addBtn);
    tableContainer.appendChild(form);

    // Jadval
    const table = document.createElement('table');
    table.style.cssText = `
        width: 100%;
        border-collapse: collapse;
        background: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    `;

    const thead = document.createElement('thead');
    thead.appendChild(createTableRow(null, true));

    const tbody = document.createElement('tbody');
    tableData.forEach(data => {
        tbody.appendChild(createTableRow(data));
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    tableContainer.appendChild(table);

    // Statistikalar
    const stats = document.createElement('div');
    stats.style.cssText = `
        margin-top: 20px;
        padding: 15px;
        background: #f5f5f5;
        border-radius: 8px;
        text-align: center;
    `;
    const avgAge = tableData.length > 0 
        ? Math.round(tableData.reduce((sum, row) => sum + row.age, 0) / tableData.length)
        : 0;
    stats.textContent = `Jami qatorlar: ${tableData.length} | O'rtacha yosh: ${avgAge}`;
    tableContainer.appendChild(stats);

    // Eski container'ni tozalash va yangisini qo'shish
    const oldContainer = document.getElementById('table-container');
    if (oldContainer) {
        oldContainer.remove();
    }
    demoContainer.appendChild(tableContainer);
}

// Qator qo'shish
function addRow(name, age, city, email) {
    const newRow = {
        id: nextId++,
        name: name,
        age: age,
        city: city,
        email: email
    };
    tableData.push(newRow);
    renderTable();
    console.log(`✅ Jadval qatori qo'shildi: ${name}`);
}

// Qator o'chirish
function deleteRow(id) {
    const row = tableData.find(r => r.id === id);
    if (row) {
        tableData = tableData.filter(r => r.id !== id);
        renderTable();
        console.log(`✅ Jadval qatori o'chirildi: ${row.name}`);
    }
}

// Dastlabki render
renderTable();
console.log("✅ Jadval generator yaratildi va ko'rsatildi");
