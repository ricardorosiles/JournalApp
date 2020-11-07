import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCJWG8iVEJw9TM2x5ynLCY8n8LeWGZta_w",
    authDomain: "react-apps-1f990.firebaseapp.com",
    databaseURL: "https://react-apps-1f990.firebaseio.com",
    projectId: "react-apps-1f990",
    storageBucket: "react-apps-1f990.appspot.com",
    messagingSenderId: "335176750001",
    appId: "1:335176750001:web:ac7ffa055d2074fd4da390"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}