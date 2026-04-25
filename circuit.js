/* circuit.js - Manages the Game Loop & Safety Limits */

const DAILY_LIMIT_MS = 2 * 60 * 60 * 1000; // 2 Hours
const CIRCUIT_PLAYLIST = ['math.html', 'dots.html', 'stroop.html', 'connect.html', 'nback.html', 'avoid.html'];

// Check Safety Limit on Load
function checkSafetyLimit() {
    const today = new Date().toDateString();
    const lastPlayed = localStorage.getItem('bt_last_played_date');
    let playedTime = parseInt(localStorage.getItem('bt_played_time_ms') || '0');

    if (lastPlayed !== today) {
        // New Day, Reset Timer
        localStorage.setItem('bt_last_played_date', today);
        localStorage.setItem('bt_played_time_ms', '0');
        playedTime = 0;
    }

    if (playedTime >= DAILY_LIMIT_MS) {
        window.location.href = 'limit_reached.html'; // Redirect to lockout
        return false;
    }
    
    // Start tracking time for this session
    setInterval(() => {
        let current = parseInt(localStorage.getItem('bt_played_time_ms') || '0');
        localStorage.setItem('bt_played_time_ms', current + 1000);
        
        if (current + 1000 >= DAILY_LIMIT_MS) {
            alert("🧠 Brain Training Limit Reached. Time to rest and recover!");
            window.location.href = 'limit_reached.html';
        }
    }, 1000);
    
    return true;
}

// Logic to pick the next game randomly
function nextLevel(winStatus) {
    if(winStatus === 'win') {
        // Add Brain Power
        let bp = parseInt(localStorage.getItem('bt_coins') || '0');
        localStorage.setItem('bt_coins', bp + 50);
    }
    
    // Pick random next game
    const nextGame = CIRCUIT_PLAYLIST[Math.floor(Math.random() * CIRCUIT_PLAYLIST.length)];
    window.location.href = nextGame;
}