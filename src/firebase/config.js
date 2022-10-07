// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ44LVRBsK93kBC7hwX_W5CGDW8vmb4dE",
  authDomain: "redux-notes-crud.firebaseapp.com",
  projectId: "redux-notes-crud",
  storageBucket: "redux-notes-crud.appspot.com",
  messagingSenderId: "924413870405",
  appId: "1:924413870405:web:2949f78e10c3a491be3e2c"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp )