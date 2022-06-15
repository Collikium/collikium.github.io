import {AuthErrorCodes} from 'firebase/auth'

export const loginForm = document.getElementById('loginForm')

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

export const showLoginError = (error) => {
    loginErrorMesseage.style.display = 'block';
    loginErrorMesseage.style.color = "red";
    loginErrorMesseage.style.textDecoration = "underline";
    loginErrorMesseage.innerHTML = error;
    loginForm.style.height = `${loginForm.offsetHeight + loginErrorMesseage.offsetHeight}px`
}