function applyGlobalTheme() {

    const savedMode = localStorage.getItem('bt_mode') || 'dark';
    document.documentElement.setAttribute('data-theme', savedMode);


    const savedSkin = localStorage.getItem('bt_current_skin') || 'red';
    const skinColors = {
        'red': '#ff0000', 'blue': '#0088ff', 'yellow': '#ffcc00', 
        'green': '#00ff00', 'cyan': '#00ffff', 'pink': '#ff00ff', 
        'purple': '#9900ff', 'orange': '#ff6600', 'gold': '#ffd700'
    };

    if(savedSkin === 'rainbow') {

        document.documentElement.style.animation = "rainbow-glow 5s infinite linear";
    } else {
        document.documentElement.style.animation = "none";
        document.documentElement.style.setProperty('--accent', skinColors[savedSkin] || '#ff0000');
    }
}


applyGlobalTheme();
