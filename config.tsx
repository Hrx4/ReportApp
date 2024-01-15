// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDsPD4B7vBrSR-zYc5OjhamnDGhI8RJvJ0",
  authDomain: "reportapp-764a7.firebaseapp.com",
  projectId: "reportapp-764a7",
  storageBucket: "reportapp-764a7.appspot.com",
  messagingSenderId: "192290656023",
  appId: "1:192290656023:web:048743cc0548a7087c7152",
  measurementId: "G-9FLZCFNVF8",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };
