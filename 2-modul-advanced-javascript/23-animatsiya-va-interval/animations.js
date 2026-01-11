// JavaScript Animatsiyalari
// Bu fayl JavaScript animatsiyalarini ko'rsatadi

(function() {
'use strict';

console.log('✨ JavaScript Animatsiyalari\n');

const demoContainer = document.getElementById('demo-container');
demoContainer.innerHTML = '';

// CSS Transitions bilan ishlash
console.log('📌 CSS Transitions bilan ishlash');
console.log('CSS transitions JavaScript orqali boshqariladi.\n');

// Misol 1: CSS Transition
console.log('Misol 1: CSS Transition');

const transitionBox = document.createElement('div');
transitionBox.className = 'animated-box';
transitionBox.style.background = '#FF9800';
transitionBox.style.left = '0px';
transitionBox.style.top = '10px';
transitionBox.style.transition = 'all 0.5s ease';
demoContainer.appendChild(transitionBox);

const transitionButton = document.createElement('button');
transitionButton.textContent = 'CSS Transition';
transitionButton.style.marginTop = '10px';
transitionButton.style.padding = '10px';
transitionButton.style.background = '#FF9800';
transitionButton.style.color = 'white';
transitionButton.style.border = 'none';
transitionButton.style.borderRadius = '5px';
transitionButton.style.cursor = 'pointer';

let isMoved = false;
transitionButton.addEventListener('click', () => {
    if (!isMoved) {
        transitionBox.style.left = '350px';
        transitionBox.style.transform = 'rotate(360deg) scale(1.5)';
        isMoved = true;
    } else {
        transitionBox.style.left = '0px';
        transitionBox.style.transform = 'rotate(0deg) scale(1)';
        isMoved = false;
    }
    console.log('🎨 CSS Transition ishladi');
});

demoContainer.appendChild(transitionButton);

// JavaScript animatsiyalari
console.log('\n📌 JavaScript Animatsiyalari');
console.log('JavaScript orqali to\'g\'ridan-to\'g\'ri animatsiya yaratish.\n');

// Misol 2: Linear animation
console.log('Misol 2: Linear Animation');

const linearBox = document.createElement('div');
linearBox.className = 'animated-box';
linearBox.style.background = '#9C27B0';
linearBox.style.left = '0px';
linearBox.style.top = '70px';
demoContainer.appendChild(linearBox);

let linearPosition = 0;
let linearAnimationId;

function linearAnimate() {
    linearPosition += 2;
    linearBox.style.left = linearPosition + 'px';
    
    if (linearPosition < 400) {
        linearAnimationId = requestAnimationFrame(linearAnimate);
    } else {
        linearPosition = 0;
        linearBox.style.left = '0px';
    }
}

const linearButton = document.createElement('button');
linearButton.textContent = 'Linear Animation';
linearButton.style.marginTop = '10px';
linearButton.style.padding = '10px';
linearButton.style.background = '#9C27B0';
linearButton.style.color = 'white';
linearButton.style.border = 'none';
linearButton.style.borderRadius = '5px';
linearButton.style.cursor = 'pointer';
linearButton.style.marginLeft = '10px';

let isLinearRunning = false;
linearButton.addEventListener('click', () => {
    if (!isLinearRunning) {
        isLinearRunning = true;
        linearAnimate();
        console.log('🚀 Linear animatsiya boshlandi');
    } else {
        isLinearRunning = false;
        cancelAnimationFrame(linearAnimationId);
        console.log('⏸️ Linear animatsiya to\'xtatildi');
    }
});

demoContainer.appendChild(linearButton);

// Misol 3: Bounce animation
console.log('\n📌 Bounce Animation');
console.log('Sakrash effekti bilan animatsiya.\n');

const bounceBox = document.createElement('div');
bounceBox.className = 'animated-box';
bounceBox.style.background = '#E91E63';
bounceBox.style.left = '200px';
bounceBox.style.top = '130px';
bounceBox.style.borderRadius = '50%';
demoContainer.appendChild(bounceBox);

let bounceY = 0;
let bounceVelocity = 0;
let bounceGravity = 0.5;
let bounceAnimationId;

function bounceAnimate() {
    bounceVelocity += bounceGravity;
    bounceY += bounceVelocity;
    
    if (bounceY > 100) {
        bounceY = 100;
        bounceVelocity *= -0.8; // Bounce effect
    }
    
    bounceBox.style.top = (130 + bounceY) + 'px';
    
    if (Math.abs(bounceVelocity) > 0.1 || bounceY < 100) {
        bounceAnimationId = requestAnimationFrame(bounceAnimate);
    }
}

const bounceButton = document.createElement('button');
bounceButton.textContent = 'Bounce Animation';
bounceButton.style.marginTop = '10px';
bounceButton.style.padding = '10px';
bounceButton.style.background = '#E91E63';
bounceButton.style.color = 'white';
bounceButton.style.border = 'none';
bounceButton.style.borderRadius = '5px';
bounceButton.style.cursor = 'pointer';
bounceButton.style.marginLeft = '10px';

bounceButton.addEventListener('click', () => {
    bounceY = 0;
    bounceVelocity = -10;
    bounceAnimate();
    console.log('🏀 Bounce animatsiya boshlandi');
});

demoContainer.appendChild(bounceButton);

// Misol 4: Rotation animation
console.log('\n📌 Rotation Animation');
console.log('Aylanish animatsiyasi.\n');

const rotateBox = document.createElement('div');
rotateBox.className = 'animated-box';
rotateBox.style.background = '#00BCD4';
rotateBox.style.left = '200px';
rotateBox.style.top = '190px';
rotateBox.style.transformOrigin = 'center';
demoContainer.appendChild(rotateBox);

let rotationAngle = 0;
let rotateAnimationId;

function rotateAnimate() {
    rotationAngle += 3;
    rotateBox.style.transform = `rotate(${rotationAngle}deg)`;
    
    if (rotationAngle < 360) {
        rotateAnimationId = requestAnimationFrame(rotateAnimate);
    } else {
        rotationAngle = 0;
    }
}

const rotateButton = document.createElement('button');
rotateButton.textContent = 'Rotation Animation';
rotateButton.style.marginTop = '10px';
rotateButton.style.padding = '10px';
rotateButton.style.background = '#00BCD4';
rotateButton.style.color = 'white';
rotateButton.style.border = 'none';
rotateButton.style.borderRadius = '5px';
rotateButton.style.cursor = 'pointer';
rotateButton.style.marginLeft = '10px';

let isRotating = false;
rotateButton.addEventListener('click', () => {
    if (!isRotating) {
        isRotating = true;
        rotateAnimate();
        console.log('🔄 Rotation animatsiya boshlandi');
    } else {
        isRotating = false;
        cancelAnimationFrame(rotateAnimationId);
        console.log('⏸️ Rotation animatsiya to\'xtatildi');
    }
});

demoContainer.appendChild(rotateButton);

// Misol 5: Color animation
console.log('\n📌 Color Animation');
console.log('Rang o\'zgarishi animatsiyasi.\n');

const colorBox = document.createElement('div');
colorBox.className = 'animated-box';
colorBox.style.background = '#FF5722';
colorBox.style.left = '200px';
colorBox.style.top = '250px';
demoContainer.appendChild(colorBox);

let hue = 0;
let colorAnimationId;

function colorAnimate() {
    hue = (hue + 2) % 360;
    colorBox.style.background = `hsl(${hue}, 70%, 50%)`;
    colorAnimationId = requestAnimationFrame(colorAnimate);
}

const colorButton = document.createElement('button');
colorButton.textContent = 'Color Animation';
colorButton.style.marginTop = '10px';
colorButton.style.padding = '10px';
colorButton.style.background = '#FF5722';
colorButton.style.color = 'white';
colorButton.style.border = 'none';
colorButton.style.borderRadius = '5px';
colorButton.style.cursor = 'pointer';
colorButton.style.marginLeft = '10px';

let isColorRunning = false;
colorButton.addEventListener('click', () => {
    if (!isColorRunning) {
        isColorRunning = true;
        colorAnimate();
        console.log('🎨 Color animatsiya boshlandi');
    } else {
        isColorRunning = false;
        cancelAnimationFrame(colorAnimationId);
        console.log('⏸️ Color animatsiya to\'xtatildi');
    }
});

demoContainer.appendChild(colorButton);

// Animation best practices
console.log('\n📊 Animation Best Practices:');
console.log('   ✅ requestAnimationFrame ishlatish (setTimeout o\'rniga)');
console.log('   ✅ Animatsiyalarni to\'xtatish (cancelAnimationFrame)');
console.log('   ✅ Performance optimizatsiyasi (transform, opacity)');
console.log('   ✅ Easing funksiyalari ishlatish');
console.log('   ✅ Memory leak larni oldini olish');
console.log('   ✅ CSS transitions oddiy holatlar uchun');
console.log('');

console.log('✅ JavaScript Animatsiyalari misollari tugadi!\n');

})();
