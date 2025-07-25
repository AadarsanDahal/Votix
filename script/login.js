
//   alert("login JS is linked!");


 

//   import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  
  
  function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 100;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 3 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// Password toggle functionality
const passwordToggle = document.getElementById('passwordToggle');
const passwordInput = document.getElementById('password');

passwordToggle.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    passwordToggle.textContent = type === 'password' ? '👁' : '🙈';
});

// Form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // alert(`Email: ${email}\nPassword: ${password}`);
    
 


    // Simulate login process
    const signInBtn = document.querySelector('.sign-in-btn');
    signInBtn.textContent = 'Signing in...';
    signInBtn.disabled = true;
    
    setTimeout(() => {
       
        signInBtn.textContent = 'Sign in';
        signInBtn.disabled = false;
    }, 1500);



});

// Google sign in
// document.getElementById('googleSignIn').addEventListener('click', function() {
//     alert('Google Sign-In would be implemented here');
// });

// // Sign up link
// document.getElementById('signupLink').addEventListener('click', function(e) {
//     e.preventDefault();
//     alert('Sign up page would open here');
// });

// Create floating particles
function createParticles() {
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `rgba(102, 126, 234, ${Math.random() * 0.5 + 0.2})`;
        particle.style.animationDelay = Math.random() * 6 + 's';
        document.body.appendChild(particle);
    }
}

// Initialize everything
createStars();
createParticles();

// Add input focus effects
const inputs = document.querySelectorAll('.form-input');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});