/**
 * INTERACTIVE COLOR PICKER
 * 
 * Event-driven rang tanlash - real-time rang o'zgarishi
 */

console.log("INTERACTIVE COLOR PICKER\n");

const demoContainer = document.getElementById('demo-container');
if (!demoContainer) {
    console.log("❌ Demo container topilmadi");
    return;
}

// Rang tanlash UI yaratish
function createColorPicker() {
    const pickerContainer = document.createElement('div');
    pickerContainer.id = 'color-picker';
    pickerContainer.style.cssText = `
        max-width: 500px;
        margin: 0 auto;
        background: white;
        border-radius: 12px;
        padding: 25px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    `;

    // Sarlavha
    const title = document.createElement('h3');
    title.textContent = '🎨 Rang Tanlash';
    title.style.cssText = 'color: #667eea; margin-bottom: 20px; text-align: center;';
    pickerContainer.appendChild(title);

    // Rang ko'rsatish maydoni
    const colorDisplay = document.createElement('div');
    colorDisplay.id = 'color-display';
    colorDisplay.style.cssText = `
        width: 100%;
        height: 200px;
        background: #667eea;
        border-radius: 12px;
        margin-bottom: 20px;
        transition: background 0.3s;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    `;
    pickerContainer.appendChild(colorDisplay);

    // RGB inputlar
    const rgbContainer = document.createElement('div');
    rgbContainer.style.cssText = 'margin-bottom: 20px;';

    const colors = [
        { name: 'Red', id: 'red', value: 102 },
        { name: 'Green', id: 'green', value: 126 },
        { name: 'Blue', id: 'blue', value: 234 }
    ];

    colors.forEach(color => {
        const colorGroup = document.createElement('div');
        colorGroup.style.cssText = 'margin-bottom: 15px;';

        const label = document.createElement('label');
        label.textContent = color.name;
        label.style.cssText = `
            display: block;
            margin-bottom: 5px;
            color: #666;
            font-weight: bold;
        `;

        const inputContainer = document.createElement('div');
        inputContainer.style.cssText = 'display: flex; gap: 10px; align-items: center;';

        const rangeInput = document.createElement('input');
        rangeInput.type = 'range';
        rangeInput.id = `range-${color.id}`;
        rangeInput.min = '0';
        rangeInput.max = '255';
        rangeInput.value = color.value;
        rangeInput.style.cssText = 'flex: 1; cursor: pointer;';

        const numberInput = document.createElement('input');
        numberInput.type = 'number';
        numberInput.id = `number-${color.id}`;
        numberInput.min = '0';
        numberInput.max = '255';
        numberInput.value = color.value;
        numberInput.style.cssText = `
            width: 80px;
            padding: 8px;
            border: 2px solid #667eea;
            border-radius: 6px;
            font-size: 16px;
        `;

        // Range input event
        rangeInput.addEventListener('input', (e) => {
            const value = parseInt(e.target.value);
            numberInput.value = value;
            updateColor();
            console.log(`${color.name} o'zgardi: ${value}`);
        });

        // Number input event
        numberInput.addEventListener('input', (e) => {
            let value = parseInt(e.target.value);
            if (value < 0) value = 0;
            if (value > 255) value = 255;
            rangeInput.value = value;
            numberInput.value = value;
            updateColor();
            console.log(`${color.name} o'zgardi: ${value}`);
        });

        inputContainer.appendChild(rangeInput);
        inputContainer.appendChild(numberInput);
        colorGroup.appendChild(label);
        colorGroup.appendChild(inputContainer);
        rgbContainer.appendChild(colorGroup);
    });

    pickerContainer.appendChild(rgbContainer);

    // Hex kod ko'rsatish
    const hexContainer = document.createElement('div');
    hexContainer.style.cssText = 'margin-bottom: 20px;';

    const hexLabel = document.createElement('label');
    hexLabel.textContent = 'Hex Kod';
    hexLabel.style.cssText = `
        display: block;
        margin-bottom: 5px;
        color: #666;
        font-weight: bold;
    `;

    const hexInput = document.createElement('input');
    hexInput.type = 'text';
    hexInput.id = 'hex-input';
    hexInput.value = '#667eea';
    hexInput.style.cssText = `
        width: 100%;
        padding: 12px;
        border: 2px solid #667eea;
        border-radius: 6px;
        font-size: 16px;
        font-family: 'Courier New', monospace;
        text-transform: uppercase;
    `;

    hexInput.addEventListener('input', (e) => {
        const hex = e.target.value;
        if (/^#[0-9A-F]{6}$/i.test(hex)) {
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);
            
            document.getElementById('range-red').value = r;
            document.getElementById('number-red').value = r;
            document.getElementById('range-green').value = g;
            document.getElementById('number-green').value = g;
            document.getElementById('range-blue').value = b;
            document.getElementById('number-blue').value = b;
            
            updateColor();
            console.log(`Hex kod o'zgardi: ${hex}`);
        }
    });

    hexContainer.appendChild(hexLabel);
    hexContainer.appendChild(hexInput);
    pickerContainer.appendChild(hexContainer);

    // Preset ranglar
    const presetContainer = document.createElement('div');
    presetContainer.style.cssText = 'margin-bottom: 20px;';

    const presetLabel = document.createElement('label');
    presetLabel.textContent = 'Preset Ranglar';
    presetLabel.style.cssText = `
        display: block;
        margin-bottom: 10px;
        color: #666;
        font-weight: bold;
    `;

    const presetGrid = document.createElement('div');
    presetGrid.style.cssText = `
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 10px;
    `;

    const presets = [
        { name: 'Qizil', color: '#f44336' },
        { name: 'Yashil', color: '#4caf50' },
        { name: 'Ko\'k', color: '#2196f3' },
        { name: 'Sariq', color: '#ffeb3b' },
        { name: 'Binafsha', color: '#9c27b0' },
        { name: 'To\'q qizil', color: '#d32f2f' },
        { name: 'To\'q yashil', color: '#388e3c' },
        { name: 'To\'q ko\'k', color: '#1976d2' },
        { name: 'Oranjev', color: '#ff9800' },
        { name: 'Qora', color: '#212121' }
    ];

    presets.forEach(preset => {
        const presetBtn = document.createElement('button');
        presetBtn.style.cssText = `
            padding: 15px;
            background: ${preset.color};
            border: 2px solid transparent;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s;
        `;
        presetBtn.title = preset.name;

        presetBtn.addEventListener('click', () => {
            const hex = preset.color;
            hexInput.value = hex;
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);
            
            document.getElementById('range-red').value = r;
            document.getElementById('number-red').value = r;
            document.getElementById('range-green').value = g;
            document.getElementById('number-green').value = g;
            document.getElementById('range-blue').value = b;
            document.getElementById('number-blue').value = b;
            
            updateColor();
            console.log(`Preset rang tanlandi: ${preset.name} (${hex})`);
        });

        presetBtn.addEventListener('mouseenter', () => {
            presetBtn.style.transform = 'scale(1.1)';
            presetBtn.style.borderColor = '#667eea';
        });

        presetBtn.addEventListener('mouseleave', () => {
            presetBtn.style.transform = 'scale(1)';
            presetBtn.style.borderColor = 'transparent';
        });

        presetGrid.appendChild(presetBtn);
    });

    presetContainer.appendChild(presetLabel);
    presetContainer.appendChild(presetGrid);
    pickerContainer.appendChild(presetContainer);

    // Rang yangilash funksiyasi
    function updateColor() {
        const r = parseInt(document.getElementById('range-red').value);
        const g = parseInt(document.getElementById('range-green').value);
        const b = parseInt(document.getElementById('range-blue').value);
        
        const hex = '#' + [r, g, b].map(x => {
            const hex = x.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        }).join('').toUpperCase();
        
        colorDisplay.style.background = `rgb(${r}, ${g}, ${b})`;
        hexInput.value = hex;
        
        console.log(`Rang yangilandi: RGB(${r}, ${g}, ${b}) = ${hex}`);
    }

    // Eski picker ni olib tashlash
    const oldPicker = document.getElementById('color-picker');
    if (oldPicker) {
        oldPicker.remove();
    }

    demoContainer.appendChild(pickerContainer);
    console.log("✅ Rang tanlash yaratildi");
}

// Rang tanlashni yaratish
createColorPicker();
console.log("✅ Rang tanlash tayyor va ishga tushirildi");
