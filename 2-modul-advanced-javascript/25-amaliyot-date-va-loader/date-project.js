// Date loyihasi - Vaqt ko'rsatish, countdown timer, vaqt hisob-kitoblari

console.log('📅 Date loyihasi');
console.log('');

const demoContainer = document.getElementById('demo-container');
if (!demoContainer) {
    console.error('Demo container topilmadi!');
} else {
    // 1. Real-time vaqt ko'rsatish
    console.log('1. Real-time vaqt ko\'rsatish:');
    
    function formatTime(date) {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }
    
    function formatDate(date) {
        const weekdays = ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'];
        const months = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'];
        
        const weekday = weekdays[date.getDay()];
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        
        return `${weekday}, ${day} ${month} ${year}`;
    }
    
    // Real-time clock yaratish
    const clockDiv = document.createElement('div');
    clockDiv.style.cssText = 'text-align: center; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 12px; margin-bottom: 20px;';
    
    const timeDisplay = document.createElement('div');
    timeDisplay.style.cssText = 'font-size: 3em; font-weight: bold; margin-bottom: 10px;';
    
    const dateDisplay = document.createElement('div');
    dateDisplay.style.cssText = 'font-size: 1.2em; opacity: 0.9;';
    
    clockDiv.appendChild(timeDisplay);
    clockDiv.appendChild(dateDisplay);
    
    function updateClock() {
        const now = new Date();
        timeDisplay.textContent = formatTime(now);
        dateDisplay.textContent = formatDate(now);
    }
    
    updateClock();
    const clockInterval = setInterval(updateClock, 1000);
    
    // 2. Countdown timer
    console.log('2. Countdown timer:');
    
    const countdownDiv = document.createElement('div');
    countdownDiv.style.cssText = 'padding: 20px; background: #f8f9fa; border-radius: 12px; margin-bottom: 20px;';
    
    const countdownTitle = document.createElement('h3');
    countdownTitle.textContent = '⏰ Countdown Timer';
    countdownTitle.style.cssText = 'color: #764ba2; margin-bottom: 15px;';
    
    const targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 1); // 1 soatdan keyin
    
    const countdownDisplay = document.createElement('div');
    countdownDisplay.style.cssText = 'font-size: 1.5em; font-weight: bold; color: #333; text-align: center; padding: 15px; background: white; border-radius: 8px;';
    
    function updateCountdown() {
        const now = new Date();
        const diff = targetDate - now;
        
        if (diff <= 0) {
            countdownDisplay.textContent = '⏱️ Vaqt tugadi!';
            clearInterval(countdownInterval);
            return;
        }
        
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        countdownDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
    
    countdownDiv.appendChild(countdownTitle);
    countdownDiv.appendChild(countdownDisplay);
    
    // 3. Vaqt hisob-kitoblari
    console.log('3. Vaqt hisob-kitoblari:');
    
    const calculationsDiv = document.createElement('div');
    calculationsDiv.style.cssText = 'padding: 20px; background: #e9ecef; border-radius: 12px;';
    
    const calcTitle = document.createElement('h3');
    calcTitle.textContent = '🧮 Vaqt Hisob-kitoblari';
    calcTitle.style.cssText = 'color: #764ba2; margin-bottom: 15px;';
    
    const calcContent = document.createElement('div');
    calcContent.style.cssText = 'font-family: monospace; line-height: 1.8;';
    
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const nextWeek = new Date(now);
    nextWeek.setDate(nextWeek.getDate() + 7);
    
    const nextMonth = new Date(now);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    
    function getDaysUntil(targetDate) {
        const diff = targetDate - now;
        return Math.ceil(diff / (1000 * 60 * 60 * 24));
    }
    
    calcContent.innerHTML = `
        <p><strong>Ertaga:</strong> ${getDaysUntil(tomorrow)} kun</p>
        <p><strong>Keyingi hafta:</strong> ${getDaysUntil(nextWeek)} kun</p>
        <p><strong>Keyingi oy:</strong> ${getDaysUntil(nextMonth)} kun</p>
        <p><strong>Yil oxiri:</strong> ${getDaysUntil(new Date(now.getFullYear(), 11, 31))} kun</p>
    `;
    
    calculationsDiv.appendChild(calcTitle);
    calculationsDiv.appendChild(calcContent);
    
    // Barcha elementlarni demo container ga qo'shish
    demoContainer.appendChild(clockDiv);
    demoContainer.appendChild(countdownDiv);
    demoContainer.appendChild(calculationsDiv);
    
    // Cleanup funksiyasi (agar kerak bo'lsa)
    window.dateProjectCleanup = function() {
        clearInterval(clockInterval);
        clearInterval(countdownInterval);
    };
    
    console.log('✅ Real-time clock yaratildi');
    console.log('✅ Countdown timer yaratildi');
    console.log('✅ Vaqt hisob-kitoblari ko\'rsatildi');
}

console.log('');
console.log('✅ Date loyihasi ko\'rsatildi!');
