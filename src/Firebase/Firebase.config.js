// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvXxs8xBVXaJLXMrr2g37J0NU_ceoRms0",
    authDomain: "ema-jons.firebaseapp.com",
    projectId: "ema-jons",
    storageBucket: "ema-jons.appspot.com",
    messagingSenderId: "187072027602",
    appId: "1:187072027602:web:01f0457d456fc95285c60b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;