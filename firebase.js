// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcPw0J4ik3C6orCwDug1JWjnRfIYJw_9Y",
  authDomain: "aconews-9fc78.firebaseapp.com",
  projectId: "aconews-9fc78",
  storageBucket: "aconews-9fc78.appspot.com",
  messagingSenderId: "468857793274",
  appId: "1:468857793274:web:4c9e83eaa257c42c46f743",
  measurementId: "G-PFCDQS39YF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);