import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";

export const register = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (err) {
    console.log(err.message);
  }
};

export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (err) {
    console.log(err.message);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err.message);
  }
};

export const authState = (callback) => {
  return onAuthStateChanged(auth, callback);
};