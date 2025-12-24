// Amaliyot: Window modal bilan ishlash

function startPractice() {
    // alert() - xabar ko'rsatish
    alert("Xush kelibsiz!");
    
    // prompt() - foydalanuvchidan ma'lumot olish
    let userName = prompt("Ismingizni kiriting:");
    let userAge = prompt("Yoshingizni kiriting:");
    
    // confirm() - tasdiqlash olish
    let isConfirmed = confirm(`Sizning ismingiz ${userName}, yoshingiz ${userAge}. To'g'rimi?`);
    
    if (isConfirmed) {
        alert("Ma'lumotlar to'g'ri!");
    } else {
        alert("Ma'lumotlarni qayta kiriting");
    }
}

