
//yesma aru kei code nalekha haii///////





// Firebase ko laghi config and API keys 

  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);