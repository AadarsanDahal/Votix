import { app } from './firebase_auth.js';
import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const auth = getAuth(app);

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful! Redirecting...");
      window.location.href = "index.html";
    })
    .catch((error) => {
      if (error.code === 'auth/user-not-found') {
        alert("User not found. Please check your email.");
      } else if (error.code === 'auth/wrong-password') {
        alert("Incorrect password.");
      } else {
        alert("Login failed: " + error.message);
      }
    });
});
