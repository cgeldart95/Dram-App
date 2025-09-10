class AuthView {
  constructor(authController, authViewElements) {
    this.authController = authController; // Reference to AuthController
    this.authViewElements = authViewElements; // Store the UI elements

    // Bind event listeners
    this.bindEvents();
  }

  bindEvents() {
    // Show the login modal when the login button is clicked
    this.authViewElements.loginBtn.addEventListener('click', () => {
      console.log('Login button clicked'); // Debugging line
      this.toggleModal(this.authViewElements.loginModal, true);
    });

    // Close the login modal when the close button is clicked
    this.authViewElements.closeLoginModalBtn.addEventListener('click', () => {
      console.log('Close login modal button clicked'); // Debugging line
      this.toggleModal(this.authViewElements.loginModal, false);
    });

    // Close the signup modal when the close button is clicked
    this.authViewElements.closeSignupModalBtn.addEventListener('click', () => {
      console.log('Close signup modal button clicked'); // Debugging line
      this.toggleModal(this.authViewElements.signupModal, false);
    });

    // Go back to the login modal from the signup modal
    this.authViewElements.backToLoginBtn.addEventListener('click', () => {
      this.toggleModal(this.authViewElements.signupModal, false);
      this.toggleModal(this.authViewElements.loginModal, true);
    });

    // Assuming this is part of your AuthView class
    const handleSignupSubmit = e => {
      // Check if the event is a click or if the Enter key is pressed
      if (e.type === 'click' || (e.type === 'keydown' && e.key === 'Enter')) {
        e.preventDefault(); // Prevent default form submission
        console.log('Submit button clicked or Enter key pressed');

        // Get the values from the input fields
        const username = this.authViewElements.signupUsername.value;
        const password = this.authViewElements.signupPassword.value;

        // Call the controller to handle the signup
        this.authController.handleSubmit(username, password);
      }
    };

    // Add click event listener to the signup submit button
    this.authViewElements.signupSubmitBtn.addEventListener(
      'click',
      handleSignupSubmit
    );

    // Add keydown event listener to the input fields
    this.authViewElements.signupUsername.addEventListener(
      'keydown',
      handleSignupSubmit
    );
    this.authViewElements.signupPassword.addEventListener(
      'keydown',
      handleSignupSubmit
    );

    // Switch to signup modal
    this.authViewElements.loginSignupBtn.addEventListener('click', () => {
      console.log('Login Modal Sign Up Button Clicked');
      this.toggleModal(this.authViewElements.loginModal, false);
      this.toggleModal(this.authViewElements.signupModal, true);
    });

    // Handle clicks outside of modals
    window.addEventListener('click', e => {
      if (e.target === this.authViewElements.loginModal) {
        this.toggleModal(this.authViewElements.loginModal, false);
      } else if (e.target === this.authViewElements.signupModal) {
        this.toggleModal(this.authViewElements.signupModal, false);
      }
    });
  }

  toggleModal(modal, show) {
    if (show) {
      modal.classList.remove('hidden'); // Show the modal
      modal.focus(); // Optionally focus on the modal for accessibility
    } else {
      modal.classList.add('hidden'); // Hide the modal
      this.clearInputs(); // Clear input fields when hiding the modal
    }
  }

  clearInputs() {
    const inputText = document.querySelectorAll('.auth__input');
    [...inputText].forEach(input => {
      input.value = ''; // Clear each input field
    });
  }
}

// Export the class correctly
export default AuthView;
