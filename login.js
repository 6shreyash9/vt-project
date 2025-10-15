// Form Switching Logic
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const goToLogin = document.getElementById('goToLogin');
const successMsg = document.getElementById('successMsg');
const formWrapper = document.getElementById('formWrapper');

// Show Login Form
loginBtn.addEventListener('click', () => {
  loginBtn.classList.add('active');
  signupBtn.classList.remove('active');
  loginForm.classList.add('active');
  signupForm.classList.remove('active');
  successMsg.classList.remove('active');
});

// Show Signup Form
signupBtn.addEventListener('click', () => {
  signupBtn.classList.add('active');
  loginBtn.classList.remove('active');
  signupForm.classList.add('active');
  loginForm.classList.remove('active');
  successMsg.classList.remove('active');
  
});

// Go to Login from signup form
goToLogin.addEventListener('click', (e) => {
  e.preventDefault();
  loginBtn.click();
});

// Hide form and show success message on login
loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  formWrapper.style.position = 'relative';
  loginForm.classList.remove('active');
  signupForm.classList.remove('active');
  successMsg.classList.add('active');
});

// Hide form and show success message on signup
signupForm.addEventListener('submit', function(e) {
  e.preventDefault();
  formWrapper.style.position = 'relative';
  loginForm.classList.remove('active');
  signupForm.classList.remove('active');
  successMsg.classList.add('active');
});
