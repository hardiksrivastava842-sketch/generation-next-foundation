import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNPg6fkmmbFj1XKSAP8TcD5TpYt6i-lj0",
  authDomain: "generation-next-foundation.firebaseapp.com",
  projectId: "generation-next-foundation",
  storageBucket: "generation-next-foundation.firebasestorage.app",
  messagingSenderId: "908294905766",
  appId: "1:908294905766:web:4fb8a755e457e26a42b967",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);