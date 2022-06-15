import './style.css';
import {
  loginEmail,
  loginPassword,
  loginButton,
  registerName,
  registerEmail,
  registerPassword,
  registerButton,
  errorMesseage,
  showLoginError,
  loginErrorMesseage,
} from './ui'

import {
  authErrors,
} from './authErrors'


// Import the functions from the SDKs
import { FirebaseError, initializeApp } from "firebase/app";
import {
  getAuth,
  AuthErrorCodes,
  connectAuthEmulator,
  signInWithEmailAndPassword,
} from 'firebase/auth'

// Firebase's configuration
const firebaseApp = {
  apiKey: "AIzaSyBgTaO4P1RT0CVeoPbXp23DZjoHEq2r7ow",
  authDomain: "collikium.firebaseapp.com",
  databaseURL: "https://collikium-default-rtdb.firebaseio.com",
  projectId: "collikium",
  storageBucket: "collikium.appspot.com",
  messagingSenderId: "100840388389",
  appId: "1:100840388389:web:100df31ab1acae7e684ccc",
  measurementId: "G-NPS1BBNB43"
};

const app = initializeApp(firebaseApp)

// Initialize auth
const auth = getAuth(app);

const login = async (event) => {
  event.preventDefault();
  const email = loginEmail.value;
  const password = loginPassword.value;
  if (email == "" || password == ""){
    console.log("Please enter your email and password")
  } else {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential.user);
    }
    catch(error) {
      const regex = /(?<=\().*?(?=\))/;
      const errorMesseage = regex.exec(error)[0]
      
    }
  }
}


loginButton.addEventListener('click', login)