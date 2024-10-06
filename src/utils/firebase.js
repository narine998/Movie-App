// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqzjP1iFKdDUwapa0sDNQgooU-sTkN-zs",
  authDomain: "netflixgpt-24bdc.firebaseapp.com",
  projectId: "netflixgpt-24bdc",
  storageBucket: "netflixgpt-24bdc.appspot.com",
  messagingSenderId: "1069778050721",
  appId: "1:1069778050721:web:0e7c910432433a0e7a1ae0",
  measurementId: "G-LKFTNMPPMD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
