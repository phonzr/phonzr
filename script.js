// Update time display
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    const timeElement = document.getElementById('time');
    if (timeElement) {
        timeElement.textContent = timeString;
    }
}

// Show Snapchat username
function showSnapchat() {
    // Create a temporary element to show the Snapchat info
    const snapInfo = document.createElement('div');
    snapInfo.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.9);
        color: #fffc00;
        padding: 30px;
        border-radius: 20px;
        border: 2px solid #fffc00;
        font-family: 'Rajdhani', sans-serif;
        font-size: 1.5rem;
        font-weight: 700;
        text-align: center;
        z-index: 1000;
        box-shadow: 0 0 30px rgba(255, 252, 0, 0.5);
        backdrop-filter: blur(10px);
    `;
    snapInfo.innerHTML = `
        <div style="margin-bottom: 15px; font-size: 3rem;">
            👻
        </div>
        <div style="font-size: 2rem; text-shadow: 0 0 20px rgba(255, 252, 0, 0.8);">@Phonzr</div>
        <div style="margin-top: 15px; font-size: 1rem; opacity: 0.8;">Click anywhere to close</div>
    `;
    
    document.body.appendChild(snapInfo);
    
    // Remove the popup when clicking anywhere
    setTimeout(() => {
        document.addEventListener('click', function removePopup() {
            if (document.body.contains(snapInfo)) {
                document.body.removeChild(snapInfo);
            }
            document.removeEventListener('click', removePopup);
        });
    }, 100);
}

// Initialize time display
updateTime();

// Update time every second
setInterval(updateTime, 1000);
