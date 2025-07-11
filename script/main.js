
// ------------------------------side-bar ko toggle ko lagi js -------------------------

  function toggleChannelList() {
    const list = document.getElementById('channel-list');
    const icon = document.getElementById('channel-toggle-icon');

    list.classList.toggle('closed');
    icon.classList.toggle('fa-chevron-down');
    icon.classList.toggle('fa-chevron-up');
  }

  function toggleChannelList() {
    toggleList('channel-list', 'channel-toggle-icon');
  }

  function toggleList(listId, iconId) {
    const list = document.getElementById(listId);
    const icon = document.getElementById(iconId);

    list.classList.toggle('closed');
    icon.classList.toggle('fa-chevron-down');
    icon.classList.toggle('fa-chevron-up');
  }



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