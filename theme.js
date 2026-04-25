function applyTheme() {
    // 1. Apply Light/Dark Mode
    const savedMode = localStorage.getItem('bt_mode') || 'dark';
    document.documentElement.setAttribute('data-theme', savedMode);

    // 2. Apply Accent Color (Skin)
    const currentSkin = localStorage.getItem('bt_current_skin') || 'red';
    const colors = [
        {id:'red', hex:'#ff0000'}, {id:'blue', hex:'#0088ff'},
        {id:'yellow', hex:'#ffcc00'}, {id:'green', hex:'#00ff00'},
        {id:'cyan', hex:'#00ffff'}, {id:'pink', hex:'#ff00ff'},
        {id:'purple', hex:'#9900ff'}, {id:'orange', hex:'#ff6600'},
        {id:'gold', hex:'#ffd700'}, {id:'rainbow', hex:'rainbow'}
    ];

    const skinObj = colors.find(c => c.id === currentSkin) || colors[0];

    if (skinObj.id === 'rainbow') {
        document.body.classList.add('rainbow-active');
    } else {
        document.body.classList.remove('rainbow-active');
        document.documentElement.style.setProperty('--accent', skinObj.hex);
    }
}

// Run immediately on load
window.addEventListener('DOMContentLoaded', applyTheme);
// Also run when the window gets focus (if the user changed skin in another tab)
window.addEventListener('focus', applyTheme);