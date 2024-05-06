import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbJbT3C1x4pn7MN2_wP7uJizv0EXWbYbM",
  authDomain: "react-27ad9.firebaseapp.com",
  projectId: "react-27ad9",
  storageBucket: "react-27ad9.appspot.com",
  messagingSenderId: "585797825063",
  appId: "1:585797825063:web:ce5fa7b9103c27dc71d402",
  measurementId: "G-RMCSFZYSRQ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };