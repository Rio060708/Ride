import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyA8lswsOKDFWNyjW-YvnyjNuWWFHlW2QGQ",
  authDomain: "ride-app-eca64.firebaseapp.com",
  projectId: "ride-app-eca64",
  storageBucket: "ride-app-eca64.appspot.com",
  messagingSenderId: "894739607429",
  appId: "1:894739607429:web:1a947d3ad72ff96a5e5eec"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
