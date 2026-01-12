// Vaqt hisob-kitoblari

console.log('🧮 Vaqt hisob-kitoblari');
console.log('');

const date1 = new Date(2024, 0, 15, 10, 30, 0);
const date2 = new Date(2024, 2, 20, 14, 45, 30);

// 1. Vaqt farqini hisoblash
console.log('1. Vaqt farqini hisoblash:');
console.log('Date1:', date1.toString());
console.log('Date2:', date2.toString());

const diffMs = date2 - date1;
const diffSec = Math.floor(diffMs / 1000);
const diffMin = Math.floor(diffSec / 60);
const diffHour = Math.floor(diffMin / 60);
const diffDay = Math.floor(diffHour / 24);

console.log('Farq (millisekundlar):', diffMs);
console.log('Farq (sekundlar):', diffSec);
console.log('Farq (daqiqalar):', diffMin);
console.log('Farq (soatlar):', diffHour);
console.log('Farq (kunlar):', diffDay);

// 2. Vaqt qo'shish va ayirish
console.log('');
console.log('2. Vaqt qo'shish va ayirish:');

// Millisekundlar qo'shish
const datePlusMs = new Date(date1.getTime() + 1000 * 60 * 30); // 30 daqiqa qo'shish
console.log('30 daqiqa qo'shish:', datePlusMs.toString());

// Kunlar qo'shish
const datePlusDays = new Date(date1);
datePlusDays.setDate(datePlusDays.getDate() + 7); // 7 kun qo'shish
console.log('7 kun qo'shish:', datePlusDays.toString());

// Oylar qo'shish
const datePlusMonths = new Date(date1);
datePlusMonths.setMonth(datePlusMonths.getMonth() + 2); // 2 oy qo'shish
console.log('2 oy qo'shish:', datePlusMonths.toString());

// Yillar qo'shish
const datePlusYears = new Date(date1);
datePlusYears.setFullYear(datePlusYears.getFullYear() + 1); // 1 yil qo'shish
console.log('1 yil qo'shish:', datePlusYears.toString());

// Vaqt ayirish
const dateMinusDays = new Date(date1);
dateMinusDays.setDate(dateMinusDays.getDate() - 5); // 5 kun ayirish
console.log('5 kun ayirish:', dateMinusDays.toString());

// 3. Date taqqoslash
console.log('');
console.log('3. Date taqqoslash:');

console.log('date1 < date2:', date1 < date2);
console.log('date1 > date2:', date1 > date2);
console.log('date1 === date2:', date1.getTime() === date2.getTime());
console.log('date1 == date2:', date1 == date2); // false, chunki turli obyektlar

// 4. Vaqt intervalini hisoblash
console.log('');
console.log('4. Vaqt intervalini hisoblash:');

function getTimeInterval(startDate, endDate) {
    const diffMs = Math.abs(endDate - startDate);
    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);
    
    return {
        milliseconds: diffMs,
        seconds: seconds,
        minutes: minutes,
        hours: hours,
        days: days,
        weeks: weeks,
        months: months,
        years: years
    };
}

const interval = getTimeInterval(date1, date2);
console.log('Interval:', interval);

// 5. Formatlangan interval
console.log('');
console.log('5. Formatlangan interval:');

function formatInterval(startDate, endDate) {
    const interval = getTimeInterval(startDate, endDate);
    
    if (interval.years > 0) {
        return `${interval.years} yil, ${interval.months % 12} oy, ${interval.days % 30} kun`;
    } else if (interval.months > 0) {
        return `${interval.months} oy, ${interval.days % 30} kun, ${interval.hours % 24} soat`;
    } else if (interval.days > 0) {
        return `${interval.days} kun, ${interval.hours % 24} soat, ${interval.minutes % 60} daqiqa`;
    } else if (interval.hours > 0) {
        return `${interval.hours} soat, ${interval.minutes % 60} daqiqa, ${interval.seconds % 60} sekund`;
    } else if (interval.minutes > 0) {
        return `${interval.minutes} daqiqa, ${interval.seconds % 60} sekund`;
    } else {
        return `${interval.seconds} sekund`;
    }
}

console.log('Formatlangan interval:', formatInterval(date1, date2));

// 6. Hafta oxiri va ish kunlari
console.log('');
console.log('6. Hafta oxiri va ish kunlari:');

function isWeekend(date) {
    const day = date.getDay();
    return day === 0 || day === 6; // 0 = Yakshanba, 6 = Shanba
}

function isWorkday(date) {
    return !isWeekend(date);
}

function getNextWorkday(date) {
    const nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);
    
    while (isWeekend(nextDay)) {
        nextDay.setDate(nextDay.getDate() + 1);
    }
    
    return nextDay;
}

console.log('date1 hafta oxirimi?', isWeekend(date1));
console.log('date1 ish kunimi?', isWorkday(date1));
console.log('Keyingi ish kuni:', getNextWorkday(date1).toString());

// 7. Yil oxiri va boshqa maxsus sanalar
console.log('');
console.log('7. Maxsus sanalar:');

function getYearStart(year) {
    return new Date(year, 0, 1);
}

function getYearEnd(year) {
    return new Date(year, 11, 31, 23, 59, 59, 999);
}

function getMonthStart(year, month) {
    return new Date(year, month, 1);
}

function getMonthEnd(year, month) {
    return new Date(year, month + 1, 0, 23, 59, 59, 999);
}

console.log('2024 yil boshi:', getYearStart(2024).toString());
console.log('2024 yil oxiri:', getYearEnd(2024).toString());
console.log('2024 yanvar boshi:', getMonthStart(2024, 0).toString());
console.log('2024 yanvar oxiri:', getMonthEnd(2024, 0).toString());

// 8. Demo container ga ko'rsatish
const demoContainer = document.getElementById('demo-container');
if (demoContainer) {
    const now = new Date();
    const futureDate = new Date(now);
    futureDate.setDate(futureDate.getDate() + 10);
    
    demoContainer.innerHTML = `
        <div style="font-family: monospace; line-height: 1.8;">
            <h4 style="color: #764ba2; margin-bottom: 10px;">🧮 Vaqt hisob-kitoblari</h4>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                <p><strong>Date1:</strong> ${date1.toString()}</p>
                <p><strong>Date2:</strong> ${date2.toString()}</p>
                <p><strong>Farq:</strong> ${formatInterval(date1, date2)}</p>
            </div>
            <div style="margin-bottom: 15px;">
                <strong>Vaqt qo'shish:</strong><br>
                30 daqiqa: ${datePlusMs.toString()}<br>
                7 kun: ${datePlusDays.toString()}<br>
                2 oy: ${datePlusMonths.toString()}<br>
                1 yil: ${datePlusYears.toString()}
            </div>
            <div style="margin-bottom: 15px;">
                <strong>Taqqoslash:</strong><br>
                date1 < date2: ${date1 < date2}<br>
                date1 > date2: ${date1 > date2}<br>
                date1 === date2: ${date1.getTime() === date2.getTime()}
            </div>
            <div style="padding: 15px; background: #e9ecef; border-radius: 8px;">
                <strong>Maxsus sanalar:</strong><br>
                2024 yil boshi: ${getYearStart(2024).toLocaleDateString('uz-UZ')}<br>
                2024 yil oxiri: ${getYearEnd(2024).toLocaleDateString('uz-UZ')}<br>
                Keyingi ish kuni: ${getNextWorkday(now).toLocaleDateString('uz-UZ')}
            </div>
        </div>
    `;
}

console.log('');
console.log('✅ Vaqt hisob-kitoblari ko\'rsatildi!');
