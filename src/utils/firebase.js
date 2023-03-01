// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from 'firebase/storage'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANuso-rvp905O7NtKhSt-R3q09aQlIUgM",
  authDomain: "where-is-waldo-b6132.firebaseapp.com",
  projectId: "where-is-waldo-b6132",
  storageBucket: "where-is-waldo-b6132.appspot.com",
  messagingSenderId: "520267496080",
  appId: "1:520267496080:web:204fc8f23232e2228ab615",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export {db, storage}