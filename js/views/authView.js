export class AuthView {
  constructor(
    loginBtn,
    closeLoginModalBtn,
    closeSignupModalBtn,
    loginModal,
    signupModal,
    loginSignupBtn,
    backToLoginBtn
  ) {
    this.loginBtn = loginBtn;
    this.closeLoginModalBtn = closeLoginModalBtn;
    this.closeSignupModalBtn = closeSignupModalBtn;
    this.loginModal = loginModal;
    this.signupModal = signupModal;
    this.loginSignupBtn = loginSignupBtn;
    this.backToLoginBtn = backToLoginBtn;

    // Bind event listeners
    this.bindEvents();
  }

  bindEvents() {
    // Show the login modal when the login button is clicked
    this.loginBtn.addEventListener('click', () => {
      console.log('Login button clicked'); // Debugging line
      this.showModal(this.loginModal);
    });

    // Close the login modal when the close button is clicked
    this.closeLoginModalBtn.addEventListener('click', () => {
      console.log('Close login modal button clicked'); // Debugging line
      this.hideModal(this.loginModal);
    });

    // Close the signup modal when the close button is clicked
    this.closeSignupModalBtn.addEventListener('click', () => {
      console.log('Close signup modal button clicked'); // Debugging line
      this.hideModal(this.signupModal);
    });
    this.backToLoginBtn.addEventListener('click', e => {
      this.hideModal(this.signupModal);
      this.showModal(this.loginModal);
    });

    // Switch to signup modal
    this.loginSignupBtn.addEventListener('click', () => {
      console.log('Login Modal Sign Up Button Clicked');
      this.hideModal(this.loginModal); // Hide the login modal
      this.showModal(this.signupModal); // Show the signup modal
    });

    // Handle clicks outside of modals
    window.addEventListener('click', e => {
      if (e.target === this.loginModal) {
        this.hideModal(this.loginModal); // Hide the login modal if clicked outside
      } else if (e.target === this.signupModal) {
        this.hideModal(this.signupModal); // Hide the signup modal if clicked outside
      }
    });
  }

  showModal(modal) {
    modal.classList.remove('hidden'); // Show the modal
  }

  hideModal(modal) {
    modal.classList.add('hidden'); // Hide the modal
    this.clearInputs(); // Clear input fields
  }

  clearInputs() {
    const inputText = document.querySelectorAll('.auth__input');
    [...inputText].forEach(input => {
      input.value = '';
    });
  }
}
