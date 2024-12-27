const correctPassword = "kamal@8996";

function checkPassword() {
    const passwordInput = document.getElementById('passwordInput');
    const loginForm = document.getElementById('loginForm');
    const dashboard = document.getElementById('dashboard');

    if (passwordInput.value === correctPassword) {
        loginForm.style.display = 'none';
        dashboard.style.display = 'block';
    } else {
        alert('Incorrect password. Please try again.');
        passwordInput.value = '';
    }
}

document.getElementById('passwordInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
});

function updateDateTime() {
    const dateElement = document.getElementById('currentDate');
    const timeElement = document.getElementById('currentTime');
    const now = new Date();
    
    // Format date
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    dateElement.textContent = now.toLocaleDateString('en-US', options);
    
    // Format time
    timeElement.textContent = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// Call immediately to avoid initial delay
updateDateTime();

function openApp(title, url) {
    const width = 800;
    const height = 600;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;

    const loadingWindow = window.open('', '_blank', `width=${width},height=${height},left=${left},top=${top}`);
    loadingWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>${title} - Network Solutions</title>
            <style>
                body {
                    margin: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
                    font-family: Arial, sans-serif;
                    overflow: hidden;
                }
                .loader-container {
                    text-align: center;
                    background: rgba(255, 255, 255, 0.9);
                    padding: 30px 50px;
                    border-radius: 15px;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
                    animation: fadeIn 0.5s ease-out;
                }
                .loader {
                    position: relative;
                }
                .loader img {
                    width: 80px;
                    height: 80px;
                    animation: pulse 1.5s infinite;
                    filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2));
                }
                .loader::after {
                    content: '';
                    position: absolute;
                    bottom: -10px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 40px;
                    height: 4px;
                    background: rgba(0,0,0,0.1);
                    border-radius: 50%;
                    animation: shadow 1.5s infinite;
                }
                @keyframes pulse {
                    0% { transform: translateY(0) scale(1); }
                    50% { transform: translateY(-10px) scale(1.1); }
                    100% { transform: translateY(0) scale(1); }
                }
                @keyframes shadow {
                    0% { transform: translateX(-50%) scale(1); opacity: 0.4; }
                    50% { transform: translateX(-50%) scale(1.2); opacity: 0.2; }
                    100% { transform: translateX(-50%) scale(1); opacity: 0.4; }
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .loader p {
                    margin-top: 20px;
                    color: #333;
                    font-size: 16px;
                    font-weight: 500;
                }
                .loading-dots::after {
                    content: '';
                    animation: dots 1.5s infinite;
                }
                @keyframes dots {
                    0% { content: '.'; }
                    33% { content: '..'; }
                    66% { content: '...'; }
                    100% { content: '.'; }
                }
                .app-info {
                    margin-top: 15px;
                    font-size: 14px;
                    color: #666;
                }
                .company-brand {
                    font-size: 12px;
                    color: #666;
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>
            <div class="loader-container">
                <div class="loader">
                    <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/wifi-hotspot-572015.png" alt="Loading...">
                </div>
                <p>
                    <span class="loading-text">Loading ${title}</span>
                    <span class="loading-dots"></span>
                </p>
                <div class="app-info">Please wait while we connect you</div>
                <div class="company-brand">Network Solutions</div>
            </div>
        </body>
        </html>
    `);

    setTimeout(() => {
        const windowFeatures = `width=${width},height=${height},left=${left},top=${top},menubar=no,toolbar=no,location=yes,status=no`;
        const appWindow = window.open(url, '_blank', windowFeatures);
        loadingWindow.close();
    }, 2000);
} 

function logout() {
    const dashboard = document.getElementById('dashboard');
    const loginForm = document.getElementById('loginForm');
    dashboard.style.display = 'none';
    loginForm.style.display = 'block';
    document.getElementById('passwordInput').value = '';
}

function searchApps(query) {
    const cards = document.querySelectorAll('.app-card');
    query = query.toLowerCase();
    
    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function filterApps(category) {
    // Update active tab
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');

    // Filter apps (you'll need to add data-category attributes to your app cards)
    const cards = document.querySelectorAll('.app-card');
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function refreshApps() {
    location.reload();
}

function openAllComm() {
    // Add logic to open communication apps
    openApp('WhatsApp', 'https://web.whatsapp.com');
    openApp('MS Teams', 'https://teams.microsoft.com');
    openApp('Google Meet', 'https://meet.google.com');
}

function clearCache() {
    localStorage.clear();
    alert('Cache cleared successfully!');
} 