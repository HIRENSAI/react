import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDJ9NEm62UBkI1D65NxWtSLu5b7Iyb0mzY",
    authDomain: "fir-api-app-deaf6.firebaseapp.com",
    projectId: "fir-api-app-deaf6",
    storageBucket: "fir-api-app-deaf6.firebasestorage.app",
    messagingSenderId: "27724741058",
    appId: "1:27724741058:web:d884876b94232727ea3e5b",
    measurementId: "G-CJWSSCGP3H"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
