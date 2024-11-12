// Form validation and password visibility toggle
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const togglePasswordBtn = document.getElementById('togglePassword');
const toggleThemeBtn = document.getElementById('toggle-theme');

// Show/Hide password functionality
togglePasswordBtn.addEventListener('click', function() {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
});

// Form validation
loginForm.addEventListener('submit', function(event) {
    if (emailInput.value === "" || passwordInput.value === "") {
        alert("Both fields are required!");
        event.preventDefault(); // Prevent form submission
    } else {
        alert("Login successful!");
    }
});

// Theme toggle (dark mode)
toggleThemeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (toggleThemeBtn.textContent === "Switch to Dark Mode") {
        toggleThemeBtn.textContent = "Switch to Light Mode";
    } else {
        toggleThemeBtn.textContent = "Switch to Dark Mode";
    }
});