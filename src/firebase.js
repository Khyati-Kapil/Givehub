import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBSH_joex7At62myusnU6axVR_JCizkXsI",
  authDomain: "givehub-c3131.firebaseapp.com",
  projectId: "givehub-c3131",
  storageBucket: "givehub-c3131.firebasestorage.app",
  messagingSenderId: "655361655407",
  appId: "1:655361655407:web:01e888442a9d831187c39a",
  measurementId: "G-JCWVQNH599"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);