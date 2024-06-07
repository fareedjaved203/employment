// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRw6vHccsGeLfTaogAKThOzr9jmQ4zbpo",
  authDomain: "arabic-talent-acquisition-app.firebaseapp.com",
  projectId: "arabic-talent-acquisition-app",
  storageBucket: "arabic-talent-acquisition-app.appspot.com",
  messagingSenderId: "912103494460",
  appId: "1:912103494460:web:e73f0fdd4175c8ced3c439",
  measurementId: "G-0X2SY6QLTW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
