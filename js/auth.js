function register() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    if (username && password) {
        localStorage.setItem('pythonUser', JSON.stringify({username, password}));
        localStorage.setItem('loggedIn', 'true');
        alert(`Xush kelibsiz, ${username}!`);
        window.location.href = 'dashboard.html';
    } else {
        alert('Maydonlarni to\\\'ldiring!');
    }
}

function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const user = JSON.parse(localStorage.getItem('pythonUser') || '{}');
    if (user.username === username && user.password === password) {
        localStorage.setItem('loggedIn', 'true');
        alert(`Xush kelibsiz qayta, ${username}!`);
        window.location.href = 'dashboard.html';
    } else {
        alert('Username yoki parol xato!');
    }
}

// Himoya: dashboard va lessons da kirishni tekshirish
if (window.location.pathname.includes('dashboard') || window.location.pathname.includes('lessons/')) {
    if (localStorage.getItem('loggedIn') !== 'true') {
        alert('Avval kirish qiling!');
        window.location.href = 'index.html';
    }
}
