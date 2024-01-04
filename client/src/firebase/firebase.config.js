// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMY5G88pDOh-OR4sVTJXr8QwPcXkq7ivA",
  authDomain: "mern-job-portal-a3599.firebaseapp.com",
  projectId: "mern-job-portal-a3599",
  storageBucket: "mern-job-portal-a3599.appspot.com",
  messagingSenderId: "28825751398",
  appId: "1:28825751398:web:cee0410f35c1a1025a82a7",
  measurementId: "G-Y982JX93T1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;