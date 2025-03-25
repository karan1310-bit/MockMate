// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfAd6rAH9_5FxsP-U-xKgUH2onJkcbHNE",
  authDomain: "mockmate-b4c14.firebaseapp.com",
  projectId: "mockmate-b4c14",
  storageBucket: "mockmate-b4c14.firebasestorage.app",
  messagingSenderId: "12813602832",
  appId: "1:12813602832:web:ede9c62e549d1d0a9f7a95",
  measurementId: "G-6659RTDH5X"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);