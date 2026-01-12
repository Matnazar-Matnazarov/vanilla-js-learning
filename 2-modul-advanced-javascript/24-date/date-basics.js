// Date obyekti asoslari

console.log('📅 Date obyekti asoslari');
console.log('');

// 1. Date obyekti yaratish
console.log('1. Date obyekti yaratish:');

// Hozirgi vaqt
const now = new Date();
console.log('Hozirgi vaqt:', now);

// String dan yaratish
const dateFromString = new Date('2024-01-15');
console.log('String dan:', dateFromString);

// Millisekundlardan yaratish
const dateFromMs = new Date(1705276800000);
console.log('Millisekundlardan:', dateFromMs);

// Parametrlar bilan yaratish (yil, oy, kun)
// Eslatma: oy 0 dan boshlanadi (0 = Yanvar, 11 = Dekabr)
const dateFromParams = new Date(2024, 0, 15, 14, 30, 0);
console.log('Parametrlar bilan (2024, 0, 15, 14, 30, 0):', dateFromParams);

// 2. Date.now() - hozirgi vaqt millisekundlarda
console.log('');
console.log('2. Date.now():');
const timestamp = Date.now();
console.log('Timestamp (millisekundlar):', timestamp);
console.log('Date obyektiga aylantirish:', new Date(timestamp));

// 3. Date.parse() - string ni millisekundlarga aylantirish
console.log('');
console.log('3. Date.parse():');
const parsed = Date.parse('2024-01-15T10:30:00');
console.log('Parsed timestamp:', parsed);
console.log('Date obyektiga aylantirish:', new Date(parsed));

// 4. Timezone bilan ishlash
console.log('');
console.log('4. Timezone bilan ishlash:');
console.log('UTC vaqt:', now.toUTCString());
console.log('ISO format:', now.toISOString());
console.log('Local vaqt:', now.toString());

// 5. Date obyektining asosiy xususiyatlari
console.log('');
console.log('5. Date obyektining asosiy xususiyatlari:');
console.log('getTime() - millisekundlar:', now.getTime());
console.log('getFullYear() - yil:', now.getFullYear());
console.log('getMonth() - oy (0-11):', now.getMonth());
console.log('getDate() - kun:', now.getDate());
console.log('getDay() - hafta kuni (0-6):', now.getDay());

// 6. Demo container ga ko'rsatish
const demoContainer = document.getElementById('demo-container');
if (demoContainer) {
    demoContainer.innerHTML = `
        <div style="font-family: monospace; line-height: 1.8;">
            <h4 style="color: #764ba2; margin-bottom: 10px;">📅 Date obyekti asoslari</h4>
            <p><strong>Hozirgi vaqt:</strong> ${now.toString()}</p>
            <p><strong>ISO format:</strong> ${now.toISOString()}</p>
            <p><strong>UTC vaqt:</strong> ${now.toUTCString()}</p>
            <p><strong>Yil:</strong> ${now.getFullYear()}</p>
            <p><strong>Oy:</strong> ${now.getMonth() + 1} (${['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'][now.getMonth()]})</p>
            <p><strong>Kun:</strong> ${now.getDate()}</p>
            <p><strong>Hafta kuni:</strong> ${['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'][now.getDay()]}</p>
        </div>
    `;
}

console.log('');
console.log('✅ Date asoslari ko\'rsatildi!');
