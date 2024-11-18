// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth}  from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALLBRwtCggfP5UixhQPd7yOSgU92m1Jqw",
  authDomain: "netflix-drop.firebaseapp.com",
  projectId: "netflix-drop",
  storageBucket: "netflix-drop.firebasestorage.app",
  messagingSenderId: "1019615472406",
  appId: "1:1019615472406:web:fc27dc63cf020b1bfcfe37",
  measurementId: "G-5XX8RQD5RK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();    