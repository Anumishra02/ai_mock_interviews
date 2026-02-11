// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_dC8_AqPn8HL3dGnA4kuBVFYzAPdFVCI",
  authDomain: "prepwise-a4eb3.firebaseapp.com",
  projectId: "prepwise-a4eb3",
  storageBucket: "prepwise-a4eb3.firebasestorage.app",
  messagingSenderId: "778347369238",
  appId: "1:778347369238:web:15c5527e365e451ef17637",
  measurementId: "G-80K1F7X5Z8"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth=getAuth(app);
export const db=getFirestore(app);
