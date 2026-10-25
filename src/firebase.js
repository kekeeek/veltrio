import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// Configuration Firebase de Veltrio V2.
const firebaseConfig = {
  apiKey: "AIzaSyDXqMkHxtBQ6wtmhSWhOxOBv9KhnJsiK0M",
  authDomain: "veltriov2.firebaseapp.com",
  projectId: "veltriov2",
  storageBucket: "veltriov2.firebasestorage.app",
  messagingSenderId: "764805912173",
  appId: "1:764805912173:web:f98fdb0c1616fbaf86d164"
};

// Une seule instance Firebase, partagée par toute l'application.
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const rtdb = getDatabase(app, "https://veltriov2-default-rtdb.europe-west1.firebasedatabase.app");

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export default app;
