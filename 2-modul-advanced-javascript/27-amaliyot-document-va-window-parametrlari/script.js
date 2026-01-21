// Dars 27: Amaliyot. Document va Window Parametrlari - Asosiy integratsiya script

console.log('🧩 Dars 27: Amaliyot. Document va Window Parametrlari');
console.log('Bu darsda amaliy loyihalar:');
console.log('1. Responsive design');
console.log('2. Viewport management');
console.log('3. Browser detection');
console.log('');
console.log('Har bir loyiha uchun tugmalarni bosing.');

window.getBrowserInfo = function getBrowserInfo() {
    const ua = navigator.userAgent;

    const info = {
        userAgent: ua,
        language: navigator.language,
        languages: navigator.languages,
        platform: navigator.platform,
        cookieEnabled: navigator.cookieEnabled,
        online: navigator.onLine,
        viewport: {
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
            outerWidth: window.outerWidth,
            outerHeight: window.outerHeight,
            devicePixelRatio: window.devicePixelRatio
        },
        screen: {
            width: window.screen.width,
            height: window.screen.height,
            availWidth: window.screen.availWidth,
            availHeight: window.screen.availHeight,
            colorDepth: window.screen.colorDepth
        },
        features: {
            localStorage: typeof window.localStorage !== 'undefined',
            sessionStorage: typeof window.sessionStorage !== 'undefined',
            geolocation: 'geolocation' in navigator,
            serviceWorker: 'serviceWorker' in navigator,
            touch: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
            clipboard: 'clipboard' in navigator
        }
    };

    return info;
};
