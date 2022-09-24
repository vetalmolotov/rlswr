// Test import of a JavaScript module
import { headingLoginText } from '@/js/heading-login-text'
import { headingForgotPwdText } from '@/js/heading-forgot-pwd-text'


// Test import of an asset
import {iconEmail} from '@/js/icon-email'
import {iconPassword} from '@/js/icon-password'

import '@/styles/index.scss'

// Appending to the DOM
// const logo = document.createElement('img')
// logo.src = webpackLogo
//
// const heading = document.createElement('h1')
// heading.textContent = example()

// Test a background image url in CSS
// const imageBackground = document.createElement('div')
// imageBackground.classList.add('image')

// Test a public folder asset
// const imagePublic = document.createElement('img')
// imagePublic.src = '/assets/example.png'

// const app = document.querySelector('#root')
// app.append(logo, heading, imageBackground, imagePublic)





const formEmailIcon = document.querySelector('.app-form .app-form-email .app-form-icon')
formEmailIcon.innerHTML = iconEmail()
const formPasswordEmail = document.querySelector('.app-form .app-form-password .app-form-icon')
formPasswordEmail.innerHTML = iconPassword()

const headingLogin = document.querySelector('.app-login .app-heading')
headingLogin.textContent = headingLoginText()