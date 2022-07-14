// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBMhyoAxo_8Hz8CzTKCdBq1Vu62R0NcEGc",
  authDomain: "clone-6560e.firebaseapp.com",
  projectId: "clone-6560e",
  storageBucket: "clone-6560e.appspot.com",
  messagingSenderId: "149818175839",
  appId: "1:149818175839:web:a1c1b3d2f36a38cceec6ea",
  measurementId: "G-6DDQ3M1VEC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};