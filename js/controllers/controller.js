import PageView from '../views/view.js';
import AuthController from './authController.js';
import { db } from '../firebase.js'; // Correct path to firebase.js

// Now you can use the db object to interact with Firestore

document.addEventListener('DOMContentLoaded', () => {
  // Gather references to your UI elements
  const loginBtn = document.querySelector('#login-button');
  const closeLoginModalBtn = document.querySelector('#close-login-modal');
  const closeSignupModalBtn = document.querySelector('#close-signup-modal');
  const loginModal = document.querySelector('#login-modal');
  const signupModal = document.querySelector('#signup-modal');
  const loginSignupBtn = document.querySelector('#login-signup-button');
  const backToLoginBtn = document.querySelector('#signupBackToLoginBtn');
  const signupUsername = document.querySelector('#signup-username');
  const signupPassword = document.querySelector('#signup-password');
  const loginSubmitBtn = document.querySelector('#login-submit');
  const signupSubmitBtn = document.querySelector('#signup-submit');

  // Object to hold the UI elements
  const authViewElements = {
    loginBtn,
    closeLoginModalBtn,
    closeSignupModalBtn,
    loginModal,
    signupModal,
    loginSignupBtn,
    backToLoginBtn,
    signupUsername,
    signupPassword,
    loginSubmitBtn,
    signupSubmitBtn,
  };

  // Instantiates the AuthController class, passing the UI elements
  const authController = new AuthController(authViewElements);
});

const pageView = new PageView();

function handleHashChange() {
  const page = window.location.hash.slice(1) || 'home-view'; // e.g. 'search-results'
  pageView.showPage(page);
}

window.addEventListener('hashchange', handleHashChange);
