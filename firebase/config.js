/*eslint-disable prettier/prettier */
// Your web app's Firebase configuration
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD5ZjMJkh6e0-9SsCvRreT_z9p3mRgqIqs',
  authDomain: 'tema-14c48.firebaseapp.com',
  databaseURL: 'https://tema-14c48.firebaseio.com',
  projectId: 'tema-14c48',
  storageBucket: 'tema-14c48.appspot.com',
  messagingSenderId: '7628045240547',
  appId: '1:628045240547:android:27cb021a39785583dd4dd6',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };

