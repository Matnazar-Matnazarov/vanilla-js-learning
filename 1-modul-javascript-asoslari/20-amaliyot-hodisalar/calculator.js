/**
 * INTERACTIVE CALCULATOR
 * 
 * Event-driven kalkulyator - barcha amallar event listenerlar orqali boshqariladi
 */

console.log("INTERACTIVE CALCULATOR\n");

const demoContainer = document.getElementById('demo-container');
if (!demoContainer) {
    console.log("❌ Demo container topilmadi");
    return;
}

// Kalkulyator holati
let currentValue = '0';
let previousValue = null;
let operation = null;
let shouldResetDisplay = false;

// Kalkulyator UI yaratish
function createCalculator() {
    const calcContainer = document.createElement('div');
    calcContainer.id = 'calculator';
    calcContainer.style.cssText = `
        max-width: 300px;
        margin: 0 auto;
        background: #1e1e1e;
        border-radius: 12px;
        padding: 20px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    `;

    // Display
    const display = document.createElement('div');
    display.id = 'calc-display';
    display.textContent = currentValue;
    display.style.cssText = `
        background: #2d2d2d;
        color: #4caf50;
        padding: 20px;
        border-radius: 8px;
        font-size: 2em;
        text-align: right;
        margin-bottom: 15px;
        font-family: 'Courier New', monospace;
        min-height: 60px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    `;

    // Button container
    const buttonGrid = document.createElement('div');
    buttonGrid.style.cssText = `
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
    `;

    // Buttonlar
    const buttons = [
        { text: 'C', class: 'clear', colspan: 2 },
        { text: '⌫', class: 'backspace' },
        { text: '÷', class: 'operator' },
        { text: '7', class: 'number' },
        { text: '8', class: 'number' },
        { text: '9', class: 'number' },
        { text: '×', class: 'operator' },
        { text: '4', class: 'number' },
        { text: '5', class: 'number' },
        { text: '6', class: 'number' },
        { text: '−', class: 'operator' },
        { text: '1', class: 'number' },
        { text: '2', class: 'number' },
        { text: '3', class: 'number' },
        { text: '+', class: 'operator' },
        { text: '0', class: 'number', colspan: 2 },
        { text: '.', class: 'number' },
        { text: '=', class: 'equals' }
    ];

    buttons.forEach(btn => {
        const button = document.createElement('button');
        button.textContent = btn.text;
        button.className = btn.class;
        button.style.cssText = `
            padding: 20px;
            font-size: 1.2em;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s;
            font-weight: bold;
        `;

        // Button ranglari
        if (btn.class === 'number') {
            button.style.background = '#4a4a4a';
            button.style.color = 'white';
        } else if (btn.class === 'operator') {
            button.style.background = '#667eea';
            button.style.color = 'white';
        } else if (btn.class === 'clear' || btn.class === 'backspace') {
            button.style.background = '#f44336';
            button.style.color = 'white';
        } else if (btn.class === 'equals') {
            button.style.background = '#4caf50';
            button.style.color = 'white';
        }

        // Hover effekt
        button.addEventListener('mouseenter', () => {
            button.style.opacity = '0.8';
            button.style.transform = 'scale(0.95)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.opacity = '1';
            button.style.transform = 'scale(1)';
        });

        // Click event
        button.addEventListener('click', () => handleButtonClick(btn.text, btn.class));
        button.addEventListener('mousedown', () => {
            button.style.transform = 'scale(0.9)';
        });
        button.addEventListener('mouseup', () => {
            button.style.transform = 'scale(1)';
        });

        if (btn.colspan === 2) {
            button.style.gridColumn = 'span 2';
        }

        buttonGrid.appendChild(button);
    });

    calcContainer.appendChild(display);
    calcContainer.appendChild(buttonGrid);

    // Eski kalkulyatorni olib tashlash
    const oldCalc = document.getElementById('calculator');
    if (oldCalc) {
        oldCalc.remove();
    }

    demoContainer.appendChild(calcContainer);
    updateDisplay();
    console.log("✅ Kalkulyator yaratildi");
}

// Display yangilash
function updateDisplay() {
    const display = document.getElementById('calc-display');
    if (display) {
        display.textContent = currentValue;
    }
}

// Button click handler
function handleButtonClick(value, className) {
    console.log(`Button bosildi: ${value} (${className})`);

    if (className === 'number') {
        if (shouldResetDisplay) {
            currentValue = '0';
            shouldResetDisplay = false;
        }
        if (currentValue === '0') {
            currentValue = value;
        } else {
            currentValue += value;
        }
        updateDisplay();
    } else if (className === 'operator') {
        if (previousValue !== null && !shouldResetDisplay) {
            calculate();
        }
        previousValue = parseFloat(currentValue);
        operation = value;
        shouldResetDisplay = true;
        console.log(`Operation: ${previousValue} ${operation}`);
    } else if (className === 'equals') {
        if (previousValue !== null && operation) {
            calculate();
            operation = null;
            previousValue = null;
        }
    } else if (className === 'clear') {
        currentValue = '0';
        previousValue = null;
        operation = null;
        shouldResetDisplay = false;
        updateDisplay();
        console.log("Kalkulyator tozalandi");
    } else if (className === 'backspace') {
        if (currentValue.length > 1) {
            currentValue = currentValue.slice(0, -1);
        } else {
            currentValue = '0';
        }
        updateDisplay();
    }
}

// Hisoblash
function calculate() {
    const current = parseFloat(currentValue);
    let result;

    switch (operation) {
        case '+':
            result = previousValue + current;
            break;
        case '−':
            result = previousValue - current;
            break;
        case '×':
            result = previousValue * current;
            break;
        case '÷':
            result = previousValue / current;
            break;
        default:
            return;
    }

    currentValue = result.toString();
    shouldResetDisplay = true;
    updateDisplay();
    console.log(`Hisob: ${previousValue} ${operation} ${current} = ${result}`);
}

// Keyboard support
document.addEventListener('keydown', (e) => {
    const key = e.key;
    if (key >= '0' && key <= '9' || key === '.') {
        handleButtonClick(key, 'number');
    } else if (key === '+' || key === '-') {
        handleButtonClick(key === '+' ? '+' : '−', 'operator');
    } else if (key === '*') {
        handleButtonClick('×', 'operator');
    } else if (key === '/') {
        e.preventDefault();
        handleButtonClick('÷', 'operator');
    } else if (key === 'Enter' || key === '=') {
        handleButtonClick('=', 'equals');
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        handleButtonClick('C', 'clear');
    } else if (key === 'Backspace') {
        handleButtonClick('⌫', 'backspace');
    }
});

// Kalkulyatorni yaratish
createCalculator();
console.log("✅ Kalkulyator tayyor va ishga tushirildi");
console.log("Klaviatura yordamida ham ishlatishingiz mumkin!");
