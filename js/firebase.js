// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, collection, addDoc } from 'firebase/firestore'; // Import Firestore
import { query, where, getDocs } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCkS1q6zecr7egFA6g8CfhBVMedygBnv6s',
  authDomain: 'dram-app-api.firebaseapp.com',
  projectId: 'dram-app-api',
  storageBucket: 'dram-app-api.appspot.com', // Corrected storage bucket URL
  messagingSenderId: '302862115844',
  appId: '1:302862115844:web:dce46cf4b3cd1ec4c4c151',
  measurementId: 'G-ZFEC20TTT1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore

// Export the db object for use in other files
export { db, collection, addDoc };
