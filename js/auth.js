function register() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    if (username && password) {
        localStorage.setItem('user', JSON.stringify({username, password}));
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'dashboard.html';
    } else {
        alert('Maydonlarni to\'ldiring!');
    }
}

function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user.username === username && user.password === password) {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'dashboard.html';
    } else {
        alert('Noto\'g\'ri!');
    }
}
