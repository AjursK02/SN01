// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlg4KuulXQhDILGzZw6_V1Zj3IeytoDGs",
  authDomain: "test-project-01-e4ffc.firebaseapp.com",
  projectId: "test-project-01-e4ffc",
  storageBucket: "test-project-01-e4ffc.firebasestorage.app",
  messagingSenderId: "781434867992",
  appId: "1:781434867992:web:cf490f8286ebb73fa70e6d",
  measurementId: "G-F9CCB4Q3CE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };