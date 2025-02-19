import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDc3Vp4iz-bn5rD8dims5i86snpMZEkMu4",
  authDomain: "portfolio-jony.firebaseapp.com",
  projectId: "portfolio-jony",
  storageBucket: "portfolio-jony.firebasestorage.app",
  messagingSenderId: "636694004872",
  appId: "1:636694004872:web:f6a1fc73f56701d84f0b3d",
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, "comments-app");
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };
