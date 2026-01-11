// setTimeout va setInterval
// Bu fayl JavaScript timer metodlarini ko'rsatadi

(function() {
'use strict';

console.log('⏰ setTimeout va setInterval\n');

const demoContainer = document.getElementById('demo-container');
demoContainer.innerHTML = '';

// setTimeout - bir marta ishlash
console.log('📌 setTimeout - bir marta ishlash');
console.log('setTimeout funksiyasi belgilangan vaqtdan keyin bir marta ishlaydi.\n');

// Misol 1: Oddiy setTimeout
console.log('Misol 1: Oddiy setTimeout');
console.log('3 soniyadan keyin xabar chiqadi...\n');

setTimeout(() => {
    console.log('✅ 3 soniya o\'tdi! setTimeout ishladi.');
}, 3000);

// Misol 2: setTimeout parametrlar bilan
console.log('Misol 2: setTimeout parametrlar bilan');
setTimeout((message, count) => {
    console.log(`✅ ${message} - ${count} marta`);
}, 2000, 'Xabar', 1);

// setInterval - takrorlanuvchi ishlash
console.log('\n📌 setInterval - takrorlanuvchi ishlash');
console.log('setInterval funksiyasi belgilangan vaqt oralig\'ida takrorlanadi.\n');

// Misol 3: setInterval - sekundomer
console.log('Misol 3: setInterval - sekundomer');
let seconds = 0;
const timerDisplay = document.createElement('div');
timerDisplay.className = 'timer-display';
timerDisplay.textContent = `Sekundomer: ${seconds}s`;
demoContainer.appendChild(timerDisplay);

const intervalId = setInterval(() => {
    seconds++;
    timerDisplay.textContent = `Sekundomer: ${seconds}s`;
    console.log(`⏱️ ${seconds} soniya o'tdi`);
    
    // 10 soniyadan keyin to'xtatish
    if (seconds >= 10) {
        clearInterval(intervalId);
        console.log('✅ Sekundomer to\'xtatildi (10 soniya)\n');
    }
}, 1000);

// clearTimeout va clearInterval
console.log('\n📌 clearTimeout va clearInterval');
console.log('Timerlarni to\'xtatish uchun clearTimeout va clearInterval ishlatiladi.\n');

// Misol 4: Timerlarni boshqarish
console.log('Misol 4: Timerlarni boshqarish');

const timeoutId = setTimeout(() => {
    console.log('Bu xabar ko\'rinmaydi (to\'xtatildi)');
}, 5000);

// Timerlarni to'xtatish tugmasi
const stopButton = document.createElement('button');
stopButton.textContent = 'Timerlarni to\'xtatish';
stopButton.style.marginTop = '10px';
stopButton.style.padding = '10px';
stopButton.style.background = '#f5576c';
stopButton.style.color = 'white';
stopButton.style.border = 'none';
stopButton.style.borderRadius = '5px';
stopButton.style.cursor = 'pointer';

stopButton.addEventListener('click', () => {
    clearTimeout(timeoutId);
    clearInterval(intervalId);
    console.log('✅ Barcha timerlar to\'xtatildi!\n');
    stopButton.disabled = true;
    stopButton.textContent = 'Timerlar to\'xtatildi';
});

demoContainer.appendChild(stopButton);

// Misol 5: Debounce pattern
console.log('\n📌 Debounce Pattern');
console.log('Debounce - funksiyani bir necha marta chaqirishni oldini olish.\n');

let debounceTimer;
const debounceButton = document.createElement('button');
debounceButton.textContent = 'Debounce test (5 soniya)';
debounceButton.style.marginTop = '10px';
debounceButton.style.padding = '10px';
debounceButton.style.background = '#4CAF50';
debounceButton.style.color = 'white';
debounceButton.style.border = 'none';
debounceButton.style.borderRadius = '5px';
debounceButton.style.cursor = 'pointer';
debounceButton.style.marginLeft = '10px';

let clickCount = 0;
debounceButton.addEventListener('click', () => {
    clickCount++;
    console.log(`🖱️ Tugma bosildi (${clickCount} marta)`);
    
    // Avvalgi timer ni bekor qilish
    clearTimeout(debounceTimer);
    
    // Yangi timer o'rnatish
    debounceTimer = setTimeout(() => {
        console.log(`✅ Debounce ishladi! Jami ${clickCount} marta bosildi.\n`);
        clickCount = 0;
    }, 5000);
});

demoContainer.appendChild(debounceButton);

// Misol 6: Throttle pattern
console.log('\n📌 Throttle Pattern');
console.log('Throttle - funksiyani ma\'lum vaqt oralig\'ida bir marta ishlash.\n');

let throttleTimer = null;
let throttleCount = 0;
const throttleButton = document.createElement('button');
throttleButton.textContent = 'Throttle test (2 soniya)';
throttleButton.style.marginTop = '10px';
throttleButton.style.padding = '10px';
throttleButton.style.background = '#2196F3';
throttleButton.style.color = 'white';
throttleButton.style.border = 'none';
throttleButton.style.borderRadius = '5px';
throttleButton.style.cursor = 'pointer';
throttleButton.style.marginLeft = '10px';

throttleButton.addEventListener('click', () => {
    throttleCount++;
    
    if (!throttleTimer) {
        console.log(`🚀 Throttle ishladi! (${throttleCount} marta bosildi)`);
        throttleCount = 0;
        
        throttleTimer = setTimeout(() => {
            throttleTimer = null;
        }, 2000);
    } else {
        console.log(`⏸️ Throttle - kutish rejimi (${throttleCount} marta bosildi)`);
    }
});

demoContainer.appendChild(throttleButton);

// Timer management best practices
console.log('\n📊 Timer Management Best Practices:');
console.log('   ✅ Timer ID larni saqlash (clearTimeout/clearInterval uchun)');
console.log('   ✅ Component unmount da timerlarni tozalash');
console.log('   ✅ Memory leak larni oldini olish');
console.log('   ✅ Debounce va Throttle pattern larni ishlatish');
console.log('');

console.log('✅ setTimeout va setInterval misollari tugadi!\n');

})();
