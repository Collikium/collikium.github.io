import {AuthErrorCodes} from 'firebase/auth';
import './style.css';
const loginForm = document.getElementById('loginForm')

// Input variables
export const loginEmail = document.getElementById('loginEmail')
export const loginPassword = document.getElementById('loginPassword')
export const registerName = document.getElementById('registerName')
export const registerEmail = document.getElementById('registerEmail')
export const registerPassword = document.getElementById('registerPassword')

// Error Messeage
export const loginErrorMesseage = document.getElementById('loginErrorMesseage')

// Button variables
export const loginButton = document.getElementById('loginBtn')
export const registerButton = document.getElementById('registerButton')

// Loader
export const loader = document.getElementById('loader')

export const showLoginError = (error) => {
    loginErrorMesseage.style.display = "inline-block"
    loginErrorMesseage.style.textDecoration = "underline";
    loginErrorMesseage.innerHTML = error;
    loginForm.style.transition = "ease-in 0.5s"
    loginForm.style.height = `${540 + loginErrorMesseage.offsetHeight}px`;
    loginErrorMesseage.style.color = "red";
}