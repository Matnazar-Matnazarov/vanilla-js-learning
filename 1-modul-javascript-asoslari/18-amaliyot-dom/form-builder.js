/**
 * FORM BUILDER - Dinamik form elementlari yaratish
 * 
 * Bu loyiha DOM manipulyatsiyasi yordamida dinamik form elementlari yaratishni ko'rsatadi
 */

console.log("FORM BUILDER - Dinamik form elementlari yaratish\n");

const demoContainer = document.getElementById('demo-container');
if (!demoContainer) {
    console.log("❌ Demo container topilmadi");
    return;
}

// Form elementlari
let formFields = [];
let nextFieldId = 1;

// Form elementini yaratish
function createFormFieldElement(field) {
    const fieldContainer = document.createElement('div');
    fieldContainer.className = 'form-field';
    fieldContainer.style.cssText = `
        background: white;
        border-radius: 8px;
        padding: 15px;
        margin: 10px 0;
        border: 2px solid #667eea;
        position: relative;
    `;
    fieldContainer.dataset.id = field.id;

    // Label
    const label = document.createElement('label');
    label.textContent = field.label;
    label.style.cssText = `
        display: block;
        color: #667eea;
        font-weight: bold;
        margin-bottom: 8px;
    `;

    // Input element
    let input;
    if (field.type === 'textarea') {
        input = document.createElement('textarea');
        input.rows = 4;
    } else {
        input = document.createElement('input');
        input.type = field.type;
    }
    input.placeholder = field.placeholder || '';
    input.value = field.value || '';
    input.style.cssText = `
        width: 100%;
        padding: 10px;
        border: 2px solid #ddd;
        border-radius: 6px;
        font-size: 16px;
        box-sizing: border-box;
    `;

    // O'chirish tugmasi
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        background: #f44336;
        color: white;
        border: none;
        padding: 6px 10px;
        border-radius: 4px;
        cursor: pointer;
    `;
    deleteBtn.addEventListener('click', () => deleteField(field.id));

    fieldContainer.appendChild(label);
    fieldContainer.appendChild(input);
    fieldContainer.appendChild(deleteBtn);

    return fieldContainer;
}

// Formni ko'rsatish
function renderForm() {
    const formContainer = document.createElement('div');
    formContainer.id = 'form-container';
    formContainer.style.cssText = `
        max-width: 700px;
        margin: 0 auto;
        padding: 20px;
    `;

    // Sarlavha
    const title = document.createElement('h3');
    title.textContent = '📝 Form Builder';
    title.style.cssText = 'color: #667eea; margin-bottom: 20px; text-align: center;';
    formContainer.appendChild(title);

    // Form elementlari qo'shish paneli
    const addPanel = document.createElement('div');
    addPanel.style.cssText = 'background: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;';

    const typeSelect = document.createElement('select');
    typeSelect.style.cssText = `
        width: 100%;
        padding: 12px;
        margin-bottom: 10px;
        border: 2px solid #667eea;
        border-radius: 8px;
        font-size: 16px;
        box-sizing: border-box;
    `;
    ['text', 'email', 'password', 'number', 'textarea'].forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type.charAt(0).toUpperCase() + type.slice(1);
        typeSelect.appendChild(option);
    });

    const labelInput = document.createElement('input');
    labelInput.type = 'text';
    labelInput.placeholder = 'Label nomi';
    labelInput.style.cssText = `
        width: 100%;
        padding: 12px;
        margin-bottom: 10px;
        border: 2px solid #667eea;
        border-radius: 8px;
        font-size: 16px;
        box-sizing: border-box;
    `;

    const placeholderInput = document.createElement('input');
    placeholderInput.type = 'text';
    placeholderInput.placeholder = 'Placeholder matni';
    placeholderInput.style.cssText = `
        width: 100%;
        padding: 12px;
        margin-bottom: 10px;
        border: 2px solid #667eea;
        border-radius: 8px;
        font-size: 16px;
        box-sizing: border-box;
    `;

    const addBtn = document.createElement('button');
    addBtn.textContent = '➕ Form element qo\'shish';
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
        if (labelInput.value.trim()) {
            addField(typeSelect.value, labelInput.value.trim(), placeholderInput.value.trim());
            labelInput.value = '';
            placeholderInput.value = '';
        }
    });

    addPanel.appendChild(typeSelect);
    addPanel.appendChild(labelInput);
    addPanel.appendChild(placeholderInput);
    addPanel.appendChild(addBtn);
    formContainer.appendChild(addPanel);

    // Form elementlari
    const form = document.createElement('form');
    form.id = 'dynamic-form';
    form.style.cssText = 'background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;';

    if (formFields.length === 0) {
        const emptyMsg = document.createElement('p');
        emptyMsg.textContent = 'Hozircha form elementlari yo\'q. Yuqoridagi paneldan qo\'shing.';
        emptyMsg.style.cssText = 'text-align: center; color: #999; padding: 40px;';
        form.appendChild(emptyMsg);
    } else {
        formFields.forEach(field => {
            form.appendChild(createFormFieldElement(field));
        });
    }

    formContainer.appendChild(form);

    // Submit tugmasi
    if (formFields.length > 0) {
        const submitBtn = document.createElement('button');
        submitBtn.type = 'button';
        submitBtn.textContent = '📤 Formani yuborish';
        submitBtn.style.cssText = `
            width: 100%;
            padding: 12px;
            background: #4caf50;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
        `;
        submitBtn.addEventListener('click', () => {
            const formData = {};
            formFields.forEach(field => {
                const input = form.querySelector(`[data-id="${field.id}"] input, [data-id="${field.id}"] textarea`);
                if (input) {
                    formData[field.label] = input.value;
                }
            });
            console.log('Form ma\'lumotlari:', formData);
            alert('Form ma\'lumotlari konsolda ko\'rsatildi!');
        });
        formContainer.appendChild(submitBtn);
    }

    // Statistikalar
    const stats = document.createElement('div');
    stats.style.cssText = `
        margin-top: 20px;
        padding: 15px;
        background: #f5f5f5;
        border-radius: 8px;
        text-align: center;
    `;
    stats.textContent = `Jami form elementlari: ${formFields.length}`;
    formContainer.appendChild(stats);

    // Eski container'ni tozalash va yangisini qo'shish
    const oldContainer = document.getElementById('form-container');
    if (oldContainer) {
        oldContainer.remove();
    }
    demoContainer.appendChild(formContainer);
}

// Form elementi qo'shish
function addField(type, label, placeholder) {
    const newField = {
        id: nextFieldId++,
        type: type,
        label: label,
        placeholder: placeholder,
        value: ''
    };
    formFields.push(newField);
    renderForm();
    console.log(`✅ Form elementi qo'shildi: ${label} (${type})`);
}

// Form elementi o'chirish
function deleteField(id) {
    const field = formFields.find(f => f.id === id);
    if (field) {
        formFields = formFields.filter(f => f.id !== id);
        renderForm();
        console.log(`✅ Form elementi o'chirildi: ${field.label}`);
    }
}

// Dastlabki render
renderForm();
console.log("✅ Form builder yaratildi va ko'rsatildi");
