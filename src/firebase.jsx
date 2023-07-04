import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGkkkqJXBH-v6J30DZWZ9UiXl-UqX24GY",
  authDomain: "clone-6f4cd.firebaseapp.com",
  projectId: "clone-6f4cd",
  storageBucket: "clone-6f4cd.appspot.com",
  messagingSenderId: "890354810070",
  appId: "1:890354810070:web:0df472d0177fde42d95d77",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export default db;
