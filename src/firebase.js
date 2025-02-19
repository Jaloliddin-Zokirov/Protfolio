import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc3Vp4iz-bn5rD8dims5i86snpMZEkMu4",
  authDomain: "portfolio-jony.firebaseapp.com",
  projectId: "portfolio-jony",
  storageBucket: "portfolio-jony.firebasestorage.app",
  messagingSenderId: "636694004872",
  appId: "1:636694004872:web:f6a1fc73f56701d84f0b3d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
