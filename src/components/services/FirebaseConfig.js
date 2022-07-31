import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import Item from "../JSX/Item";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-5q5yqiSGWwvFiehg0pABVe5onukrv_s",
  authDomain: "caseup-6a980.firebaseapp.com",
  projectId: "caseup-6a980",
  storageBucket: "caseup-6a980.appspot.com",
  messagingSenderId: "870777551006",
  appId: "1:870777551006:web:eb91494634032af80aa38f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)


export default db;