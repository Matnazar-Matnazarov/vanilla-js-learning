const demoContainer = document.getElementById('demo-container');

function renderViewportProject() {
    if (!demoContainer) {
        console.log('demo-container topilmadi');
        return;
    }

    demoContainer.innerHTML = `
        <div style="display:grid; gap:12px; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));">
            <div style="background:white; border-radius:10px; padding:14px; border:1px solid #e9ecef;">
                <div style="font-weight:700; margin-bottom:6px;">Scroll position</div>
                <div id="scroll-info" style="font-family:monospace;"></div>
                <div style="margin-top:12px; display:flex; gap:10px;">
                    <button id="scroll-top" style="width:auto; padding:10px 12px;">Top</button>
                    <button id="scroll-bottom" style="width:auto; padding:10px 12px;">Bottom</button>
                </div>
            </div>

            <div style="background:white; border-radius:10px; padding:14px; border:1px solid #e9ecef;">
                <div style="font-weight:700; margin-bottom:6px;">Element positioning</div>
                <div style="font-size:14px; color:#666; margin-bottom:10px;">Pastdagi blok pozitsiyasi viewportga nisbatan hisoblanadi:</div>
                <div id="target" style="height:80px; border-radius:10px; background:#00f2fe22; border:1px dashed #00f2fe; display:flex; align-items:center; justify-content:center; font-weight:700;">Target</div>
                <div id="target-info" style="margin-top:10px; font-family:monospace;"></div>
            </div>
        </div>

        <div style="margin-top:14px; background:white; border-radius:10px; padding:14px; border:1px solid #e9ecef;">
            <div style="font-weight:700; margin-bottom:8px;">Resize kuzatuv</div>
            <div id="resize-info" style="font-family:monospace;"></div>
        </div>

        <div style="height:900px;"></div>
    `;

    const scrollInfo = document.getElementById('scroll-info');
    const targetInfo = document.getElementById('target-info');
    const resizeInfo = document.getElementById('resize-info');
    const target = document.getElementById('target');

    function updateScrollInfo() {
        const x = Math.round(window.scrollX);
        const y = Math.round(window.scrollY);
        const maxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

        if (scrollInfo) scrollInfo.textContent = `x=${x}, y=${y}, maxY=${Math.round(maxY)}`;
    }

    function updateTargetInfo() {
        if (!target || !targetInfo) return;

        const rect = target.getBoundingClientRect();
        targetInfo.textContent = `top=${Math.round(rect.top)}, left=${Math.round(rect.left)}, width=${Math.round(rect.width)}, height=${Math.round(rect.height)}`;
    }

    function updateResizeInfo() {
        if (!resizeInfo) return;
        resizeInfo.textContent = `innerWidth=${window.innerWidth}, innerHeight=${window.innerHeight}`;
    }

    function updateAll() {
        updateScrollInfo();
        updateTargetInfo();
        updateResizeInfo();
    }

    const scrollTopBtn = document.getElementById('scroll-top');
    const scrollBottomBtn = document.getElementById('scroll-bottom');

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    if (scrollBottomBtn) {
        scrollBottomBtn.addEventListener('click', () => {
            window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
        });
    }

    window.addEventListener('scroll', updateAll, { passive: true });
    window.addEventListener('resize', updateAll);

    updateAll();

    console.log('🧭 Viewport project ishga tushdi');
}

renderViewportProject();
