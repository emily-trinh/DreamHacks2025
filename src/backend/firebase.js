// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDptDfsr59-i4MunByNb4OP1iT9CDv7ClY",
  authDomain: "dreamhacks2025.firebaseapp.com",
  projectId: "dreamhacks2025",
  storageBucket: "dreamhacks2025.firebasestorage.app",
  messagingSenderId: "723294317372",
  appId: "1:723294317372:web:55f76626f1e72a1393cc39",
  measurementId: "G-R350TW4YQT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore();