// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCvLpoNp6a4AXUH5azTSAnnmHzpWNax0g",
  authDomain: "ancom-118da.firebaseapp.com",
  projectId: "ancom-118da",
  storageBucket: "ancom-118da.firebasestorage.app",
  messagingSenderId: "60426003968",
  appId: "1:60426003968:web:831c7e5609b7acb887dae5",
  measurementId: "G-9L1QCJHPG0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);