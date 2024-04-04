// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7ISY1swTa-SPbN3p1cdeSbP2r6MzHzQc",
  authDomain: "react-dragon-news-auth-bfacf.firebaseapp.com",
  projectId: "react-dragon-news-auth-bfacf",
  storageBucket: "react-dragon-news-auth-bfacf.appspot.com",
  messagingSenderId: "596961623564",
  appId: "1:596961623564:web:658cdcc6227f787b2f7829"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;