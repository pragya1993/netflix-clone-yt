import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBETiSRJjYuxppDPKTBZxrKvNFJfsEKJsk",
  authDomain: "project-b72e2.firebaseapp.com",
  projectId: "project-b72e2",
  storageBucket: "project-b72e2.appspot.com",
  messagingSenderId: "328629183998",
  appId: "1:328629183998:web:89042db38ef6ea653fccaf",
  measurementId: "G-C7940LEPED"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth, db };