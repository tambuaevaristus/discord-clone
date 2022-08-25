import { initializeApp } from "firebase/app";
import {  getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDETC96yA_OrIy87-O2rinOxrMds94YtL0",
    authDomain: "discord-clone-7a622.firebaseapp.com",
    projectId: "discord-clone-7a622",
    storageBucket: "discord-clone-7a622.appspot.com",
    messagingSenderId: "997594921594",
    appId: "1:997594921594:web:3a83044b49bf7db93bd9c3"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();

  export { auth, provider};
  export default db;
