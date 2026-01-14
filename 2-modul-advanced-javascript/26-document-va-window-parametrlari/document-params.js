// Document parametrlari - Document obyekti xususiyatlari va metodlari

console.log('📄 Document Parametrlari');
console.log('');

const demoContainer = document.getElementById('demo-container');
if (!demoContainer) {
    console.error('Demo container topilmadi!');
} else {
    // 1. Document asosiy elementlari
    console.log('1. Document asosiy elementlari:');
    
    const docElementDiv = document.createElement('div');
    docElementDiv.style.cssText = 'padding: 15px; background: white; border-radius: 8px; margin-bottom: 15px;';
    
    const docElementTitle = document.createElement('h3');
    docElementTitle.textContent = '📄 Document Elementlari';
    docElementTitle.style.cssText = 'color: #00f2fe; margin-bottom: 15px;';
    
    const docElementContent = document.createElement('div');
    docElementContent.style.cssText = 'font-family: monospace; line-height: 1.8; font-size: 0.9em;';
    
    docElementContent.innerHTML = `
        <p><strong>document.documentElement:</strong> ${document.documentElement.tagName}</p>
        <p><strong>document.body:</strong> ${document.body ? document.body.tagName : 'null'}</p>
        <p><strong>document.head:</strong> ${document.head ? document.head.tagName : 'null'}</p>
        <p><strong>document.title:</strong> ${document.title}</p>
        <p><strong>document.URL:</strong> ${document.URL}</p>
        <p><strong>document.domain:</strong> ${document.domain}</p>
        <p><strong>document.readyState:</strong> ${document.readyState}</p>
        <p><strong>document.charset:</strong> ${document.characterSet || document.charset}</p>
    `;
    
    docElementDiv.appendChild(docElementTitle);
    docElementDiv.appendChild(docElementContent);
    
    // 2. Document ma'lumotlari
    console.log('2. Document ma'lumotlari:');
    console.log('  document.documentElement:', document.documentElement);
    console.log('  document.body:', document.body);
    console.log('  document.head:', document.head);
    console.log('  document.title:', document.title);
    console.log('  document.URL:', document.URL);
    console.log('  document.domain:', document.domain);
    console.log('  document.readyState:', document.readyState);
    
    // 3. Document metodlari
    console.log('3. Document metodlari:');
    
    const docMethodsDiv = document.createElement('div');
    docMethodsDiv.style.cssText = 'padding: 15px; background: white; border-radius: 8px; margin-bottom: 15px;';
    
    const docMethodsTitle = document.createElement('h3');
    docMethodsTitle.textContent = '🔧 Document Metodlari';
    docMethodsTitle.style.cssText = 'color: #00f2fe; margin-bottom: 15px;';
    
    const docMethodsContent = document.createElement('div');
    docMethodsContent.style.cssText = 'font-family: monospace; line-height: 1.8; font-size: 0.9em;';
    
    const allElements = document.querySelectorAll('*');
    const allElementsCount = allElements.length;
    
    const scripts = document.querySelectorAll('script');
    const links = document.querySelectorAll('link');
    const styles = document.querySelectorAll('style');
    
    docMethodsContent.innerHTML = `
        <p><strong>Barcha elementlar soni:</strong> ${allElementsCount}</p>
        <p><strong>Script elementlar soni:</strong> ${scripts.length}</p>
        <p><strong>Link elementlar soni:</strong> ${links.length}</p>
        <p><strong>Style elementlar soni:</strong> ${styles.length}</p>
        <p><strong>document.querySelectorAll('*'):</strong> ${allElementsCount} ta element</p>
    `;
    
    docMethodsDiv.appendChild(docMethodsTitle);
    docMethodsDiv.appendChild(docMethodsContent);
    
    // 4. Document xususiyatlari
    console.log('4. Document xususiyatlari:');
    
    const docPropsDiv = document.createElement('div');
    docPropsDiv.style.cssText = 'padding: 15px; background: white; border-radius: 8px;';
    
    const docPropsTitle = document.createElement('h3');
    docPropsTitle.textContent = '📋 Document Xususiyatlari';
    docPropsTitle.style.cssText = 'color: #00f2fe; margin-bottom: 15px;';
    
    const docPropsContent = document.createElement('div');
    docPropsContent.style.cssText = 'font-family: monospace; line-height: 1.8; font-size: 0.9em;';
    
    const docLocation = document.location;
    const docReferrer = document.referrer;
    const docLastModified = document.lastModified;
    
    docPropsContent.innerHTML = `
        <p><strong>document.location.href:</strong> ${docLocation.href}</p>
        <p><strong>document.location.host:</strong> ${docLocation.host}</p>
        <p><strong>document.location.hostname:</strong> ${docLocation.hostname}</p>
        <p><strong>document.location.pathname:</strong> ${docLocation.pathname}</p>
        <p><strong>document.location.protocol:</strong> ${docLocation.protocol}</p>
        <p><strong>document.referrer:</strong> ${docReferrer || 'Yo\'q'}</p>
        <p><strong>document.lastModified:</strong> ${docLastModified}</p>
    `;
    
    docPropsDiv.appendChild(docPropsTitle);
    docPropsDiv.appendChild(docPropsContent);
    
    // Barcha elementlarni demo container ga qo'shish
    demoContainer.appendChild(docElementDiv);
    demoContainer.appendChild(docMethodsDiv);
    demoContainer.appendChild(docPropsDiv);
    
    console.log('✅ Document parametrlari ko\'rsatildi!');
}

console.log('');
console.log('✅ Document parametrlari o\'qildi!');
