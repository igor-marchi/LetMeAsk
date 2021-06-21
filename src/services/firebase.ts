import firebase from 'firebase';

import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyAPcmcDyiUeTgegG2MM50TwavXscnc3J_U",
  authDomain: "nlwtogether-web.firebaseapp.com",
  databaseURL: "https://nlwtogether-web-default-rtdb.firebaseio.com",
  projectId: "nlwtogether-web",
  storageBucket: "nlwtogether-web.appspot.com",
  messagingSenderId: "506209367977",
  appId: "1:506209367977:web:5156ed417b47248987b6b8"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();
