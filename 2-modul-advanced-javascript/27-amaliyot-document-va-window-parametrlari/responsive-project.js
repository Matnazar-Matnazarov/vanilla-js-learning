const demoContainer = document.getElementById('demo-container');

const breakpointName = (width) => {
    if (width < 480) return 'xs ( < 480px )';
    if (width < 768) return 'sm ( 480px - 767px )';
    if (width < 1024) return 'md ( 768px - 1023px )';
    if (width < 1280) return 'lg ( 1024px - 1279px )';
    return 'xl ( >= 1280px )';
};

function renderResponsiveDemo() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const bp = breakpointName(width);

    if (!demoContainer) {
        console.log('demo-container topilmadi');
        return;
    }

    demoContainer.innerHTML = `
        <div style="display:grid; gap:12px; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));">
            <div style="background:white; border-radius:10px; padding:14px; border:1px solid #e9ecef;">
                <div style="font-weight:700; margin-bottom:6px;">Viewport</div>
                <div style="font-family:monospace;">${width}px x ${height}px</div>
            </div>
            <div style="background:white; border-radius:10px; padding:14px; border:1px solid #e9ecef;">
                <div style="font-weight:700; margin-bottom:6px;">Breakpoint</div>
                <div style="font-family:monospace;">${bp}</div>
            </div>
            <div style="background:white; border-radius:10px; padding:14px; border:1px solid #e9ecef;">
                <div style="font-weight:700; margin-bottom:6px;">devicePixelRatio</div>
                <div style="font-family:monospace;">${window.devicePixelRatio}</div>
            </div>
        </div>
        <div style="margin-top:14px; background:white; border-radius:10px; padding:14px; border:1px solid #e9ecef;">
            <div style="font-weight:700; margin-bottom:8px;">Layout preview</div>
            <div style="display:grid; gap:10px; grid-template-columns: ${width < 768 ? '1fr' : '1fr 1fr 1fr'};">
                <div style="height:60px; background:#4facfe22; border-radius:10px; border:1px dashed #4facfe; display:flex; align-items:center; justify-content:center; font-weight:600;">Block A</div>
                <div style="height:60px; background:#00f2fe22; border-radius:10px; border:1px dashed #00f2fe; display:flex; align-items:center; justify-content:center; font-weight:600;">Block B</div>
                <div style="height:60px; background:#4facfe22; border-radius:10px; border:1px dashed #4facfe; display:flex; align-items:center; justify-content:center; font-weight:600;">Block C</div>
            </div>
        </div>
    `;

    console.log('📱 Responsive:', { width, height, breakpoint: bp });
}

renderResponsiveDemo();
window.addEventListener('resize', renderResponsiveDemo);
