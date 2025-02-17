// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1vDPBSKyne-mDux38Nc2NlQqeNnUIV0M",
  authDomain: "email-password-outh-ff481.firebaseapp.com",
  projectId: "email-password-outh-ff481",
  storageBucket: "email-password-outh-ff481.firebasestorage.app",
  messagingSenderId: "132938956440",
  appId: "1:132938956440:web:88335e00877556df62daed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export  const auth = getAuth(app);