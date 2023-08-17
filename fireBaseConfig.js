import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import {
  getFirestore,
  query,
  where,
  collection,
  addDoc,
  deleteDoc,
  getDocs,
  doc,
  setDoc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDBNgGZjWW_qgqkvwqTTZ3V-I-itGspkXQ",
  authDomain: "saylani-project-a244b.firebaseapp.com",
  projectId: "saylani-project-a244b",
  storageBucket: "saylani-project-a244b.appspot.com",
  messagingSenderId: "598321579379",
  appId: "1:598321579379:web:d229c169c6717b56643106",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

const FoodDisheRef = collection(db, "dishes");
const orderRef = collection(db, "order");
const userRef = collection(db, "users");
const storage = getStorage(app);

export {
  app,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  db,
  addDoc,
  ref,
  uploadBytes,
  storage,
  getDownloadURL,
  doc,
  setDoc,
  getDoc,
  collection,
  onSnapshot,
  getDocs,
  updateDoc,
  onAuthStateChanged,
  signOut,
  FoodDisheRef,
  query,
  where,
  userRef,
  deleteDoc,
  orderRef,
};
