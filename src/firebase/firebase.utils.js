import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebrase/auth';

const config = {
  apiKey: "AIzaSyAlS1awqggxmK48wGfC2FXbDURpMnRckk4",
  authDomain: "crwn-db-f6177.firebaseapp.com",
  projectId: "crwn-db-f6177",
  storageBucket: "crwn-db-f6177.appspot.com",
  messagingSenderId: "925581006550",
  appId: "1:925581006550:web:a76d7689e84c7a9fb91b77",
  measurementId: "G-2PRT57DZW4"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;