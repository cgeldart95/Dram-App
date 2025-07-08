import PageView from './views/view.js';
import { AuthView } from './views/authView.js';

document.addEventListener('DOMContentLoaded', () => {
  // authView elements
  const loginBtn = document.querySelector('#login-button');
  const closeLoginModalBtn = document.querySelector('#close-login-modal');
  const closeSignupModalBtn = document.querySelector('#close-signup-modal');
  const loginModal = document.querySelector('#login-modal');
  const signupModal = document.querySelector('#signup-modal');
  const loginSignupBtn = document.querySelector('#login-signup-button');
  const backToLoginBtn = document.querySelector('#signupBackToLoginBtn');

  // Instantiate the AuthView class
  const authView = new AuthView(
    loginBtn,
    closeLoginModalBtn,
    closeSignupModalBtn,
    loginModal,
    signupModal,
    loginSignupBtn,
    backToLoginBtn
  );
});

const pageView = new PageView();

function handleHashChange() {
  const page = window.location.hash.slice(1) || 'home-view'; // e.g. 'search-results'
  pageView.showPage(page);
}

window.addEventListener('hashchange', handleHashChange);
