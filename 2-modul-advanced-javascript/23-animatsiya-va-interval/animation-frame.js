// RequestAnimationFrame
// Bu fayl RequestAnimationFrame API sini ko'rsatadi

(function() {
'use strict';

console.log('🎬 RequestAnimationFrame\n');

const demoContainer = document.getElementById('demo-container');
demoContainer.innerHTML = '';

// RequestAnimationFrame asoslari
console.log('📌 RequestAnimationFrame asoslari');
console.log('RequestAnimationFrame - brauzerning repaint tsikliga moslashgan animatsiya API.\n');

// Misol 1: Oddiy RequestAnimationFrame
console.log('Misol 1: Oddiy RequestAnimationFrame');
console.log('Element chapdan o\'ngga harakatlanadi...\n');

const box1 = document.createElement('div');
box1.className = 'animated-box';
box1.style.background = '#f5576c';
box1.style.left = '0px';
box1.style.top = '10px';
demoContainer.appendChild(box1);

let position1 = 0;
let animationId1;

function animate1() {
    position1 += 2;
    box1.style.left = position1 + 'px';
    
    if (position1 < 400) {
        animationId1 = requestAnimationFrame(animate1);
    } else {
        console.log('✅ Animatsiya tugadi!\n');
    }
}

// Animatsiyani boshlash tugmasi
const startButton1 = document.createElement('button');
startButton1.textContent = 'Animatsiyani boshlash';
startButton1.style.marginTop = '10px';
startButton1.style.padding = '10px';
startButton1.style.background = '#f5576c';
startButton1.style.color = 'white';
startButton1.style.border = 'none';
startButton1.style.borderRadius = '5px';
startButton1.style.cursor = 'pointer';

startButton1.addEventListener('click', () => {
    position1 = 0;
    box1.style.left = '0px';
    cancelAnimationFrame(animationId1);
    animate1();
});

demoContainer.appendChild(startButton1);

// Misol 2: cancelAnimationFrame
console.log('\n📌 cancelAnimationFrame');
console.log('Animatsiyani to\'xtatish uchun cancelAnimationFrame ishlatiladi.\n');

const box2 = document.createElement('div');
box2.className = 'animated-box';
box2.style.background = '#4CAF50';
box2.style.left = '0px';
box2.style.top = '70px';
demoContainer.appendChild(box2);

let position2 = 0;
let animationId2;
let isAnimating = false;

function animate2() {
    position2 += 3;
    box2.style.left = position2 + 'px';
    
    if (position2 < 400 && isAnimating) {
        animationId2 = requestAnimationFrame(animate2);
    }
}

const startButton2 = document.createElement('button');
startButton2.textContent = 'Boshlash';
startButton2.style.marginTop = '10px';
startButton2.style.padding = '10px';
startButton2.style.background = '#4CAF50';
startButton2.style.color = 'white';
startButton2.style.border = 'none';
startButton2.style.borderRadius = '5px';
startButton2.style.cursor = 'pointer';
startButton2.style.marginLeft = '10px';

const stopButton2 = document.createElement('button');
stopButton2.textContent = 'To\'xtatish';
stopButton2.style.marginTop = '10px';
stopButton2.style.padding = '10px';
stopButton2.style.background = '#f44336';
stopButton2.style.color = 'white';
stopButton2.style.border = 'none';
stopButton2.style.borderRadius = '5px';
stopButton2.style.cursor = 'pointer';
stopButton2.style.marginLeft = '10px';

startButton2.addEventListener('click', () => {
    position2 = 0;
    box2.style.left = '0px';
    isAnimating = true;
    animate2();
    console.log('🚀 Animatsiya boshlandi');
});

stopButton2.addEventListener('click', () => {
    isAnimating = false;
    cancelAnimationFrame(animationId2);
    console.log('⏸️ Animatsiya to\'xtatildi\n');
});

demoContainer.appendChild(startButton2);
demoContainer.appendChild(stopButton2);

// Misol 3: Smooth animation - easing
console.log('\n📌 Smooth Animation - Easing');
console.log('Easing funksiyalari animatsiyani silliq qiladi.\n');

const box3 = document.createElement('div');
box3.className = 'animated-box';
box3.style.background = '#2196F3';
box3.style.left = '0px';
box3.style.top = '130px';
demoContainer.appendChild(box3);

let startTime3;
const duration3 = 2000; // 2 soniya

function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function animate3(timestamp) {
    if (!startTime3) startTime3 = timestamp;
    const elapsed = timestamp - startTime3;
    const progress = Math.min(elapsed / duration3, 1);
    
    const eased = easeInOutQuad(progress);
    box3.style.left = (eased * 400) + 'px';
    
    if (progress < 1) {
        requestAnimationFrame(animate3);
    } else {
        console.log('✅ Smooth animatsiya tugadi!\n');
        startTime3 = null;
    }
}

const smoothButton = document.createElement('button');
smoothButton.textContent = 'Smooth animatsiya';
smoothButton.style.marginTop = '10px';
smoothButton.style.padding = '10px';
smoothButton.style.background = '#2196F3';
smoothButton.style.color = 'white';
smoothButton.style.border = 'none';
smoothButton.style.borderRadius = '5px';
smoothButton.style.cursor = 'pointer';
smoothButton.style.marginLeft = '10px';

smoothButton.addEventListener('click', () => {
    box3.style.left = '0px';
    startTime3 = null;
    requestAnimationFrame(animate3);
});

demoContainer.appendChild(smoothButton);

// Misol 4: Performance monitoring
console.log('\n📌 Performance Monitoring');
console.log('FPS (Frames Per Second) ni o\'lchash.\n');

let frameCount = 0;
let lastTime = performance.now();
let fps = 0;

const fpsDisplay = document.createElement('div');
fpsDisplay.className = 'timer-display';
fpsDisplay.textContent = 'FPS: 0';
fpsDisplay.style.marginTop = '10px';
demoContainer.appendChild(fpsDisplay);

function measureFPS() {
    frameCount++;
    const currentTime = performance.now();
    
    if (currentTime >= lastTime + 1000) {
        fps = frameCount;
        frameCount = 0;
        lastTime = currentTime;
        fpsDisplay.textContent = `FPS: ${fps}`;
        console.log(`📊 FPS: ${fps}`);
    }
    
    requestAnimationFrame(measureFPS);
}

measureFPS();

// RequestAnimationFrame afzalliklari
console.log('\n📊 RequestAnimationFrame afzalliklari:');
console.log('   ✅ Browser repaint tsikliga moslashgan');
console.log('   ✅ Performance optimizatsiyasi');
console.log('   ✅ Tab background da avtomatik to\'xtaydi');
console.log('   ✅ Smooth animatsiyalar');
console.log('   ✅ Battery samarador');
console.log('');

console.log('✅ RequestAnimationFrame misollari tugadi!\n');

})();
