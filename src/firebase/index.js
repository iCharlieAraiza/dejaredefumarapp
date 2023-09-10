// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpzsybRSrYdcvQOUn0urBD2YdLkPrBRm4",
  authDomain: "dejaredefumar.firebaseapp.com",
  projectId: "dejaredefumar",
  storageBucket: "dejaredefumar.appspot.com",
  messagingSenderId: "614645741337",
  appId: "1:614645741337:web:1669aa846ae7bc0a92f788",
  measurementId: "G-XVM0DM4XX7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
