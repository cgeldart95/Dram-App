import AuthController from './controllers/authController';
import {
  db,
  collection,
  query,
  where,
  getDocs,
  addDoc,
} from 'firebase/firestore';

// authModel.js
class AuthModel {
  #userCollection;
  constructor(db) {
    this.db = db; //
    this.userCollection = collection(this.db, 'dram-users');
  }

  async authenticateCredentials(username, password) {
    try {
      const usernameExists = await this.checkUsernameExists(username);
      if (!usernameExists) {
        await this.addToDatabase(username, password);
        console.log('adding to database');
      } else {
        throw new Error('Username already exists');
        alert('username already exists');
      }
    } catch (err) {
      alert(err.message);
    }
  }

  async checkUsernameExists(username) {
    //creating a query
    const q = query(this.userCollection, where('username', '==', username));

    //store query result
    const queryResult = await getDocs(q);

    return !queryResult.empty;
  }

  async addToDatabase(username, password) {
    // Reference to the Firestore database
    const usersCollection = collection(this.db, 'dram-users'); // Assuming `this.db` is your Firestore instance

    // User data to be added
    const userData = {
      username: username,
      password: password, // Note: Do not store passwords in plain text
    };

    try {
      const docRef = await addDoc(usersCollection, userData);
      console.log('User added with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding user: ', error);
    }
  }
}

export default AuthModel;

//   async signup(username, password) {
//     // Check if the username already exists
//     const exists = await this.checkUsernameExists(username);
//     if (exists) {
//       throw new Error('Username already exists');
//     }
//     // Hash the password and save the user to the database
//     const hashedPassword = await this.hashPassword(password); // Assume you have a method to hash passwords
//     await this.database.saveUser({ username, password: hashedPassword });
//   }

//   async checkUsernameExists(username) {
//     // Logic to check if the username exists in the database
//     return await this.database.findUserByUsername(username);
//   }

//   async hashPassword(password) {
//     // Logic to hash the password (e.g., using bcrypt)
//     return hashedPassword; // Return the hashed password
//   }
