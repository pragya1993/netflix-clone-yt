import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBShiWrOfzj6aP3CDhgGHJR6vz-uG1LNkI",
  authDomain: "netflix-f4f45.firebaseapp.com",
  projectId: "netflix-f4f45",
  storageBucket: "netflix-f4f45.appspot.com",
  messagingSenderId: "460868955422",
  appId: "1:460868955422:web:031e80a2e161ad3178ad0f",
  measurementId: "G-F27YQNB5E2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth, db };