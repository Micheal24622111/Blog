import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFRL2YZ_ahfDKw8Pbto-gxGjBRK51W3QI",
  authDomain: "blog-17c20.firebaseapp.com",
  projectId: "blog-17c20",
  storageBucket: "blog-17c20.appspot.com",
  messagingSenderId: "312253001120",
  appId: "1:312253001120:web:3bd7d91543ffd5a19708c5"

  
  
}


// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();