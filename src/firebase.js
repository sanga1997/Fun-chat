import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCexeUNUMxM65oYGtY-EQraGWW4B_kVdIk",
  authDomain: "fun-chat-4d8c2.firebaseapp.com",
  projectId: "fun-chat-4d8c2",
  storageBucket: "fun-chat-4d8c2.appspot.com",
  messagingSenderId: "755137109307",
  appId: "1:755137109307:web:25189c2b1f2541feff2b1e"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();