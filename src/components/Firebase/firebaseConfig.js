// import "firebase/analytics";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyCGpXKAqvQoFEKnrJFjEK_QB6ecoTbJ8UY',
  authDomain: 'multiple-pages-cb8c7.firebaseapp.com',
  databaseURL: 'https://multiple-pages-cb8c7.firebaseio.com',
  projectId: 'multiple-pages-cb8c7',
  storageBucket: 'multiple-pages-cb8c7.appspot.com',
  messagingSenderId: '981370509251',
  appId: '1:981370509251:web:7f5aa16558b50f7a368f76',
  measurementId: 'G-NNCTHJW6C5',
};

const fire = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };
export default fire;
