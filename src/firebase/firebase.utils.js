import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAHonNC9LhPwd5dwCPGJbOtElHG2zALljU",
    authDomain: "crwn-clothing-e4104.firebaseapp.com",
    databaseURL: "https://crwn-clothing-e4104.firebaseio.com",
    projectId: "crwn-clothing-e4104",
    storageBucket: "crwn-clothing-e4104.appspot.com",
    messagingSenderId: "1072749894763",
    appId: "1:1072749894763:web:3637b93831dc3c0b8ae52e",
    measurementId: "G-KR3ZD4N82W"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;