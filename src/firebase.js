import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyANPhUr2USCBQ1N4pB9h2FyuX3T0bX5h1A",
  authDomain: "linkedin-clone-1cd2f.firebaseapp.com",
  projectId: "linkedin-clone-1cd2f",
  storageBucket: "linkedin-clone-1cd2f.appspot.com",
  messagingSenderId: "570727922517",
  appId: "1:570727922517:web:fbd6f90dd0884077164ddc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};