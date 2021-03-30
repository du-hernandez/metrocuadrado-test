import firebase from 'firebase'
import Env from '../Environment/Environment'

const firebaseConfig = {
  apiKey: Env.get('FIREBASE_API_KEY'),
  authDomain: Env.get('FIREBASE_AUTH_DOMAIN'),
  projectId: Env.get('FIREBASE_PROJECT_ID'),
  storageBucket: Env.get('FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: Env.get('FIREBASE_MESSAGING_SENDER_ID'),
  appId: Env.get('FIREBASE_APP_ID'),
};

firebase.initializeApp(firebaseConfig);
firebase.auth()

export default firebase