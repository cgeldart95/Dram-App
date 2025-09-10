const { setGlobalOptions } = require('firebase-functions');
const { onRequest } = require('firebase-functions/https');
const logger = require('firebase-functions/logger');
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(); // Initializes Firebase Admin SDK

// Helper function to handle errors
const handleError = (res, error) => {
  console.error('Error:', error);
  res.status(500).send('Internal Server Error');
};

// User Data Endpoints
exports.createUser = functions.https.onRequest(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const userData = req.body;
  if (!userData || Object.keys(userData).length === 0) {
    return res.status(400).send('Request body cannot be empty.');
  }

  try {
    const docRef = await admin
      .firestore()
      .collection('dram-users')
      .add(userData);
    res
      .status(200)
      .send({ message: 'User created successfully!', documentId: docRef.id });
  } catch (error) {
    handleError(res, error);
  }
});

exports.getUsers = functions.https.onRequest(async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).send('Method Not Allowed');
  }

  try {
    const snapshot = await admin.firestore().collection('dram-users').get();
    const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).send(users);
  } catch (error) {
    handleError(res, error);
  }
});

// Whisky Data Endpoints
exports.createWhisky = functions.https.onRequest(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const whiskyData = req.body;
  if (!whiskyData || Object.keys(whiskyData).length === 0) {
    return res.status(400).send('Request body cannot be empty.');
  }

  try {
    const docRef = await admin
      .firestore()
      .collection('dram-whiskies')
      .add(whiskyData);
    res
      .status(200)
      .send({ message: 'Whisky created successfully!', documentId: docRef.id });
  } catch (error) {
    handleError(res, error);
  }
});

exports.getWhiskies = functions.https.onRequest(async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).send('Method Not Allowed');
  }

  try {
    const snapshot = await admin.firestore().collection('dram-whiskies').get();
    const whiskies = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).send(whiskies);
  } catch (error) {
    handleError(res, error);
  }
});

// Review Data Endpoints
exports.createReview = functions.https.onRequest(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const reviewData = req.body;
  if (!reviewData || Object.keys(reviewData).length === 0) {
    return res.status(400).send('Request body cannot be empty.');
  }

  try {
    const docRef = await admin
      .firestore()
      .collection('dram-reviews')
      .add(reviewData);
    res
      .status(200)
      .send({ message: 'Review created successfully!', documentId: docRef.id });
  } catch (error) {
    handleError(res, error);
  }
});

exports.getReviews = functions.https.onRequest(async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).send('Method Not Allowed');
  }

  try {
    const snapshot = await admin.firestore().collection('dram-reviews').get();
    const reviews = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).send(reviews);
  } catch (error) {
    handleError(res, error);
  }
});
