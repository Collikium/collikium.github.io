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
  ErrorMesseage,
  loader,
  showErrorPopUp,
  loginForm,
  registerForm
} from './ui'

import {
  authErrors,
} from './authErrors';

// Import the functions from the SDKs
import { FirebaseError, initializeApp } from "firebase/app";
import {
  getAuth,
  AuthErrorCodes,
  connectAuthEmulator,
  signInWithEmailAndPassword,
} from 'firebase/auth';

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

// Loader
$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");
});

// Hiding the error Pop Up
$(".error-messeage-wrapper").hide();

// Page the user on
const page = ""

const login = async (readableError, page) => {
  const email = loginEmail.value;
  const password = loginPassword.value;
  if (email == "" || password == "") {
    readableError("Please enter your email and password", "login")
    page = "login"
  } else {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential.user);
    }
    catch (error) {
      const regex = /(?:\/)([^#]+)(?=#|$)/;
      const errorMesseage = `${regex.exec(error)[0].split("/")[1]}`
      const readableErrors = authErrors.filter(error => error.error == errorMesseage)
      // Passing the readble error to the next function
      readableError(readableErrors[0].messeage, "login")
      page = "login"
    }
  }
}

const register = async (readableError, page) => {
  const email = registerEmail.value;
  const password = registerPassword.value;
  if (email == "" || password == "") {
    readableError("Please enter your email and password", "register")
    page = "register"
  } else {
    try {

    }
    catch (error) {

    }
  }
}

// Login Submit Button
$(document).ready(function () {
  $("#loginBtn").click(function (event) {
    event.preventDefault()
    login(showErrorPopUp);
  });
});

// Register Submit Button
$(document).ready(function () {
  $("#registerBtn").click(function (event) {
    event.preventDefault()
    register(showErrorPopUp)
  });
});

// Error Pop Up Dimiss Button
$(document).ready(function () {
  $("#error-dimiss-btn").click(function (event) {
    event.preventDefault()
    $(".error-messeage-wrapper").fadeOut("slow")
    $(window).ready(function () {
      loginForm.style.filter = "blur(0px)"
      loginForm.style.transition = "1s"
    })
    $(window).ready(function () {
      registerForm.style.filter = "blur(0px)"
      registerForm.style.transition = "1s"
    })

  });
});