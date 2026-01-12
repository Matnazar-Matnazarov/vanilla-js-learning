// Date metodlari

console.log('🔧 Date metodlari');
console.log('');

const date = new Date(2024, 2, 15, 14, 30, 45, 500);
console.log('Asosiy sana:', date.toString());
console.log('');

// 1. Yil metodlari
console.log('1. Yil metodlari:');
console.log('getFullYear():', date.getFullYear());
console.log('getYear():', date.getYear(), '(eski metod, ishlatilmasligi tavsiya etiladi)');
console.log('setFullYear(2025):');
const date1 = new Date(date);
date1.setFullYear(2025);
console.log("  Yangi sana:", date1.toString());

// 2. Oy metodlari
console.log('');
console.log('2. Oy metodlari:');
console.log('getMonth():', date.getMonth(), '(0-11, 0 = Yanvar)');
console.log('setMonth(5):');
const date2 = new Date(date);
date2.setMonth(5);
console.log("  Yangi sana:", date2.toString());

// 3. Kun metodlari
console.log('');
console.log('3. Kun metodlari:');
console.log('getDate():', date.getDate());
console.log('getDay():', date.getDay(), '(0-6, 0 = Yakshanba)');
console.log('setDate(25):');
const date3 = new Date(date);
date3.setDate(25);
console.log("  Yangi sana:", date3.toString());

// 4. Soat metodlari
console.log('');
console.log('4. Soat metodlari:');
console.log('getHours():', date.getHours());
console.log('getMinutes():', date.getMinutes());
console.log('getSeconds():', date.getSeconds());
console.log('getMilliseconds():', date.getMilliseconds());
console.log('setHours(18):');
const date4 = new Date(date);
date4.setHours(18);
console.log("  Yangi sana:", date4.toString());

// 5. UTC metodlari
console.log('');
console.log('5. UTC metodlari:');
console.log('getUTCFullYear():', date.getUTCFullYear());
console.log('getUTCMonth():', date.getUTCMonth());
console.log('getUTCDate():', date.getUTCDate());
console.log('getUTCHours():', date.getUTCHours());
console.log('getUTCMinutes():', date.getUTCMinutes());
console.log('getUTCSeconds():', date.getUTCSeconds());

// 6. String formatlash metodlari
console.log('');
console.log('6. String formatlash metodlari:');
console.log('toString():', date.toString());
console.log('toDateString():', date.toDateString());
console.log('toTimeString():', date.toTimeString());
console.log('toISOString():', date.toISOString());
console.log('toUTCString():', date.toUTCString());
console.log('toLocaleString():', date.toLocaleString());
console.log('toLocaleDateString():', date.toLocaleDateString());
console.log('toLocaleTimeString():', date.toLocaleTimeString());

// 7. Locale formatlash
console.log('');
console.log('7. Locale formatlash:');
console.log('toLocaleString("uz-UZ"):', date.toLocaleString('uz-UZ'));
console.log('toLocaleString("en-US"):', date.toLocaleString('en-US'));
console.log('toLocaleString("ru-RU"):', date.toLocaleString('ru-RU'));

// 8. Formatlash opsiyalari
console.log('');
console.log('8. Formatlash opsiyalari:');
const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit'
};
console.log('toLocaleString("uz-UZ", options):', date.toLocaleString('uz-UZ', options));

// 9. Demo container ga ko'rsatish
const demoContainer = document.getElementById('demo-container');
if (demoContainer) {
    const months = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'];
    const weekdays = ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'];
    
    demoContainer.innerHTML = `
        <div style="font-family: monospace; line-height: 1.8;">
            <h4 style="color: #764ba2; margin-bottom: 10px;">🔧 Date metodlari</h4>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                <p><strong>Asosiy sana:</strong> ${date.toString()}</p>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                <div>
                    <strong>Yil:</strong> ${date.getFullYear()}<br>
                    <strong>Oy:</strong> ${months[date.getMonth()]} (${date.getMonth() + 1})<br>
                    <strong>Kun:</strong> ${date.getDate()}<br>
                    <strong>Hafta kuni:</strong> ${weekdays[date.getDay()]}
                </div>
                <div>
                    <strong>Soat:</strong> ${date.getHours()}<br>
                    <strong>Daqiqa:</strong> ${date.getMinutes()}<br>
                    <strong>Sekund:</strong> ${date.getSeconds()}<br>
                    <strong>Millisekund:</strong> ${date.getMilliseconds()}
                </div>
            </div>
            <div style="margin-top: 15px; padding: 15px; background: #e9ecef; border-radius: 8px;">
                <strong>Formatlar:</strong><br>
                ISO: ${date.toISOString()}<br>
                UTC: ${date.toUTCString()}<br>
                Local (uz-UZ): ${date.toLocaleString('uz-UZ', options)}
            </div>
        </div>
    `;
}

console.log('');
console.log('✅ Date metodlari ko\'rsatildi!');
