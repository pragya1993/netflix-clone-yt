import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAqWtYDZ5y_je8zbbgfFIfKoebux2SNpzw",
    authDomain: "netflix-clone-yt-61e1a.firebaseapp.com",
    projectId: "netflix-clone-yt-61e1a",
    storageBucket: "netflix-clone-yt-61e1a.appspot.com",
    messagingSenderId: "821565195497",
    appId: "1:821565195497:web:1305e0221d001a1d51dc78"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth, db };