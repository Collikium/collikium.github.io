// Import the functions from the SDKs 
import { initializeApp } from "firebase/app";

// The Firebase's configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgTaO4P1RT0CVeoPbXp23DZjoHEq2r7ow",
  authDomain: "collikium.firebaseapp.com",
  projectId: "collikium",
  storageBucket: "collikium.appspot.com",
  messagingSenderId: "100840388389",
  appId: "1:100840388389:web:100df31ab1acae7e684ccc",
  measurementId: "G-NPS1BBNB43"
};

// Initialize Firebase
initializeApp(firebaseConfig)


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Generate the entry code
async function codeGenerator(codeLength, time) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;

    for (let i = 0; i < time; i++) {
        console.log(`New code will be generated in ${time-i} `);
        await sleep(i * 1000);
    }
    for ( var i = 0; i < codeLength; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
   charactersLength));
     }
    console.log(result)
}

codeGenerator(6, 5)
