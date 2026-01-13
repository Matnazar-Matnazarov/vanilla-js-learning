// Loader loyihasi - Loading states, spinner animations, progress indicators

console.log('⏳ Loader loyihasi');
console.log('');

const demoContainer = document.getElementById('demo-container');
if (!demoContainer) {
    console.error('Demo container topilmadi!');
} else {
    // 1. Spinner loader
    console.log('1. Spinner loader:');
    
    const spinnerDiv = document.createElement('div');
    spinnerDiv.style.cssText = 'padding: 20px; background: white; border-radius: 12px; margin-bottom: 20px; text-align: center;';
    
    const spinnerTitle = document.createElement('h3');
    spinnerTitle.textContent = '🌀 Spinner Loader';
    spinnerTitle.style.cssText = 'color: #764ba2; margin-bottom: 20px;';
    
    const spinner = document.createElement('div');
    spinner.style.cssText = `
        width: 50px;
        height: 50px;
        border: 5px solid #f3f3f3;
        border-top: 5px solid #764ba2;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto;
    `;
    
    // CSS animation qo'shish
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }
        @keyframes progress {
            0% { width: 0%; }
            100% { width: 100%; }
        }
    `;
    document.head.appendChild(style);
    
    spinnerDiv.appendChild(spinnerTitle);
    spinnerDiv.appendChild(spinner);
    
    // 2. Dots loader
    console.log('2. Dots loader:');
    
    const dotsDiv = document.createElement('div');
    dotsDiv.style.cssText = 'padding: 20px; background: white; border-radius: 12px; margin-bottom: 20px; text-align: center;';
    
    const dotsTitle = document.createElement('h3');
    dotsTitle.textContent = '⚫ Dots Loader';
    dotsTitle.style.cssText = 'color: #764ba2; margin-bottom: 20px;';
    
    const dotsContainer = document.createElement('div');
    dotsContainer.style.cssText = 'display: flex; justify-content: center; gap: 10px;';
    
    for (let i = 0; i < 3; i++) {
        const dot = document.createElement('div');
        dot.style.cssText = `
            width: 15px;
            height: 15px;
            background: #764ba2;
            border-radius: 50%;
            animation: pulse 1.4s ease-in-out infinite;
            animation-delay: ${i * 0.2}s;
        `;
        dotsContainer.appendChild(dot);
    }
    
    dotsDiv.appendChild(dotsTitle);
    dotsDiv.appendChild(dotsContainer);
    
    // 3. Progress bar loader
    console.log('3. Progress bar loader:');
    
    const progressDiv = document.createElement('div');
    progressDiv.style.cssText = 'padding: 20px; background: white; border-radius: 12px; margin-bottom: 20px;';
    
    const progressTitle = document.createElement('h3');
    progressTitle.textContent = '📊 Progress Bar Loader';
    progressTitle.style.cssText = 'color: #764ba2; margin-bottom: 20px;';
    
    const progressBarContainer = document.createElement('div');
    progressBarContainer.style.cssText = 'width: 100%; height: 30px; background: #f3f3f3; border-radius: 15px; overflow: hidden; margin-bottom: 10px;';
    
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        height: 100%;
        background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
        border-radius: 15px;
        animation: progress 3s ease-in-out infinite;
    `;
    
    progressBarContainer.appendChild(progressBar);
    
    const progressText = document.createElement('div');
    progressText.style.cssText = 'text-align: center; color: #666; font-size: 0.9em;';
    progressText.textContent = 'Yuklanmoqda...';
    
    let progressValue = 0;
    const progressInterval = setInterval(() => {
        progressValue = (progressValue + 1) % 101;
        progressBar.style.width = progressValue + '%';
        progressText.textContent = `Yuklanmoqda... ${progressValue}%`;
        
        if (progressValue === 100) {
            setTimeout(() => {
                progressValue = 0;
            }, 500);
        }
    }, 30);
    
    progressDiv.appendChild(progressTitle);
    progressDiv.appendChild(progressBarContainer);
    progressDiv.appendChild(progressText);
    
    // 4. Skeleton loader
    console.log('4. Skeleton loader:');
    
    const skeletonDiv = document.createElement('div');
    skeletonDiv.style.cssText = 'padding: 20px; background: white; border-radius: 12px;';
    
    const skeletonTitle = document.createElement('h3');
    skeletonTitle.textContent = '💀 Skeleton Loader';
    skeletonTitle.style.cssText = 'color: #764ba2; margin-bottom: 20px;';
    
    const skeletonContent = document.createElement('div');
    
    // Skeleton card yaratish
    const skeletonCard = document.createElement('div');
    skeletonCard.style.cssText = 'padding: 15px; border: 1px solid #e9ecef; border-radius: 8px;';
    
    const skeletonAvatar = document.createElement('div');
    skeletonAvatar.style.cssText = `
        width: 50px;
        height: 50px;
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        border-radius: 50%;
        animation: progress 1.5s ease-in-out infinite;
        margin-bottom: 10px;
    `;
    
    const skeletonLine1 = document.createElement('div');
    skeletonLine1.style.cssText = `
        height: 12px;
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        border-radius: 6px;
        margin-bottom: 8px;
        width: 80%;
        animation: progress 1.5s ease-in-out infinite;
    `;
    
    const skeletonLine2 = document.createElement('div');
    skeletonLine2.style.cssText = `
        height: 12px;
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        border-radius: 6px;
        width: 60%;
        animation: progress 1.5s ease-in-out infinite;
        animation-delay: 0.2s;
    `;
    
    skeletonCard.appendChild(skeletonAvatar);
    skeletonCard.appendChild(skeletonLine1);
    skeletonCard.appendChild(skeletonLine2);
    
    skeletonContent.appendChild(skeletonCard);
    
    skeletonDiv.appendChild(skeletonTitle);
    skeletonDiv.appendChild(skeletonContent);
    
    // Barcha elementlarni demo container ga qo'shish
    demoContainer.appendChild(spinnerDiv);
    demoContainer.appendChild(dotsDiv);
    demoContainer.appendChild(progressDiv);
    demoContainer.appendChild(skeletonDiv);
    
    // Cleanup funksiyasi
    window.loaderProjectCleanup = function() {
        clearInterval(progressInterval);
    };
    
    console.log('✅ Spinner loader yaratildi');
    console.log('✅ Dots loader yaratildi');
    console.log('✅ Progress bar loader yaratildi');
    console.log('✅ Skeleton loader yaratildi');
}

console.log('');
console.log('✅ Loader loyihasi ko\'rsatildi!');
