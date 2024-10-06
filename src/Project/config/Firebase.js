import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHIhve-GDRf_KleXmMR29H1tefMkGoPVk",
  authDomain: "react-maiky.firebaseapp.com",
  projectId: "react-maiky",
  storageBucket: "react-maiky.appspot.com",
  messagingSenderId: "242076858969",
  appId: "1:242076858969:web:ca4f14b7bf12252b200f48",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase Auth and Firestore
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// Set Firebase Auth to persist only for the session (log out when window is closed)
setPersistence(auth, browserSessionPersistence)
  .then(() => {
    console.log("Session persistence set successfully.");
  })
  .catch((error) => {
    console.error("Error setting session persistence:", error);
  });
