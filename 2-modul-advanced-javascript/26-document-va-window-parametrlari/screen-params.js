// Screen parametrlari - Screen obyekti xususiyatlari

console.log('🖥️ Screen Parametrlari');
console.log('');

const demoContainer = document.getElementById('demo-container');
if (!demoContainer) {
    console.error('Demo container topilmadi!');
} else {
    // 1. Screen o'lchamlari
    console.log('1. Screen o'lchamlari:');
    
    const screenSizeDiv = document.createElement('div');
    screenSizeDiv.style.cssText = 'padding: 15px; background: white; border-radius: 8px; margin-bottom: 15px;';
    
    const screenSizeTitle = document.createElement('h3');
    screenSizeTitle.textContent = '📐 Screen O\'lchamlari';
    screenSizeTitle.style.cssText = 'color: #00f2fe; margin-bottom: 15px;';
    
    const screenSizeContent = document.createElement('div');
    screenSizeContent.style.cssText = 'font-family: monospace; line-height: 1.8; font-size: 0.9em;';
    
    screenSizeContent.innerHTML = `
        <p><strong>screen.width:</strong> ${screen.width}px</p>
        <p><strong>screen.height:</strong> ${screen.height}px</p>
        <p><strong>screen.availWidth:</strong> ${screen.availWidth}px</p>
        <p><strong>screen.availHeight:</strong> ${screen.availHeight}px</p>
        <p><strong>screen.availTop:</strong> ${screen.availTop}px</p>
        <p><strong>screen.availLeft:</strong> ${screen.availLeft}px</p>
    `;
    
    screenSizeDiv.appendChild(screenSizeTitle);
    screenSizeDiv.appendChild(screenSizeContent);
    
    console.log('  screen.width:', screen.width);
    console.log('  screen.height:', screen.height);
    console.log('  screen.availWidth:', screen.availWidth);
    console.log('  screen.availHeight:', screen.availHeight);
    
    // 2. Screen xususiyatlari
    console.log('2. Screen xususiyatlari:');
    
    const screenPropsDiv = document.createElement('div');
    screenPropsDiv.style.cssText = 'padding: 15px; background: white; border-radius: 8px; margin-bottom: 15px;';
    
    const screenPropsTitle = document.createElement('h3');
    screenPropsTitle.textContent = '🎨 Screen Xususiyatlari';
    screenPropsTitle.style.cssText = 'color: #00f2fe; margin-bottom: 15px;';
    
    const screenPropsContent = document.createElement('div');
    screenPropsContent.style.cssText = 'font-family: monospace; line-height: 1.8; font-size: 0.9em;';
    
    screenPropsContent.innerHTML = `
        <p><strong>screen.colorDepth:</strong> ${screen.colorDepth} bit</p>
        <p><strong>screen.pixelDepth:</strong> ${screen.pixelDepth} bit</p>
        <p><strong>screen.orientation:</strong> ${screen.orientation ? screen.orientation.type : 'N/A'}</p>
        <p><strong>screen.orientation.angle:</strong> ${screen.orientation ? screen.orientation.angle + '°' : 'N/A'}</p>
    `;
    
    screenPropsDiv.appendChild(screenPropsTitle);
    screenPropsDiv.appendChild(screenPropsContent);
    
    console.log('  screen.colorDepth:', screen.colorDepth);
    console.log('  screen.pixelDepth:', screen.pixelDepth);
    console.log('  screen.orientation:', screen.orientation);
    
    // 3. Viewport ma'lumotlari
    console.log('3. Viewport ma'lumotlari:');
    
    const viewportDiv = document.createElement('div');
    viewportDiv.style.cssText = 'padding: 15px; background: white; border-radius: 8px; margin-bottom: 15px;';
    
    const viewportTitle = document.createElement('h3');
    viewportTitle.textContent = '👁️ Viewport Ma\'lumotlari';
    viewportTitle.style.cssText = 'color: #00f2fe; margin-bottom: 15px;';
    
    const viewportContent = document.createElement('div');
    viewportContent.style.cssText = 'font-family: monospace; line-height: 1.8; font-size: 0.9em;';
    
    function updateViewport() {
        viewportContent.innerHTML = `
            <p><strong>window.innerWidth:</strong> ${window.innerWidth}px</p>
            <p><strong>window.innerHeight:</strong> ${window.innerHeight}px</p>
            <p><strong>document.documentElement.clientWidth:</strong> ${document.documentElement.clientWidth}px</p>
            <p><strong>document.documentElement.clientHeight:</strong> ${document.documentElement.clientHeight}px</p>
            <p><strong>window.scrollX:</strong> ${window.scrollX || window.pageXOffset}px</p>
            <p><strong>window.scrollY:</strong> ${window.scrollY || window.pageYOffset}px</p>
        `;
    }
    
    updateViewport();
    window.addEventListener('resize', updateViewport);
    window.addEventListener('scroll', updateViewport);
    
    viewportDiv.appendChild(viewportTitle);
    viewportDiv.appendChild(viewportContent);
    
    // 4. Responsive breakpoints
    console.log('4. Responsive breakpoints:');
    
    const responsiveDiv = document.createElement('div');
    responsiveDiv.style.cssText = 'padding: 15px; background: white; border-radius: 8px;';
    
    const responsiveTitle = document.createElement('h3');
    responsiveTitle.textContent = '📱 Responsive Breakpoints';
    responsiveTitle.style.cssText = 'color: #00f2fe; margin-bottom: 15px;';
    
    const responsiveContent = document.createElement('div');
    responsiveContent.style.cssText = 'font-family: monospace; line-height: 1.8; font-size: 0.9em;';
    
    function getDeviceType() {
        const width = window.innerWidth;
        if (width < 576) return 'Mobile';
        if (width < 768) return 'Tablet (Small)';
        if (width < 992) return 'Tablet';
        if (width < 1200) return 'Desktop';
        return 'Desktop (Large)';
    }
    
    function updateResponsive() {
        responsiveContent.innerHTML = `
            <p><strong>Joriy ekran kengligi:</strong> ${window.innerWidth}px</p>
            <p><strong>Qurilma turi:</strong> ${getDeviceType()}</p>
            <p><strong>Mobile:</strong> &lt; 576px</p>
            <p><strong>Tablet:</strong> 576px - 991px</p>
            <p><strong>Desktop:</strong> &gt;= 992px</p>
        `;
    }
    
    updateResponsive();
    window.addEventListener('resize', updateResponsive);
    
    responsiveDiv.appendChild(responsiveTitle);
    responsiveDiv.appendChild(responsiveContent);
    
    // Barcha elementlarni demo container ga qo'shish
    demoContainer.appendChild(screenSizeDiv);
    demoContainer.appendChild(screenPropsDiv);
    demoContainer.appendChild(viewportDiv);
    demoContainer.appendChild(responsiveDiv);
    
    // Cleanup funksiyasi
    window.screenParamsCleanup = function() {
        window.removeEventListener('resize', updateViewport);
        window.removeEventListener('scroll', updateViewport);
        window.removeEventListener('resize', updateResponsive);
    };
    
    console.log('✅ Screen parametrlari ko\'rsatildi!');
}

console.log('');
console.log('✅ Screen parametrlari o\'qildi!');
