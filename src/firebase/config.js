// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLdWLFtH83GVNbNXsvjZiYa80k1E-T5_8",
  authDomain: "revisamais-f85e8.firebaseapp.com",
  projectId: "revisamais-f85e8",
  storageBucket: "revisamais-f85e8.appspot.com",
  messagingSenderId: "93010836841",
  appId: "1:93010836841:web:2b551fbb883a0aff22d1f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };