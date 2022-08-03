// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, getDocs, getFirestore,} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxoclIZReQDpOqnP55nxUTAKqTkCZ80Rk",
  authDomain: "social-media-84821.firebaseapp.com",
  projectId: "social-media-84821",
  storageBucket: "social-media-84821.appspot.com",
  messagingSenderId: "681633514877",
  appId: "1:681633514877:web:2249828a7f778ec3c67814"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider(auth)

export {db, auth, provider}
