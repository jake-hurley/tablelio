import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCmv-d4_5MONGmvfcsPGXdlBDIDcZbxMd4",
    authDomain: "tablio-48c32.firebaseapp.com",
    databaseURL: "https://tablio-48c32.firebaseio.com",
    projectId: "tablio-48c32",
    storageBucket: "tablio-48c32.appspot.com",
    messagingSenderId: "547366654080",
    appId: "1:547366654080:web:5781ef894cf0b053b75665",
    measurementId: "G-0K8BWGLNX3"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();