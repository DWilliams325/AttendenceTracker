// src/firebase.jsx
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ✅ Replace these with your actual project config values
const firebaseConfig = {
  apiKey: "AIzaSyB3nluHfPev-vXZOsyYm4FVQ7wIXyq5oDM",
  authDomain: "attendencetracker-c6321.firebaseapp.com",
  projectId: "attendencetracker-c6321",
  storageBucket: "attendencetracker-c6321.firebasestorage.app",
  messagingSenderId: "628002479248",
  appId: "1:628002479248:web:c7153752bab01e3c9e0c15",
  measurementId: "G-ZX6GC0SL4K"
};

// ✅ Initialize Firebase app and Firestore
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
