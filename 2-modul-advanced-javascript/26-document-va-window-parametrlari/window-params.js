// Window parametrlari - Window obyekti xususiyatlari va metodlari

console.log('🪟 Window Parametrlari');
console.log('');

const demoContainer = document.getElementById('demo-container');
if (!demoContainer) {
    console.error('Demo container topilmadi!');
} else {
    // 1. Window o'lchamlari
    console.log("1. Window o'lchamlari:");
    
    const windowSizeDiv = document.createElement('div');
    windowSizeDiv.style.cssText = "padding: 15px; background: white; border-radius: 8px; margin-bottom: 15px;";
    
    const windowSizeTitle = document.createElement('h3');
    windowSizeTitle.textContent = '📐 Window O\'lchamlari';
    windowSizeTitle.style.cssText = 'color: #00f2fe; margin-bottom: 15px;';
    
    const windowSizeContent = document.createElement('div');
    windowSizeContent.style.cssText = 'font-family: monospace; line-height: 1.8; font-size: 0.9em;';
    
    function updateWindowSize() {
        windowSizeContent.innerHTML = `
            <p><strong>window.innerWidth:</strong> ${window.innerWidth}px</p>
            <p><strong>window.innerHeight:</strong> ${window.innerHeight}px</p>
            <p><strong>window.outerWidth:</strong> ${window.outerWidth}px</p>
            <p><strong>window.outerHeight:</strong> ${window.outerHeight}px</p>
            <p><strong>window.screenX:</strong> ${window.screenX || window.screenLeft}px</p>
            <p><strong>window.screenY:</strong> ${window.screenY || window.screenTop}px</p>
        `;
    }
    
    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);
    
    windowSizeDiv.appendChild(windowSizeTitle);
    windowSizeDiv.appendChild(windowSizeContent);
    
    // 2. Window location
    console.log('2. Window location:');
    console.log('  window.location.href:', window.location.href);
    console.log('  window.location.host:', window.location.host);
    console.log('  window.location.hostname:', window.location.hostname);
    console.log('  window.location.pathname:', window.location.pathname);
    console.log('  window.location.protocol:', window.location.protocol);
    console.log('  window.location.port:', window.location.port);
    
    const windowLocationDiv = document.createElement('div');
    windowLocationDiv.style.cssText = 'padding: 15px; background: white; border-radius: 8px; margin-bottom: 15px;';
    
    const windowLocationTitle = document.createElement('h3');
    windowLocationTitle.textContent = '📍 Window Location';
    windowLocationTitle.style.cssText = 'color: #00f2fe; margin-bottom: 15px;';
    
    const windowLocationContent = document.createElement('div');
    windowLocationContent.style.cssText = 'font-family: monospace; line-height: 1.8; font-size: 0.9em;';
    
    windowLocationContent.innerHTML = `
        <p><strong>window.location.href:</strong> ${window.location.href}</p>
        <p><strong>window.location.host:</strong> ${window.location.host}</p>
        <p><strong>window.location.hostname:</strong> ${window.location.hostname}</p>
        <p><strong>window.location.pathname:</strong> ${window.location.pathname}</p>
        <p><strong>window.location.protocol:</strong> ${window.location.protocol}</p>
        <p><strong>window.location.port:</strong> ${window.location.port || 'Default'}</p>
        <p><strong>window.location.search:</strong> ${window.location.search || 'Yo\'q'}</p>
        <p><strong>window.location.hash:</strong> ${window.location.hash || 'Yo\'q'}</p>
    `;
    
    windowLocationDiv.appendChild(windowLocationTitle);
    windowLocationDiv.appendChild(windowLocationContent);
    
    // 3. Window history
    console.log('3. Window history:');
    console.log('  window.history.length:', window.history.length);
    console.log('  window.history.state:', window.history.state);
    
    const windowHistoryDiv = document.createElement('div');
    windowHistoryDiv.style.cssText = 'padding: 15px; background: white; border-radius: 8px; margin-bottom: 15px;';
    
    const windowHistoryTitle = document.createElement('h3');
    windowHistoryTitle.textContent = '📜 Window History';
    windowHistoryTitle.style.cssText = 'color: #00f2fe; margin-bottom: 15px;';
    
    const windowHistoryContent = document.createElement('div');
    windowHistoryContent.style.cssText = 'font-family: monospace; line-height: 1.8; font-size: 0.9em;';
    
    windowHistoryContent.innerHTML = `
        <p><strong>window.history.length:</strong> ${window.history.length}</p>
        <p><strong>window.history.state:</strong> ${window.history.state ? JSON.stringify(window.history.state) : 'null'}</p>
    `;
    
    windowHistoryDiv.appendChild(windowHistoryTitle);
    windowHistoryDiv.appendChild(windowHistoryContent);
    
    // 4. Window navigator
    console.log('4. Window navigator:');
    
    const windowNavigatorDiv = document.createElement('div');
    windowNavigatorDiv.style.cssText = 'padding: 15px; background: white; border-radius: 8px;';
    
    const windowNavigatorTitle = document.createElement('h3');
    windowNavigatorTitle.textContent = '🌐 Window Navigator';
    windowNavigatorTitle.style.cssText = 'color: #00f2fe; margin-bottom: 15px;';
    
    const windowNavigatorContent = document.createElement('div');
    windowNavigatorContent.style.cssText = 'font-family: monospace; line-height: 1.8; font-size: 0.9em;';
    
    windowNavigatorContent.innerHTML = `
        <p><strong>navigator.userAgent:</strong> ${navigator.userAgent.substring(0, 50)}...</p>
        <p><strong>navigator.language:</strong> ${navigator.language}</p>
        <p><strong>navigator.platform:</strong> ${navigator.platform}</p>
        <p><strong>navigator.cookieEnabled:</strong> ${navigator.cookieEnabled}</p>
        <p><strong>navigator.onLine:</strong> ${navigator.onLine}</p>
    `;
    
    windowNavigatorDiv.appendChild(windowNavigatorTitle);
    windowNavigatorDiv.appendChild(windowNavigatorContent);
    
    // Barcha elementlarni demo container ga qo'shish
    demoContainer.appendChild(windowSizeDiv);
    demoContainer.appendChild(windowLocationDiv);
    demoContainer.appendChild(windowHistoryDiv);
    demoContainer.appendChild(windowNavigatorDiv);
    
    // Cleanup funksiyasi
    window.windowParamsCleanup = function() {
        window.removeEventListener('resize', updateWindowSize);
    };
    
    console.log('✅ Window parametrlari ko\'rsatildi!');
}

console.log('');
console.log('✅ Window parametrlari o\'qildi!');
