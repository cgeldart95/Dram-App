import AuthView from '../views/authView';
import AuthModel from '../authModel';
import { getFirestore, collection, addDoc } from 'firebase/firestore'; // Import Firestore

class AuthController {
  constructor(authViewElements) {
    // Store the UI elements directly
    this.authViewElements = authViewElements;

    // Create an instance of Firestore
    const db = getFirestore(); // Initialize Firestore

    // Create an instance of AuthView, passing the current instance of AuthController
    this.authView = new AuthView(this, this.authViewElements);
    this.authModel = new AuthModel(db); // Create an instance of AuthModel
  }

  handleSubmit(username, password) {
    const usernameError = this.validUsername(username);
    const passwordError = this.validPassword(password);

    if (usernameError !== true) {
      this.showError(usernameError);
      return;
    }

    if (passwordError !== true) {
      this.showError(passwordError);
      return;
    }

    // If both validations pass, handle signup data
    this.handleSignupData(username, password);
  }

  validUsername(username) {
    const valid = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;
    if (!valid.test(username)) {
      return 'Username must start with a letter and be 3-16 characters long, containing only letters, numbers, and underscores.';
    }
    return true; // Return true if valid
  }

  validPassword(password) {
    const valid =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (!valid.test(password)) {
      return 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.';
    }
    return true; // Return true if valid
  }

  showError(message) {
    console.log(message); // Log the error message
    // Display the error message in the UI instead of using alert
    const errorElement = document.querySelector('#error-message'); // Assuming you have an element for displaying errors
    if (errorElement) {
      errorElement.textContent = message;
    }
  }

  async handleSignupData(username, password) {
    // Test to see if input data has been retrieved
    console.log('Handling signup data for:', username, password);

    try {
      console.log('Sending credentials over to authModel');
      await this.authModel.authenticateCredentials(username, password); // Assuming signup is an async method
      // Optionally, redirect or update the UI after successful signup
    } catch (error) {
      console.error('Signup failed:', error);
      this.showError('Signup failed. Please try again.'); // Show a user-friendly error message
    }
  }
}

export default AuthController;
