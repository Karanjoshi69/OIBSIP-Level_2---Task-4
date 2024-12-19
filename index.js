
let users = {};

function showLogin() {
    document.getElementById('register-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
}

function showRegister() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('register-form').classList.remove('hidden');
}

function registerUser() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    if (!username || !password) {
        alert('Please fill in all fields.');
        return;
    }

    if (users[username]) {
        alert('Username already exists.');
        return;
    }

    users[username] = password;
    alert('Registration successful! Please login.');
    showLogin();
}

function loginUser() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (users[username] && users[username] === password) {
        document.getElementById('auth-container').classList.add('hidden');
        document.getElementById('secured-page').classList.remove('hidden');
    } else {
        alert('Invalid username or password.');
    }
}

function logout() {
    document.getElementById('secured-page').classList.add('hidden');
    document.getElementById('auth-container').classList.remove('hidden');
    showLogin();
}
