
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSH_joex7At62myusnU6axVR_JCizkXsI",
  authDomain: "givehub-c3131.firebaseapp.com",
  projectId: "givehub-c3131",
  storageBucket: "givehub-c3131.firebasestorage.app",
  messagingSenderId: "655361655407",
  appId: "1:655361655407:web:01e888442a9d831187c39a",
  measurementId: "G-JCWVQNH599"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);