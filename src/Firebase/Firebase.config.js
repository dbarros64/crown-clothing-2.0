import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB3-NDr-uGQ-VOVKQFvWeEBAoIbGTV55cM",
    authDomain: "crown-clothdb.firebaseapp.com",
    projectId: "crown-clothdb",
    storageBucket: "crown-clothdb.appspot.com",
    messagingSenderId: "67184053",
    appId: "1:67184053:web:8d164ad1a519c3c06765fc",
    measurementId: "G-HQB6KCTK1B"
  };

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  // GOOGLE AUTHENTICATION UTILITY
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;