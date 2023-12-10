// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA66XJ-FieQ_JSNzz8A0f7w2U2iQDJQad0",
  authDomain: "weekly-december-dev-2.firebaseapp.com",
  projectId: "weekly-december-dev-2",
  storageBucket: "weekly-december-dev-2.appspot.com",
  messagingSenderId: "197387240017",
  appId: "1:197387240017:web:a3903a7e451baa1f4f2e70",
  measurementId: "G-51LKG4QVQN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);