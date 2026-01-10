// classList Amaliy Loyihasi
// Bu fayl classList metodlarini real-world loyihada qo'llashni ko'rsatadi

(function() {
'use strict';

console.log('📋 classList Amaliy Loyihasi\n');

// Loyiha: Theme Switcher (Tema o'zgartirish)
console.log('💡 Loyiha: Theme Switcher');
console.log('Bu loyihada classList yordamida dark/light tema o\'zgartirish amalga oshiriladi.\n');

const demoContainer = document.getElementById('demo-container');
demoContainer.innerHTML = '';

// Theme Switcher Container
const themeContainer = document.createElement('div');
themeContainer.id = 'theme-switcher';
themeContainer.style.padding = '30px';
themeContainer.style.borderRadius = '12px';
themeContainer.style.backgroundColor = '#fff';
themeContainer.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';

// Title
const title = document.createElement('h2');
title.textContent = 'Theme Switcher';
title.style.marginBottom = '20px';
title.style.color = '#333';
themeContainer.appendChild(title);

// Content area
const contentArea = document.createElement('div');
contentArea.id = 'content-area';
contentArea.style.padding = '20px';
contentArea.style.borderRadius = '8px';
contentArea.style.marginBottom = '20px';
contentArea.style.transition = 'all 0.3s ease';
contentArea.classList.add('light-theme');
themeContainer.appendChild(contentArea);

// Content text
const contentText = document.createElement('p');
contentText.textContent = 'Bu matn tema o\'zgarishini ko\'rsatadi. Tugmalarni bosing va classList metodlarining ishlashini kuzating.';
contentText.style.fontSize = '16px';
contentText.style.lineHeight = '1.6';
contentArea.appendChild(contentText);

// Buttons container
const buttonsContainer = document.createElement('div');
buttonsContainer.style.display = 'flex';
buttonsContainer.style.gap = '10px';
buttonsContainer.style.flexWrap = 'wrap';

// Light theme button
const lightBtn = document.createElement('button');
lightBtn.textContent = 'Light Theme';
lightBtn.style.padding = '10px 20px';
lightBtn.style.border = 'none';
lightBtn.style.borderRadius = '5px';
lightBtn.style.cursor = 'pointer';
lightBtn.style.backgroundColor = '#667eea';
lightBtn.style.color = 'white';
lightBtn.style.transition = 'background 0.3s';

lightBtn.addEventListener('click', () => {
    console.log('🌞 Light theme tanlandi');
    
    // classList metodlari bilan ishlash
    contentArea.classList.remove('dark-theme');
    contentArea.classList.add('light-theme');
    
    console.log('   classList:', Array.from(contentArea.classList));
    console.log('   contains("light-theme"):', contentArea.classList.contains('light-theme'));
    console.log('   contains("dark-theme"):', contentArea.classList.contains('dark-theme'));
});

// Dark theme button
const darkBtn = document.createElement('button');
darkBtn.textContent = 'Dark Theme';
darkBtn.style.padding = '10px 20px';
darkBtn.style.border = 'none';
darkBtn.style.borderRadius = '5px';
darkBtn.style.cursor = 'pointer';
darkBtn.style.backgroundColor = '#333';
darkBtn.style.color = 'white';
darkBtn.style.transition = 'background 0.3s';

darkBtn.addEventListener('click', () => {
    console.log('🌙 Dark theme tanlandi');
    
    // classList metodlari bilan ishlash
    contentArea.classList.remove('light-theme');
    contentArea.classList.add('dark-theme');
    
    console.log('   classList:', Array.from(contentArea.classList));
    console.log('   contains("light-theme"):', contentArea.classList.contains('light-theme'));
    console.log('   contains("dark-theme"):', contentArea.classList.contains('dark-theme'));
});

// Toggle button
const toggleBtn = document.createElement('button');
toggleBtn.textContent = 'Toggle Theme';
toggleBtn.style.padding = '10px 20px';
toggleBtn.style.border = 'none';
toggleBtn.style.borderRadius = '5px';
toggleBtn.style.cursor = 'pointer';
toggleBtn.style.backgroundColor = '#28a745';
toggleBtn.style.color = 'white';
toggleBtn.style.transition = 'background 0.3s';

toggleBtn.addEventListener('click', () => {
    console.log('🔄 Theme toggle qilindi');
    
    // toggle() metodi
    const wasLight = contentArea.classList.contains('light-theme');
    contentArea.classList.toggle('light-theme');
    contentArea.classList.toggle('dark-theme');
    
    const isNowDark = contentArea.classList.contains('dark-theme');
    console.log('   Oldingi holat:', wasLight ? 'Light' : 'Dark');
    console.log('   Yangi holat:', isNowDark ? 'Dark' : 'Light');
    console.log('   classList:', Array.from(contentArea.classList));
});

buttonsContainer.appendChild(lightBtn);
buttonsContainer.appendChild(darkBtn);
buttonsContainer.appendChild(toggleBtn);
themeContainer.appendChild(buttonsContainer);

// CSS styles for themes
const style = document.createElement('style');
style.textContent = `
    .light-theme {
        background-color: #f8f9fa;
        color: #333;
        border: 2px solid #e0e0e0;
    }
    .dark-theme {
        background-color: #1e1e1e;
        color: #d4d4d4;
        border: 2px solid #444;
    }
`;
document.head.appendChild(style);

demoContainer.appendChild(themeContainer);

console.log('✅ Theme Switcher yaratildi!');
console.log('Tugmalarni bosing va classList metodlarining ishlashini kuzating.\n');

// Loyiha 2: Tab Navigation
console.log('💡 Loyiha 2: Tab Navigation');
console.log('Bu loyihada classList yordamida tab navigatsiyasi amalga oshiriladi.\n');

const tabContainer = document.createElement('div');
tabContainer.style.marginTop = '30px';
tabContainer.style.padding = '30px';
tabContainer.style.borderRadius = '12px';
tabContainer.style.backgroundColor = '#fff';
tabContainer.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';

const tabTitle = document.createElement('h2');
tabTitle.textContent = 'Tab Navigation';
tabTitle.style.marginBottom = '20px';
tabTitle.style.color = '#333';
tabContainer.appendChild(tabTitle);

// Tabs
const tabsWrapper = document.createElement('div');
tabsWrapper.style.display = 'flex';
tabsWrapper.style.gap = '5px';
tabsWrapper.style.marginBottom = '20px';
tabsWrapper.style.borderBottom = '2px solid #e0e0e0';

const tabContents = [];

function createTab(id, label, content) {
    const tab = document.createElement('button');
    tab.textContent = label;
    tab.dataset.tabId = id;
    tab.style.padding = '12px 24px';
    tab.style.border = 'none';
    tab.style.borderBottom = '3px solid transparent';
    tab.style.backgroundColor = 'transparent';
    tab.style.cursor = 'pointer';
    tab.style.transition = 'all 0.3s';
    tab.style.fontSize = '16px';
    
    if (id === 'tab1') {
        tab.classList.add('active');
    }
    
    tab.addEventListener('click', () => {
        console.log(`📑 Tab "${label}" bosildi`);
        
        // Barcha tablarni deaktiv qilish
        tabsWrapper.querySelectorAll('button').forEach(t => {
            t.classList.remove('active');
        });
        
        // Barcha contentlarni yashirish
        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        
        // Tanlangan tabni aktiv qilish
        tab.classList.add('active');
        
        // Tanlangan contentni ko'rsatish
        const targetContent = document.getElementById(`content-${id}`);
        if (targetContent) {
            targetContent.classList.add('active');
        }
        
        console.log('   Active tab:', tab.textContent);
        console.log('   Tab classList:', Array.from(tab.classList));
    });
    
    tabsWrapper.appendChild(tab);
    
    const contentDiv = document.createElement('div');
    contentDiv.id = `content-${id}`;
    contentDiv.className = 'tab-content';
    contentDiv.textContent = content;
    contentDiv.style.padding = '20px';
    contentDiv.style.borderRadius = '8px';
    contentDiv.style.minHeight = '100px';
    contentDiv.style.display = id === 'tab1' ? 'block' : 'none';
    
    if (id === 'tab1') {
        contentDiv.classList.add('active');
    }
    
    tabContents.push(contentDiv);
    return { tab, content: contentDiv };
}

const tab1 = createTab('tab1', 'Home', 'Bu Home tab kontenti. classList metodlari yordamida tablar boshqariladi.');
const tab2 = createTab('tab2', 'About', 'Bu About tab kontenti. Active class toggle qilinadi.');
const tab3 = createTab('tab3', 'Contact', 'Bu Contact tab kontenti. classList.contains() tekshiriladi.');

const tabContentWrapper = document.createElement('div');
tabContents.forEach(content => {
    tabContentWrapper.appendChild(content);
});

tabContainer.appendChild(tabsWrapper);
tabContainer.appendChild(tabContentWrapper);

// Tab styles
const tabStyle = document.createElement('style');
tabStyle.textContent = `
    .tab-content {
        display: none;
        background-color: #f8f9fa;
        border: 1px solid #e0e0e0;
        transition: all 0.3s;
    }
    .tab-content.active {
        display: block;
        animation: fadeIn 0.3s;
    }
    button.active {
        color: #667eea;
        border-bottom-color: #667eea !important;
        font-weight: 600;
    }
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(tabStyle);

demoContainer.appendChild(tabContainer);

console.log('✅ Tab Navigation yaratildi!');
console.log('Tablarga bosing va classList metodlarining ishlashini kuzating.\n');

// Loyiha 3: Accordion (Akkordeon)
console.log('💡 Loyiha 3: Accordion');
console.log('Bu loyihada classList yordamida accordion komponenti yaratiladi.\n');

const accordionContainer = document.createElement('div');
accordionContainer.style.marginTop = '30px';
accordionContainer.style.padding = '30px';
accordionContainer.style.borderRadius = '12px';
accordionContainer.style.backgroundColor = '#fff';
accordionContainer.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';

const accordionTitle = document.createElement('h2');
accordionTitle.textContent = 'Accordion Component';
accordionTitle.style.marginBottom = '20px';
accordionTitle.style.color = '#333';
accordionContainer.appendChild(accordionTitle);

function createAccordionItem(id, title, content) {
    const item = document.createElement('div');
    item.className = 'accordion-item';
    item.style.marginBottom = '10px';
    item.style.border = '1px solid #e0e0e0';
    item.style.borderRadius = '8px';
    item.style.overflow = 'hidden';
    
    const header = document.createElement('div');
    header.className = 'accordion-header';
    header.textContent = title;
    header.style.padding = '15px 20px';
    header.style.backgroundColor = '#f8f9fa';
    header.style.cursor = 'pointer';
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.transition = 'background 0.3s';
    
    const icon = document.createElement('span');
    icon.textContent = '+';
    icon.style.fontSize = '20px';
    icon.style.fontWeight = 'bold';
    icon.style.transition = 'transform 0.3s';
    header.appendChild(icon);
    
    const body = document.createElement('div');
    body.className = 'accordion-body';
    body.textContent = content;
    body.style.padding = '0 20px';
    body.style.maxHeight = '0';
    body.style.overflow = 'hidden';
    body.style.transition = 'max-height 0.3s, padding 0.3s';
    
    header.addEventListener('click', () => {
        console.log(`📂 Accordion "${title}" ochildi/yopildi`);
        
        const isOpen = item.classList.contains('open');
        
        if (isOpen) {
            item.classList.remove('open');
            body.style.maxHeight = '0';
            body.style.padding = '0 20px';
            icon.textContent = '+';
            icon.style.transform = 'rotate(0deg)';
            console.log('   Accordion yopildi');
        } else {
            // Boshqa ochiq accordionlarni yopish
            accordionContainer.querySelectorAll('.accordion-item.open').forEach(openItem => {
                openItem.classList.remove('open');
                const openBody = openItem.querySelector('.accordion-body');
                const openIcon = openItem.querySelector('.accordion-header span');
                openBody.style.maxHeight = '0';
                openBody.style.padding = '0 20px';
                openIcon.textContent = '+';
                openIcon.style.transform = 'rotate(0deg)';
            });
            
            item.classList.add('open');
            body.style.maxHeight = body.scrollHeight + 'px';
            body.style.padding = '15px 20px';
            icon.textContent = '−';
            icon.style.transform = 'rotate(180deg)';
            console.log('   Accordion ochildi');
        }
        
        console.log('   classList:', Array.from(item.classList));
        console.log('   contains("open"):', item.classList.contains('open'));
    });
    
    item.appendChild(header);
    item.appendChild(body);
    
    return item;
}

const accordion1 = createAccordionItem('1', 'Accordion Item 1', 'Bu birinchi accordion item kontenti. classList.toggle() metodi yordamida ochiladi va yopiladi.');
const accordion2 = createAccordionItem('2', 'Accordion Item 2', 'Bu ikkinchi accordion item kontenti. classList.contains() metodi yordamida holat tekshiriladi.');
const accordion3 = createAccordionItem('3', 'Accordion Item 3', 'Bu uchinchi accordion item kontenti. classList.add() va classList.remove() metodlari ishlatiladi.');

accordionContainer.appendChild(accordion1);
accordionContainer.appendChild(accordion2);
accordionContainer.appendChild(accordion3);

demoContainer.appendChild(accordionContainer);

console.log('✅ Accordion Component yaratildi!');
console.log('Accordion itemlarga bosing va classList metodlarining ishlashini kuzating.\n');

// Xulosa
console.log('📊 classList metodlaridan foydalanish:');
console.log('   ✅ add() - class qo\'shish');
console.log('   ✅ remove() - class o\'chirish');
console.log('   ✅ toggle() - class toggle qilish');
console.log('   ✅ contains() - class mavjudligini tekshirish');
console.log('   ✅ replace() - classni almashtirish');
console.log('   ✅ forEach() - classlar bo\'yicha iteratsiya');
console.log('');

console.log('✅ classList Amaliy Loyihasi tugadi!\n');

})();
