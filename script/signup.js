import { app } from './firebase_auth.js';
import {
  getAuth,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const auth = getAuth(app);

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Signup successful! Redirecting to login page...");
      window.location.href = "login_page.html";
    })
    .catch((error) => {
      alert(`Signup failed: ${error.message}`);
    });
});
