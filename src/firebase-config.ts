import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDLH6RLVpvOJC1bV7oYO4ykUBujVqFj6Bk",
  authDomain: "logintemplateaps.firebaseapp.com",
  databaseURL: "https://logintemplateaps-default-rtdb.firebaseio.com",
  projectId: "logintemplateaps",
  storageBucket: "logintemplateaps.appspot.com",
  messagingSenderId: "210593804397",
  appId: "1:210593804397:web:2a782282ad4952cc1c4f64",
  measurementId: "G-VP7443DXEE"
};

const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth(app)