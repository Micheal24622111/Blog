import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFRL2YZ_ahfDKw8Pbto-gxGjBRK51W3QI",
  authDomain: "blog-17c20.firebaseapp.com",
  databaseURL: "https://blog-17c20-default-rtdb.firebaseio.com",
  projectId: "blog-17c20",
  storageBucket: "blog-17c20.firebasestorage.app",
  messagingSenderId: "312253001120",
  appId: "1:312253001120:web:3bd7d91543ffd5a19708c5"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
