// Vaqt formatlash

console.log('🎨 Vaqt formatlash');
console.log('');

const date = new Date(2024, 2, 15, 14, 30, 45);

// 1. Custom formatlash funksiyasi
console.log('1. Custom formatlash:');

function formatDate(date, format = 'YYYY-MM-DD') {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    return format
        .replace('YYYY', year)
        .replace('MM', month)
        .replace('DD', day)
        .replace('HH', hours)
        .replace('mm', minutes)
        .replace('ss', seconds);
}

console.log('YYYY-MM-DD:', formatDate(date, 'YYYY-MM-DD'));
console.log('DD.MM.YYYY:', formatDate(date, 'DD.MM.YYYY'));
console.log('YYYY-MM-DD HH:mm:ss:', formatDate(date, 'YYYY-MM-DD HH:mm:ss'));
console.log('DD/MM/YYYY HH:mm:', formatDate(date, 'DD/MM/YYYY HH:mm'));

// 2. Locale formatlar
console.log('');
console.log('2. Locale formatlar:');

const locales = ['uz-UZ', 'en-US', 'ru-RU', 'de-DE', 'fr-FR'];
locales.forEach(locale => {
    console.log(`${locale}:`, date.toLocaleString(locale));
});

// 3. Formatlash opsiyalari
console.log('');
console.log('3. Formatlash opsiyalari:');

const formatOptions = [
    {
        name: 'To\'liq format',
        options: {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }
    },
    {
        name: 'Sana faqat',
        options: {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }
    },
    {
        name: 'Vaqt faqat',
        options: {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }
    },
    {
        name: 'Qisqa format',
        options: {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }
    }
];

formatOptions.forEach(({ name, options }) => {
    console.log(`${name}:`, date.toLocaleString('uz-UZ', options));
});

// 4. Relative time (nisbiy vaqt)
console.log('');
console.log('4. Relative time (nisbiy vaqt):');

function getRelativeTime(date) {
    const now = new Date();
    const diffMs = now - date;
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);
    
    if (diffSec < 60) {
        return `${diffSec} soniya oldin`;
    } else if (diffMin < 60) {
        return `${diffMin} daqiqa oldin`;
    } else if (diffHour < 24) {
        return `${diffHour} soat oldin`;
    } else if (diffDay < 7) {
        return `${diffDay} kun oldin`;
    } else if (diffDay < 30) {
        const weeks = Math.floor(diffDay / 7);
        return `${weeks} hafta oldin`;
    } else if (diffDay < 365) {
        const months = Math.floor(diffDay / 30);
        return `${months} oy oldin`;
    } else {
        const years = Math.floor(diffDay / 365);
        return `${years} yil oldin`;
    }
}

const pastDate1 = new Date(Date.now() - 30 * 1000); // 30 soniya oldin
const pastDate2 = new Date(Date.now() - 5 * 60 * 1000); // 5 daqiqa oldin
const pastDate3 = new Date(Date.now() - 2 * 60 * 60 * 1000); // 2 soat oldin
const pastDate4 = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000); // 3 kun oldin

console.log('30 soniya oldin:', getRelativeTime(pastDate1));
console.log('5 daqiqa oldin:', getRelativeTime(pastDate2));
console.log('2 soat oldin:', getRelativeTime(pastDate3));
console.log('3 kun oldin:', getRelativeTime(pastDate4));

// 5. Hafta kuni va oy nomlari
console.log('');
console.log('5. Hafta kuni va oy nomlari:');

const weekdays = ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'];
const months = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'];

console.log('Hafta kuni:', weekdays[date.getDay()]);
console.log('Oy:', months[date.getMonth()]);
console.log('To\'liq format:', `${weekdays[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`);

// 6. Demo container ga ko'rsatish
const demoContainer = document.getElementById('demo-container');
if (demoContainer) {
    const now = new Date();
    const relativeTime = getRelativeTime(new Date(now.getTime() - 2 * 60 * 60 * 1000));
    
    demoContainer.innerHTML = `
        <div style="font-family: monospace; line-height: 1.8;">
            <h4 style="color: #764ba2; margin-bottom: 10px;">🎨 Vaqt formatlash</h4>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                <p><strong>Asosiy sana:</strong> ${date.toString()}</p>
            </div>
            <div style="margin-bottom: 15px;">
                <strong>Custom formatlar:</strong><br>
                YYYY-MM-DD: ${formatDate(date, 'YYYY-MM-DD')}<br>
                DD.MM.YYYY: ${formatDate(date, 'DD.MM.YYYY')}<br>
                YYYY-MM-DD HH:mm:ss: ${formatDate(date, 'YYYY-MM-DD HH:mm:ss')}<br>
                DD/MM/YYYY HH:mm: ${formatDate(date, 'DD/MM/YYYY HH:mm')}
            </div>
            <div style="margin-bottom: 15px;">
                <strong>Locale formatlar:</strong><br>
                uz-UZ: ${date.toLocaleString('uz-UZ', formatOptions[0].options)}<br>
                en-US: ${date.toLocaleString('en-US', formatOptions[0].options)}<br>
                ru-RU: ${date.toLocaleString('ru-RU', formatOptions[0].options)}
            </div>
            <div style="padding: 15px; background: #e9ecef; border-radius: 8px;">
                <strong>Relative time:</strong><br>
                2 soat oldin: ${relativeTime}<br>
                3 kun oldin: ${getRelativeTime(new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000))}
            </div>
        </div>
    `;
}

console.log('');
console.log('✅ Vaqt formatlash ko\'rsatildi!');
