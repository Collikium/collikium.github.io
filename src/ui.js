import {AuthErrorCodes} from 'firebase/auth'

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
    errorMesseage.style.display = 'block';
    if (error.code == 'auth/user-not-found') {
        errorMesseage.innerHTML = `There is no account with the email and password above. Please try again.`
    }
    else if (error.code == 'auth/invalid-password') {
        errorMesseage.innerHTML = `Password is invalid. Please try again.` 
    }
    else {
        console.log(error.code)
        errorMesseage.innerHTML = `Error: ${error.code}`
    }
}