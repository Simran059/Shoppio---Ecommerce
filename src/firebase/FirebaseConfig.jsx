// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFg7HzW221znk85p9kEcTh629wEDJmJP4",
  authDomain: "ecommerceapp-22b5b.firebaseapp.com",
  projectId: "ecommerceapp-22b5b",
  storageBucket: "ecommerceapp-22b5b.appspot.com",
  messagingSenderId: "1000551994901",
  appId: "1:1000551994901:web:df0339a20e7aa89416a01c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };