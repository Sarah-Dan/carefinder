// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import "firebase/compat/firestore";
// import firebase from "firebase/compat/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABmNTYcdnR3xpZAZTW0tAKbS3s-ZUQ4aA",
  authDomain: "care-finder-517a1.firebaseapp.com",
  projectId: "care-finder-517a1",
  storageBucket: "care-finder-517a1.appspot.com",
  messagingSenderId: "1050700000000",
  appId: "1:1000507394656:web:4c8bf452bb17f52020d105"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// set up google auth provider
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const auth = getAuth(app);

export {
  app,
  provider,
  auth,
  signInWithRedirect,
   
}