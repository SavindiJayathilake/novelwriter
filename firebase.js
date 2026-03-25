// Import Firebase modules (via CDN or npm for advanced)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCILunXp5O6Bug6YdnTFbdxTPjEDySxWOw",
  authDomain: "websitenovelwriter.firebaseapp.com",
  projectId: "websitenovelwriter",
  storageBucket: "websitenovelwriter.firebasestorage.app",
  messagingSenderId: "381404948174",
  appId: "1:381404948174:web:b6c1619828150054a8529f",
  measurementId: "G-1983JB6MDH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
const analytics = getAnalytics(app);