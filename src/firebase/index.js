// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVF7kmDkSrM-0dgjDafcg0hhIWDpqFO7Y",
  authDomain: "book-list-95530.firebaseapp.com",
  databaseURL: "https://book-list-95530-default-rtdb.firebaseio.com",
  projectId: "book-list-95530",
  storageBucket: "book-list-95530.appspot.com",
  messagingSenderId: "275624968960",
  appId: "1:275624968960:web:04026174050c2c511c69e5",
  measurementId: "G-JC4DQM6TJS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);