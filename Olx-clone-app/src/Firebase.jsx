// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth , GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfbwJwkbJjbn-kTO_pR7bIYpJScqazRbE",
  authDomain: "olx-clone-app-86028.firebaseapp.com",
  projectId: "olx-clone-app-86028",
  storageBucket: "olx-clone-app-86028.appspot.com",
  messagingSenderId: "968040460960",
  appId: "1:968040460960:web:1e88d49ded9b686cc60fc5",
  measurementId: "G-ZBZZ4XB3ZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export { app , auth , db , GoogleAuthProvider , analytics , storage}
