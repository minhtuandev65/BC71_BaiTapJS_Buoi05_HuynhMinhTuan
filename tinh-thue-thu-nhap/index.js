document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.cd-user-modal');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const switchers = document.querySelectorAll('.cd-switcher a');
    const welcomeMessage = document.querySelector('.welcome-message');
    const userNameSpan = document.getElementById('user-name');

    // Show the appropriate form when clicking on "Đăng nhập" or "Đăng ký"
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            modal.style.display = 'block';
            if (link.classList.contains('cd-signin')) {
                showLoginForm();
            } else {
                showSignupForm();
            }
        });
    });

    // Switch between login and signup forms
    switchers.forEach(switcher => {
        switcher.addEventListener('click', event => {
            event.preventDefault();
            if (switcher.textContent === 'Đăng nhập') {
                showLoginForm();
            } else {
                showSignupForm();
            }
        });
    });

    // Handle signup form submission
    signupForm.addEventListener('submit', event => {
        event.preventDefault();
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        localStorage.setItem('user', JSON.stringify({ username, email, password }));
        alert('Đăng ký thành công!');
        modal.style.display = 'none';
        showWelcomeMessage(username);
    });

    // Handle login form submission
    loginForm.addEventListener('submit', event => {
        event.preventDefault();
        const email = document.getElementById('signin-email').value;
        const password = document.getElementById('signin-password').value;
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.email === email && user.password === password) {
            alert('Đăng nhập thành công!');
            modal.style.display = 'none';
            showWelcomeMessage(user.username);
        } else {
            alert('Email hoặc mật khẩu không đúng!');
        }
    });

    function showLoginForm() {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    }

    function showSignupForm() {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }

    function showWelcomeMessage(username) {
        welcomeMessage.style.display = 'block';
        userNameSpan.textContent = username;
    }
});
