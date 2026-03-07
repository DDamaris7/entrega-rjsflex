// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG2kAuxIrS6Hks-iABEPvjkY0a9Z8Muk4",
  authDomain: "alma-hebral.firebaseapp.com",
  projectId: "alma-hebral",
  storageBucket: "alma-hebral.firebasestorage.app",
  messagingSenderId: "885101124119",
  appId: "1:885101124119:web:0d27485e129a3dbf66da52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)