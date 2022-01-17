import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAndaIW26mX60D92lAgoJh7uEz9JPWqaEo",
  authDomain: "whatsappclone-mern-2346d.firebaseapp.com",
  projectId: "whatsappclone-mern-2346d",
  storageBucket: "whatsappclone-mern-2346d.appspot.com",
  messagingSenderId: "695433268294",
  appId: "1:695433268294:web:e3c7a796f5c45ff6bace47",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider, app };
