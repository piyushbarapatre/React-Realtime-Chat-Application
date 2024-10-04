import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-fc070.firebaseapp.com",
  projectId: "reactchat-fc070",
  storageBucket: "reactchat-fc070.appspot.com",
  messagingSenderId: "605471688275",
  appId: "1:605471688275:web:ffc088dadd61e5645068a6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()