// firebase_auth.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDs-1Fd-gfEw50nCX7mBLnoHX9ilBRODg4",
  authDomain: "votix2.firebaseapp.com",
  projectId: "votix2",
  storageBucket: "votix2.firebasestorage.app",
  messagingSenderId: "736358030362",
  appId: "1:736358030362:web:744ce28517f3a52d4085a3",
  measurementId: "G-87BLQNM2TB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login form handler
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
});

// // Google Sign-In handler
// document.getElementById("googleSignIn").addEventListener("click", () => {
//   const provider = new GoogleAuthProvider();
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       const user = result.user;
//       alert(`Google Sign-In success! Welcome ${user.displayName}`);
//     })
//     .catch((error) => {
//       alert("Google Sign-In failed: " + error.message);
//     });
// });
