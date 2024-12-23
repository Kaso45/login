import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1dQ_FK5VfcBTcwWMLuU_8ZdS5d72QMhw",
  authDomain: "note-app-5e52b.firebaseapp.com",
  projectId: "note-app-5e52b",
  storageBucket: "note-app-5e52b.firebasestorage.app",
  messagingSenderId: "620357309026",
  appId: "1:620357309026:web:3d5eb407b8cbd39660f73b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);