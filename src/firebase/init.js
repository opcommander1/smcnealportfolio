import firebase from 'firebase/app'
// import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC__TFpJ1AyIHh96-cd15vUC4QFnkPqaQk",
  authDomain: "smcnealportfolio.firebaseapp.com",
  databaseURL: "https://smcnealportfolio.firebaseio.com",
  projectId: "smcnealportfolio",
  storageBucket: "smcnealportfolio.appspot.com",
  messagingSenderId: "116624661754"
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();