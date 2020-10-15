import * as firebase from 'firebase'
import { Children } from 'react';

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


  export function retrieveCompanyData (companyName) {
    return firebase.database().ref('companies').child(companyName).once('value')
  }

  export function submitOrder (companyName, tableNumber, cart) {
    const tableQuery = firebase.database().ref('companies/' + companyName + '/tables' + '/' + tableNumber).child('order')
    tableQuery.set(cart)
  }

  export function updatePriceTotal (companyName, tableNumber, totalPrice) {
    const tableQuery = firebase.database().ref('companies/' + companyName + '/tables' + '/' + tableNumber + '/' + 'totalPrice')
    tableQuery.set(totalPrice)

  }

  export function retrieveTableData (companyName) {
    const tableQuery = firebase.database().ref('companies/' + companyName + '/tables')
    return tableQuery.on('value')
  } 