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
} from './ui'


// Import the functions from the SDKs
import { initializeApp } from "firebase/app";
import {
  getAuth,
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

function login(event) {
  event.preventDefault();
  const email = loginEmail.value;
  const password = loginPassword.value;

signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
    })
      .catch((error) => {
      showLoginError(error)
    })
}

function register(event) {
  event.preventDefault();
  const email = registerEmail;
  const password = registerPassword;

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
}

loginButton.addEventListener('click', login)