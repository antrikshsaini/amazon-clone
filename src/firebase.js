import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAs6X2cGbpB7PV8jdhbReEorsuBJTehxCY',
  authDomain: 'clone-8a5ba.firebaseapp.com',
  projectId: 'clone-8a5ba',
  storageBucket: 'clone-8a5ba.appspot.com',
  messagingSenderId: '765561947188',
  appId: '1:765561947188:web:c3076379612ebaff1c7661',
  measurementId: 'G-VEJNCQ5H23',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
