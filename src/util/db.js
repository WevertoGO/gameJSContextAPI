import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage

const config = {
  apiKey: "AIzaSyCpsKSMde6bnYH5LVh8gh-XUA04ovGpIBw",
  authDomain: "jogosquina-bd95c.firebaseapp.com",
  databaseURL: "https://jogosquina-bd95c-default-rtdb.firebaseio.com",
  projectId: "jogosquina-bd95c",
  storageBucket: "jogosquina-bd95c.appspot.com",
  messagingSenderId: "30380378001",
  appId: "1:30380378001:web:7f311743dc0eacda58fc30",
  measurementId: "G-ZV12CKC463",
};

firebase.initializeApp(config)
export default firebase;
