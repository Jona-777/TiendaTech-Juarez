// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMP4M6E4F9Co-J1u3oQcXdN_0P74ModgU",
  authDomain: "tiendatech-react73690.firebaseapp.com",
  projectId: "tiendatech-react73690",
  storageBucket: "tiendatech-react73690.firebasestorage.app",
  messagingSenderId: "359428150627",
  appId: "1:359428150627:web:14616278826c88dd45ef56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)