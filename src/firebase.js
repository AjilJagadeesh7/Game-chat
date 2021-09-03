import firebase from "firebase/app";
import "firebase/auth";

export const auth  = firebase.initializeApp({
    apiKey: "AIzaSyBxnYOMp_eyxSobHlscMjOP7zGeA_NVa5Y",
    authDomain: "g-chat-69a1b.firebaseapp.com",
    projectId: "g-chat-69a1b",
    storageBucket: "g-chat-69a1b.appspot.com",
    messagingSenderId: "486372692988",
    appId: "1:486372692988:web:10c39aed9e9bfb91eb9879"
  }).auth();