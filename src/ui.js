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
export const errorPopUp = document.getElementById('error-messeage-wrapper')
export const errorMesseage = document.getElementById('errorMesseage')

// Button variables
export const loginButton = document.getElementById('loginBtn')
export const registerButton = document.getElementById('registerButton')

// Loader
export const loader = document.getElementById('loader')

export const showErrorPopUp = (error) => {
    console.log("Hello")
    $(".error-messeage-wrapper").fadeIn("slow")
    $("#errorMesseage").html(`${error}`)
    $(window).ready(function(){
        loginForm.style.filter = "blur(20px)"
        loginForm.style.transition = "1s" 
    })
    $(".error")
}