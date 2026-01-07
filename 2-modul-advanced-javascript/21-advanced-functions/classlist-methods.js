// classList Metodlari
// Bu fayl classList obyektining barcha metodlarini ko'rsatadi

console.log('📋 classList Metodlari\n');

// Demo element yaratish
const demoElement = document.createElement('div');
demoElement.id = 'classlist-demo';
demoElement.textContent = 'classList Demo Element';
demoElement.style.padding = '15px';
demoElement.style.margin = '10px 0';
demoElement.style.border = '2px solid #667eea';
demoElement.style.borderRadius = '8px';
document.getElementById('demo-container').appendChild(demoElement);

// 1. add() - class qo'shish
console.log('1. add() metodi - class qo\'shish:');
demoElement.classList.add('primary', 'large', 'rounded');
console.log('   Qo\'shilgan classlar:', demoElement.className);
console.log('   classList:', Array.from(demoElement.classList));
console.log('');

// 2. remove() - class o'chirish
console.log('2. remove() metodi - class o\'chirish:');
demoElement.classList.remove('large');
console.log('   O\'chirilgandan keyin:', demoElement.className);
console.log('');

// 3. toggle() - class toggle qilish
console.log('3. toggle() metodi - class toggle qilish:');
console.log('   "active" class mavjudmi?', demoElement.classList.contains('active'));
demoElement.classList.toggle('active');
console.log('   toggle() dan keyin "active" mavjudmi?', demoElement.classList.contains('active'));
demoElement.classList.toggle('active');
console.log('   yana toggle() dan keyin "active" mavjudmi?', demoElement.classList.contains('active'));
console.log('');

// 4. contains() - class mavjudligini tekshirish
console.log('4. contains() metodi - class mavjudligini tekshirish:');
console.log('   "primary" mavjudmi?', demoElement.classList.contains('primary'));
console.log('   "secondary" mavjudmi?', demoElement.classList.contains('secondary'));
console.log('');

// 5. replace() - classni almashtirish
console.log('5. replace() metodi - classni almashtirish:');
demoElement.classList.add('old-class');
console.log('   Almashtirishdan oldin:', demoElement.className);
demoElement.classList.replace('old-class', 'new-class');
console.log('   Almashtirilgandan keyin:', demoElement.className);
console.log('');

// 6. forEach() - classlar bo'yicha iteratsiya
console.log('6. forEach() metodi - classlar bo\'yicha iteratsiya:');
console.log('   Barcha classlar:');
demoElement.classList.forEach((className, index) => {
    console.log(`   ${index + 1}. ${className}`);
});
console.log('');

// 7. length - classlar soni
console.log('7. length xususiyati - classlar soni:');
console.log('   Jami classlar soni:', demoElement.classList.length);
console.log('');

// 8. item() - index bo'yicha class olish
console.log('8. item() metodi - index bo\'yicha class olish:');
for (let i = 0; i < demoElement.classList.length; i++) {
    console.log(`   Index ${i}:`, demoElement.classList.item(i));
}
console.log('');

// 9. toString() - barcha classlarni string sifatida olish
console.log('9. toString() metodi - barcha classlarni string:');
console.log('   classList.toString():', demoElement.classList.toString());
console.log('');

// Amaliy misol: Dynamic class management
console.log('💡 Amaliy misol: Dynamic class management');
const button = document.createElement('button');
button.textContent = 'Toggle Highlight';
button.style.padding = '10px 20px';
button.style.margin = '10px 0';
button.style.cursor = 'pointer';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.backgroundColor = '#667eea';
button.style.color = 'white';

button.addEventListener('click', () => {
    demoElement.classList.toggle('highlight');
    const isHighlighted = demoElement.classList.contains('highlight');
    button.textContent = isHighlighted ? 'Remove Highlight' : 'Add Highlight';
    console.log('   Highlight holati:', isHighlighted ? 'Qo\'shildi' : 'O\'chirildi');
});

document.getElementById('demo-container').appendChild(button);
console.log('   Toggle Highlight tugmasi qo\'shildi. Uni bosing!\n');

// Multiple classes bilan ishlash
console.log('💡 Multiple classes bilan ishlash:');
const multiElement = document.createElement('div');
multiElement.textContent = 'Multiple Classes Example';
multiElement.style.padding = '10px';
multiElement.style.margin = '10px 0';
multiElement.style.border = '1px solid #ccc';
multiElement.style.borderRadius = '5px';

// Bir nechta classni bir vaqtda qo'shish
multiElement.classList.add('card', 'shadow', 'hover-effect');
console.log('   Qo\'shilgan classlar:', multiElement.className);

// Bir nechta classni bir vaqtda o'chirish
multiElement.classList.remove('shadow', 'hover-effect');
console.log('   O\'chirilgandan keyin:', multiElement.className);

document.getElementById('demo-container').appendChild(multiElement);
console.log('');

console.log('✅ classList metodlari mavzusi tugadi!\n');
