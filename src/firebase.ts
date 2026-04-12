import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDjP8aITu4sRcc3iLohr8EiTVu5Q4EKrMA",
  authDomain: "ahmed-hassan-e535b.firebaseapp.com",
  projectId: "ahmed-hassan-e535b",
  storageBucket: "ahmed-hassan-e535b.firebasestorage.app",
  messagingSenderId: "209249453212",
  appId: "1:209249453212:web:ed9227f8930dba03eb5959",
  measurementId: "G-MCVXB0F21P",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
