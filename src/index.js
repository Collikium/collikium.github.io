import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBgTaO4P1RT0CVeoPbXp23DZjoHEq2r7ow",
    authDomain: "collikium.firebaseapp.com",
    projectId: "collikium",
    storageBucket: "collikium.appspot.com",
    messagingSenderId: "100840388389",
    appId: "1:100840388389:web:100df31ab1acae7e684ccc",
    measurementId: "G-NPS1BBNB43"
  });

  const auth = getAuth(firebaseApp);

  onAuthStateChanged(auth, user => {
    if (user != null) {
      console.log('logged in!'); 
    } else {
      console.log('No usser')
    }
  })
