import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyB3Z7fCzq82HDPye4wFoscKYwnr6lgTfqQ',
  authDomain: 'slack-clone-f5e51.firebaseapp.com',
  projectId: 'slack-clone-f5e51',
  storageBucket: 'slack-clone-f5e51.appspot.com',
  messagingSenderId: '779498134157',
  appId: '1:779498134157:web:77487ea487e03db3c8a0c4',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
