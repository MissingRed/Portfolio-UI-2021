import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyC58C2CDsZWSkmItuym2HJXhEnJntTTYPM",
  authDomain: "contact-form-25980.firebaseapp.com",
  projectId: "contact-form-25980",
  storageBucket: "contact-form-25980.appspot.com",
  messagingSenderId: "104785000170",
  appId: "1:104785000170:web:ce79e239ca7ef1ab37c993",
});

export default app;
export const db = app.firestore();
