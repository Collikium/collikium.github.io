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
  registerForm,
  profileInitial,
  profileImageHolder,
  registerConfirmPassword
} from './ui';

import warningSymbol from '../assets/warning-symbol.png'
import profilePictureHolder from '../assets/profile-picture-holder.png'

import {
  authErrors,
} from './authErrors.js';

// Import the functions from the SDKs
import { FirebaseError, initializeApp } from "firebase/app";
import {
  getAuth,
  AuthErrorCodes,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
import { isEmpty } from 'lodash';

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

// User Information
var userProfile

// Loader
const re = /^.*\//;
if (window.location.href == re.exec(window.location.href)[0]) {
  const re = /^.*\//;
  onAuthStateChanged(auth, user => {
    if (user && window.location.href == re.exec(window.location.href)[0]) {
      if (user != null) {
        userProfile = user
        window.location.href = 'dashboard'
      } else {
        window.location.href = 'login'
      }
    } else {
      start()
    }
  });
} else {
  $(window).on('load', function() {
    const re = /^.*\//;
      $('.loader-wrapper').fadeOut("slow")
      onAuthStateChanged(auth, user => {
        if (user != null) {
          userProfile = user
          console.log(userProfile)
        } else {
          window.location.href = 'login'
        }
      })
  })
}


const login = async (readableError) => {
  const email = loginEmail.value;
  const password = loginPassword.value;
  if (email == "" || password == "") {
    readableError("Please enter your email and password")
  } else {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      $('.loader-wrapper').fadeIn(function () {
        userProfile = auth.currentUser
        window.location.href = 'dashboard'
      })
    }
    catch (error) {
      const regex = /(?:\/)([^#]+)(?=#*)/;
      const errorMesseage = `${regex.exec(error)[0].split(")")[0].split("/")[1]}`
      const readableErrors = authErrors.filter(error => error.error == errorMesseage)
      // Passing the readble error to the next function
      readableError(readableErrors[0].messeage)
    }
  }
}


const register = async (readableError) => {
  const email = registerEmail.value;
  const password = registerPassword.value;
  const name = registerName.value;
  if (email == "" || password == "") {
    readableError("Please enter your email and password")
  } else if (registerConfirmPassword.value != password) {
    readableError("The password and the confirm password aren't match, please try again!")
  } else {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      $(".loader-wrapper").fadeIn(function () {
        updateProfile(auth.currentUser, {
          displayName: `${registerName.value}`
        }).then(() => {
          userProfile = auth.currentUser
          window.location.href = 'dashboard'
        }).catch((error) => {
          const regex = /(?:\/)([^#]+)(?=#*)/;
          const errorMesseage = `${regex.exec(error)[0].split(")")[0].split("/")[1]}`
          const readableErrors = authErrors.filter(error => error.error == errorMesseage)
          // Passing the readble error to the next function
          readableError(readableErrors[0].messeage)
        })
      })
    }
    catch (error) {
      const regex = /(?:\/)([^#]+)(?=#*)/;
      const errorMesseage = `${regex.exec(error)[0].split(")")[0].split("/")[1]}`
      const readableErrors = authErrors.filter(error => error.error == errorMesseage)
      // Passing the readble error to the next function
      readableError(readableErrors[0].messeage)
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

$('#registerName').change(function () {
  var registerNameSplited = []
  var userInitial = ""
  // Obtain User's Name and split it by white spaces.
  if (registerName.value != "") {
    registerNameSplited = registerName.value.split(" ")
    for (let object in registerNameSplited) {
      userInitial += registerNameSplited[object].split("")[0]
      $('#registerProfileImageHolder').fadeOut(function () {
        $('#profileInitial').fadeIn()
      })
    }
    profileInitial.innerHTML = userInitial

  } else {
    registerNameSplited = []
    profileInitial.innerHTML = ""
    $('#profileInitial').fadeOut(function () {
      $('#registerProfileImageHolder').fadeIn()
    })
  }
})