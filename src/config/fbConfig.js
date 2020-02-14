import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var config = {
    apiKey: "AIzaSyB2VBlL3MKWJB9xrk2yvVQY7zBERSf1BtE",
    authDomain: "mff-app-c66e5.firebaseapp.com",
    databaseURL: "https://mff-app-c66e5.firebaseio.com",
    projectId: "mff-app-c66e5",
    storageBucket: "mff-app-c66e5.appspot.com",
    messagingSenderId: "708231396098",
    appId: "1:708231396098:web:2e47afbaa8891286e1a01b",
    measurementId: "G-W84VG4DRN7"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ });
  
  export default firebase 